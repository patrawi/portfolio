import { fly, type FlyParams, type TransitionConfig } from 'svelte/transition';

export const slideScale = (node: HTMLDivElement, options: FlyParams): TransitionConfig => {
	const slideTrans = fly(node, options);

	return {
		duration: options.duration,
		css: (t: number) => {
			const slideCss = slideTrans.css as (t: number, u?: number) => string;
			return `
                scale: ${t};
				opacity: ${t};
                transform: translateY(50%);
                ${slideCss(t)}
                
			`;
		}
	};
};
