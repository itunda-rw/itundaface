#!/usr/bin/env python3
"""Compile ItundaFace SVG masters into an SVG-in-OpenType color font."""

from pathlib import Path
import json
import re

from fontTools.fontBuilder import FontBuilder
from fontTools.ttLib import newTable
from fontTools.ttLib.tables.S_V_G_ import SVGDocument
from fontTools.ttLib.tables._g_l_y_f import Glyph

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = ROOT / "font"
CONFIG = json.loads((FONT_DIR / "compiler.config.json").read_text())
MANIFEST = json.loads((FONT_DIR / "build-manifest.json").read_text())

if CONFIG["target"] != "SVG-in-OpenType":
    raise SystemExit(f"Unsupported compiler target: {CONFIG['target']}")

units = int(CONFIG["unitsPerEm"])
canvas = CONFIG["glyphCanvas"]
if canvas != {"width": 80, "height": 80}:
    raise SystemExit("The SVG compiler currently requires the canonical 80x80 canvas")

scale = units / canvas["width"]
if abs(scale - 12.5) > 1e-9:
    raise SystemExit("The SVG compiler requires a 1000 UPM / 80px scale")

font_glyphs = [".notdef"] + [g["id"] for g in MANIFEST["glyphs"]]
codepoints = {int(g["codepoint"], 16): g["id"] for g in MANIFEST["glyphs"]}

fb = FontBuilder(units, isTTF=True)
fb.setupGlyphOrder(font_glyphs)
fb.setupCharacterMap(codepoints)
fb.setupGlyf({name: Glyph() for name in font_glyphs})
fb.setupHorizontalMetrics({name: (units, 0) for name in font_glyphs})
fb.setupHorizontalHeader(ascent=units, descent=-200)
fb.setupOS2(
    sTypoAscender=units,
    sTypoDescender=-200,
    sTypoLineGap=0,
    usWinAscent=units,
    usWinDescent=200,
    sxHeight=500,
    sCapHeight=700,
)
fb.setupPost(keepGlyphNames=True)
fb.setupNameTable({
    "familyName": "ItundaFace",
    "styleName": "Regular",
    "fullName": "ItundaFace Regular",
    "psName": "ItundaFace-Regular",
})

svg_table = newTable("SVG ")
documents = []

for glyph in MANIFEST["glyphs"]:
    source = ROOT / glyph["flatAsset"]
    raw = source.read_text(encoding="utf-8")
    match = re.search(r"<svg\b[^>]*>(.*)</svg>\s*$", raw, flags=re.DOTALL | re.IGNORECASE)
    if not match:
        raise SystemExit(f"{glyph['id']}: invalid SVG master")

    # OpenType SVG glyphs use a font-space origin. The canonical ItundaFace
    # artwork is authored in a top-left 80x80 canvas, so flip Y and scale
    # 80px -> 1000 UPM without changing the artwork itself.
    body = match.group(1).strip()
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" '
        'viewBox="0 0 1000 1000">'
        '<g transform="translate(0 1000) scale(12.5 -12.5)">'
        f"{body}"
        "</g></svg>"
    )
    gid = font_glyphs.index(glyph["id"])
    documents.append(SVGDocument(svg, gid, gid))

svg_table.docList = documents
fb.font["SVG "] = svg_table

output = FONT_DIR / CONFIG["output"]["file"]
output.parent.mkdir(parents=True, exist_ok=True)
fb.save(output)

print(f"ItundaFace SVG-in-OpenType font built: {output}")
print(f"Glyphs: {len(MANIFEST['glyphs'])}")
