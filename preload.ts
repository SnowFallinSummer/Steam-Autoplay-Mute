/**
 * Autoplay Mute — webkit entry point.
 *
 * Mutes any HTML5 <video> element on Steam's store/community pages, so
 * autoplaying trailers/hero banners don't blast audio unexpectedly.
 *
 * Only covers native <video> tags (which is how Steam serves its own
 * hero-banner/trailer clips) -- it can't reach into cross-origin embedded
 * players (e.g. a YouTube iframe), since browsers block scripts from
 * touching another origin's page content. Steam's own trailers are native
 * <video> elements though, so this should cover the common case.
 */

const PROCESSED_ATTR = 'data-autoplaymute-done';

function muteVideo(video: HTMLVideoElement) {
	if (video.hasAttribute(PROCESSED_ATTR)) return;
	video.setAttribute(PROCESSED_ATTR, 'true');

	video.muted = true;
	video.defaultMuted = true;

	// Some pages re-enable sound when a video (re)starts playing (e.g. after
	// scrolling a carousel back to it) -- re-assert muted each time to be safe.
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

const observer = new MutationObserver(() => scan());

export default async function main() {
	scan();
	observer.observe(document.body, { childList: true, subtree: true });
}
