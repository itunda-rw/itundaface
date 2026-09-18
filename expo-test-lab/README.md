# ItundaFace Test Lab

Cross-platform QA harness for the Itunda icon and ItundaFace assets.

## Targets

- Expo Go: in-app visual checks on Android, iOS and web.
- Development Build: actual Android/iOS launcher icon verification.
- Web: browser favicon/PWA icon verification.
- EAS/local native build: final native icon verification.

The native icon assets are generated from `assets/itunda-icon.svg` by `.github/workflows/generate-expo-icon-assets.yml`.

Expo's current app-icon guidance uses a 1024×1024 PNG source, Android adaptive foreground/background layers, and `web.favicon` for browser favicon configuration.
