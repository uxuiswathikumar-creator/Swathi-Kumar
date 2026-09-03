export type Creative = {
	src: string;
	label: string;
	aspect: string;
	badge: 'arrow' | 'check';
	href?: string;
};

export const leftItems: Creative[] = [
	{ src: '/images/F.png', label: 'Flipopay', aspect: 'aspect-[3/2]', badge: 'check', href: '/work/flipopay' },
	{ src: '/images/U.png', label: 'Ulaa', aspect: 'aspect-[10/9]', badge: 'check', href: '/work/ulaa' },
	{ src: '/images/A.png', label: 'My Art Gallery', aspect: 'aspect-[10/9]', badge: 'check', href: '/work/art-gallery' }
];

export const rightItems: Creative[] = [
	{ src: '/images/S.png', label: 'Swiggy', aspect: 'aspect-[10/9]', badge: 'check', href: '/work/swiggy' },
	{ src: '/images/DD.png', label: 'Design System', aspect: 'aspect-[3/2]', badge: 'check', href: '/work/design-system' },
	{ src: '/images/J.png', label: 'Jelly Skin', aspect: 'aspect-[3/2]', badge: 'check', href: '/work/jelly-skin' }
];

export const allCreatives: Creative[] = [leftItems[0], rightItems[0], leftItems[1], rightItems[1], leftItems[2], rightItems[2]];
