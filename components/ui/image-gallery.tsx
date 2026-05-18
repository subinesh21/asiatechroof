'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const LOCAL_IMAGES = [
	'/grid/IMG-20221215-WA0063.webp',
	'/grid/IMG-20221215-WA0064.webp',
	'/grid/IMG-20221215-WA0067.webp',
	'/grid/IMG-20221215-WA0068.webp',
	'/grid/IMG-20221215-WA0127.webp',
	'/grid/IMG-20221215-WA0130.webp',
	'/grid/IMG-20231115-WA0012.webp',
	'/grid/IMG-20231115-WA0013.webp',
	'/grid/IMG-20231115-WA0014.webp',
	'/grid/IMG-20250413-WA0006.webp',
	'/grid/IMG-20250413-WA0010.webp',
	'/grid/IMG-20250413-WA0016.webp',
	'/grid/IMG-20250413-WA0049.webp',
	'/grid/WhatsAppImage2023-11-15at02.41.58_9b0ed2e8.webp',
	'/grid/image-1.webp',
	'/grid/image-2.webp',
	'/grid/image-3.webp',
	'/grid/image-4.webp',
];

export function ImageGallery({ className }: { className?: string }) {
	return (
		<div className={cn('relative w-full', className)}>
			<div className="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 3 }).map((_, col) => (
					<div key={col} className="grid gap-6">
						{Array.from({ length: 6 }).map((_, index) => {
							const imageSrc = LOCAL_IMAGES[(col * 6 + index) % LOCAL_IMAGES.length];
							const isPortrait = (col + index) % 2 === 0;
							const ratio = isPortrait ? 3 / 4 : 4 / 3;

							return (
								<AnimatedImage
									key={`${col}-${index}`}
									alt={`Roofing project ${col}-${index}`}
									src={imageSrc}
									ratio={ratio}
								/>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}

interface AnimatedImageProps {
	alt: string;
	src: string;
	className?: string;
	ratio: number;
}

function AnimatedImage({ alt, src, ratio }: AnimatedImageProps) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

	return (
		<AspectRatio
			ref={ref}
			ratio={ratio}
			className="relative size-full overflow-hidden rounded-xl transition-transform duration-500 hover:scale-[1.02]"
		>
			<Image
				fill
				alt={alt}
				src={src}
				className={cn(
					'size-full rounded-xl object-cover opacity-0 transition-all duration-1000 ease-in-out',
					{ 'opacity-100': isInView }
				)}
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
			/>
		</AspectRatio>
	);
}
