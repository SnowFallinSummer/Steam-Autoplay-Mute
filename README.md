# Autoplay Mute

Autoplay Mute automatically mutes videos in Steam's built-in browser. It targets native HTML5 video elements in Steam's embedded Store and Community views.

## What it does

- Mutes videos that are already on the page when it loads.
- Watches for videos added later and mutes those too.
- Reapplies the muted state when a video starts playing or loads data.
- Leaves playback running, so videos are muted rather than paused.
- Does not control cross-origin iframe players such as embedded YouTube videos.

The plugin runs as a WebKit preload and does not need a separate backend.

## Build and install

Requirements: [Millennium](https://github.com/SteamClientHomebrew/Millennium) and [Bun](https://bun.sh/).

From this repository's root:

```sh
bun install
bun run build
```

Enable **Autoplay Mute** in Millennium's plugin settings. Restart Steam if needed.

## AI assistance and maintenance

AI tools helped with parts of development and troubleshooting. The maintainer is responsible for reviewing, testing, and maintaining the code. This disclosure is included for submission transparency.

## License

MIT. See [LICENSE](LICENSE).
