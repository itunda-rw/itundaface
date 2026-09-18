# ItundaFace 2D → 3D Masters

The canonical flat SVG is the source of truth for every 3D master.

80×80 canonical SVG
→ preserve SVG paint order + coordinates
→ extrude each registered paint layer
→ convert strokes to attached shallow 3D detail
→ normalize the complete assembled glyph once
→ shared camera + shared light + restrained material

The 3D renderer must never redraw a master as an unrelated collection of primitives. A 3D master may add depth, bevel, lighting, shadow and optical calibration, but its silhouette, proportions and semantic marks come from the corresponding flat SVG.

depth, tilt and lift are optical rendering parameters only; they do not authorize changes to the canonical flat artwork.

This follows the system-level principles documented by TossFace—simple forms, optical consistency, one palette, consistent direction/angle and shared 3D viewing height—while keeping ItundaFace artwork original.
