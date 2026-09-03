# Autoplay Mute (Millennium plugin)

Mutes autoplaying `\<video\>` elements on Steam store/community pages so youÂ don't get hit with unexpected audio when opening a page.

## Setup

1. Clone the official template:

```
git clone https://github.com/SteamClientHomebrew/PluginTemplate autoplaymute  
cd autoplaymute
```

2. Overwrite the template's `millennium.toml` with the one here.

3. Overwrite `preload.ts` with the one here.

4. Delete the template's `backend/` and `frontend/` folders (not needed --Â this plugin is webkit-only, same as the base Review Bar setup).

5. Build:

```
bun install  
bun run build
```

6. Enable it in Steam \> Settings \> Millennium \> Plugins.

7. Fully restart Steam.

## What this doesn't do

- Can't mute cross-origin embedded video players (e.g. an iframe pointingÂ at YouTube), only native `\<video\>` tags. Steam's own store trailers useÂ native `\<video\>`, so this should cover the common case.

- Doesn't stop videos from *playing*, just from making sound. If you'dÂ rather have autoplay stopped entirely (not just muted), that's a smallÂ change -- call `video.pause()` alongside setting `muted`.


