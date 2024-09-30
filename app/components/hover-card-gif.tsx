"use client";
import { cn } from "~/lib/utils";
import { Img } from "~/routes/image";

interface HoverCardGifProps {
	title: string;
	description: string;
	backgroundUrl: string;
	hoverBackgroundUrl?: string;
}

export function HoverCardGif({
	title,
	description,
	backgroundUrl,
	hoverBackgroundUrl,
}: HoverCardGifProps) {
	return (
		<div className="w-full">
			<Img
				src={backgroundUrl}
				alt={title}
				className="absolute w-full h-96 object-cover opacity-80 -z-10"
			/>
			<div
				className={cn(
					"group w-full overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border ",
					// Preload hover image by setting it in a pseudo-element if hoverBackgroundUrl is provided
					hoverBackgroundUrl &&
						`before:bg-[url(${hoverBackgroundUrl})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
					hoverBackgroundUrl && `hover:bg-[url(${hoverBackgroundUrl})]`,
					"hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
					"transition-all duration-500",
				)}
			>
				<div className="text relative z-50">
					<h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
						{title}
					</h1>
					<p className="font-normal text-base text-gray-50 relative my-4">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
