/**
 * Autoplay Mute — webkit entry point.
 *
 * Mutes native HTML5 videos in Steam's store/community pages.
 * Cross-origin iframe players (such as embedded YouTube) are outside this
 * preload's access and are intentionally not modified.
 */

const PROCESSED_ATTR = 'data-autoplaymute-done';

function muteVideo(video: HTMLVideoElement) {
	if (video.hasAttribute(PROCESSED_ATTR)) return;
	video.setAttribute(PROCESSED_ATTR, 'true');

	video.muted = true;
	video.defaultMuted = true;

	// Re-assert mute if Steam changes the video's state during playback.
	video.addEventListener('play', () => {
		video.muted = true;
	});
	video.addEventListener('loadeddata', () => {
		video.muted = true;
	});
}

function scan() {
	document.querySelectorAll('video').forEach((el) => muteVideo(el as HTMLVideoElement));
}

const observer = new MutationObserver(scan);

export default async function main() {
	// Querying the document is safe before <body> exists. Observe the document
	// element instead of assuming body has already been created by Steam.
	scan();

	const root = document.documentElement;
	if (root) {
		observer.observe(root, { childList: true, subtree: true });
		return;
	}

	// Defensive fallback for unusually early preload execution.
	document.addEventListener(
		'DOMContentLoaded',
		() => {
			scan();
			if (document.documentElement) {
				observer.observe(document.documentElement, { childList: true, subtree: true });
			}
		},
		{ once: true },
	);
}
