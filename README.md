# Autoplay Mute

A Millennium WebKit plugin that automatically mutes native HTML5 `<video>` elements in Steam's embedded Store and Community views.

## Behavior

- Mutes videos already present when the page loads.
- Watches for dynamically inserted videos and mutes them.
- Reasserts mute state when videos play or load data.
- Does not pause videos or control cross-origin iframe players such as YouTube embeds.

## Build and install

Requirements: [Millennium](https://github.com/SteamClientHomebrew/Millennium) and [Bun](https://bun.sh/).

From this repository's root:

```sh
bun install
bun run build
```

Enable **Autoplay Mute** in Millennium's plugin settings. Restart Steam if needed.

## AI assistance and maintenance

AI tools assisted with parts of development and troubleshooting. The maintainer is responsible for reviewing, testing, and maintaining the code; AI assistance is disclosed here for submission transparency.

## License

MIT. See [LICENSE](LICENSE).
