# ItundaFace Test Lab

Cross-platform QA harness for the Itunda icon and ItundaFace assets.

## QA layers

1. **Expo Go** — visual in-app checks on Android, iOS and web.
2. **Development Build** — real installed Android/iOS launcher icon, including Android adaptive/themed behavior.
3. **Preview build** — standalone icon/splash verification without the development client.
4. **Web export** — browser favicon/PWA verification.

Expo recommends a square 1024×1024 PNG for the app icon; Android adaptive icons use foreground/background layers and can provide a monochrome image. Expo CLI can generate a favicon from `web.favicon`. citeturn0search0turn0search1turn0search10

## Local commands

From `expo-test-lab/`:

```bash
npm install
npx expo start
npx expo start --web
eas build --profile development --platform android
eas build --profile development --platform ios
eas build --profile preview --platform android
eas build --profile preview --platform ios
```

The development profile produces an installable native build with `expo-dev-client`; the preview profile is useful for final standalone icon verification.

The canonical icon source is `assets/itunda-icon.svg`. The icon-generation workflow creates the PNG assets consumed by `app.json`.
