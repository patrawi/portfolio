import type { ActionReturn } from 'svelte/action';

const TRANSITION_MS = 300;

function calculateMaxTilt(width: number, height: number) {
	const smallerDimension = Math.min(width, height);
	const factor = 0.05;
	return factor * smallerDimension;
}

function getSettings(setting = {}) {
	return { scale: 1, reverse: false, ...setting };
}

export const tilt = (node: HTMLDivElement, settingsObj: any): ActionReturn<HTMLDivElement> => {
	let settings = getSettings(settingsObj);
	let reverse = settings.reverse ? -1 : 1;
	let transitionId: number | undefined;
	let rect: DOMRect;
	function updateRect(): void {
		rect = node.getBoundingClientRect();
	}
	function onMouseMove(e: MouseEvent) {
		updateRect();
		const percX = (e.clientX - rect.left) / rect.width;
		const percY = (e.clientY - rect.top) / rect.height;
		const { scale } = settings;
		const testMax = calculateMaxTilt(rect.width, rect.height);
		const twiceMax = testMax * 2;
		const tiltX = testMax - percX * twiceMax;
		const tiltY = percY * twiceMax - testMax;

		node.style.transform =
			`perspective(${1000}px)` +
			`rotateX(${reverse * tiltY}deg)` +
			`rotateY(${reverse * -tiltX}deg)` +
			`scale3d(${Array(3).fill(scale).join(', ')})`;
	}
	function smoothTransition() {
		clearTimeout(transitionId);
		node.style.willChange = 'transform';
		node.style.transition = `${TRANSITION_MS}ms`;
		transitionId = setTimeout(() => (node.style.transition = '0s'), TRANSITION_MS);
	}
	function onMouseLeave() {
		smoothTransition();
		node.style.transform =
			`perspective(${1000}px) ` + `rotateX(0deg)` + `rotateY(0deg)` + `scale3d(1,1,1)`;
	}
	function onResize(): void {
		updateRect();
	}
	function onMouseEnter() {
		smoothTransition();
		node.style.willChange = 'transform';
	}
	updateRect();
	node.addEventListener('mousemove', onMouseMove);
	node.addEventListener('mouseleave', onMouseLeave);
	node.addEventListener('mouseenter', onMouseEnter);
	window.addEventListener('resize', onResize);
	return {
		destroy() {
			node.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseleave', onMouseLeave);
			node.removeEventListener('mouseleave', onMouseEnter);
			node.removeEventListener('resize', onResize);
		},
		update(settingsObj) {
			settings = getSettings(settingsObj);
			reverse = settings.reverse ? -1 : 1;
			updateRect();
		}
	};
};
