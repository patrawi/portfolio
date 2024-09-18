import type { TransitionConfig } from 'svelte/transition';

interface TypeWriter {
	speed: number;
}
export const typewriter = (node: HTMLSpanElement, options: TypeWriter): TransitionConfig => {
	const { speed } = options;
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}
	const text = node.textContent as string;
	const duration = text.length / (speed * 0.01);
	return {
		duration,
		tick: (t) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
};

// In this transition, we will take only one node and check if it has only one and is it a text node if yest we divide
// its length with speed * 0.01 (100)
// Homework :
// make it backward and change to new word in the same node.
