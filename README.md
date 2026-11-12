# Autoplay Mute

Autoplay Mute automatically mutes native HTML5 videos in Steam's embedded browser views, preventing Steam Store and Community video autoplay from producing unexpected audio.

## Behavior

- Mutes native `<video>` elements already present when the preload runs.
- Detects videos inserted later and mutes them as they appear.
- Reasserts the muted state when a video starts playing or loads data.
- Leaves video playback running; it mutes audio rather than pausing videos.
- Does not reach into cross-origin iframe players (for example, an embedded YouTube player).

The plugin uses a Millennium WebKit preload (`preload.ts`) to operate in Steam's embedded web content. It does not add a separate UI, backend service, network request, or external browser extension.

## Download and install

**[Download the latest release](https://github.com/SnowFallinSummer/Steam-Autoplay-Mute/releases/latest)** and save the attached `.star` package.

You need [Millennium](https://github.com/SteamClientHomebrew/Millennium) installed first. For a manual install:

1. Fully exit Steam.
2. Download the latest `.star` file from the Releases page above.
3. Put the `.star` file in Millennium's plugin directory:
   - **Windows:** `%STEAM%\millennium\plugin`
   - **Linux:** `~/.local/share/millennium/plugins`
4. Start Steam, open **Steam → Millennium → Plugins**, enable the plugin, save changes, and restart Steam if prompted.

See Millennium's [official plugin installation guide](https://docs.steambrew.app/users/guides/installing-addons) and [plugin directory reference](https://docs.steambrew.app/users/getting-started/structure) for current instructions.

## Build

Requirements: [Millennium](https://github.com/SteamClientHomebrew/Millennium) and [Bun](https://bun.sh/).

From the repository root:

```sh
bun install
bun run build
```

The GitHub Actions workflow builds the plugin, verifies the generated `.star` package with Starlight, and publishes it as a downloadable GitHub Release when a version tag is pushed.

## AI assistance and maintenance

AI tools assisted with parts of development and troubleshooting. The maintainer is responsible for reviewing, testing, and maintaining the code. This disclosure is included for submission transparency.

## License

MIT. See [LICENSE](LICENSE).
