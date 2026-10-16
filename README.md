# Autoplay Mute

Tired of videos suddenly making noise while you're browsing Steam? Autoplay Mute keeps native videos in Steam's built-in browser muted, while letting them play as usual.

It mutes videos already on the page and catches new ones as they appear. If a video starts playing or loads more data, the plugin reapplies mute so the sound stays off.

It works with native HTML5 videos in Steam's embedded Store and Community views. It doesn't control players loaded inside cross-origin iframes, such as embedded YouTube videos. The plugin runs as a WebKit preload and doesn't need a separate backend.

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
