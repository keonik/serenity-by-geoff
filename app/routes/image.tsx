import fs from "node:fs/promises";
import path from "node:path";
import type { LoaderFunction } from "@remix-run/node";
import type React from "react";
import type { ComponentPropsWithoutRef } from "react";
import { sharp } from "~/entry.server";

const BadImageResponse = () => {
	const buffer = Buffer.from(
		"R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
		"base64",
	);
	return new Response(buffer, {
		status: 500,
		headers: {
			"Cache-Control": "max-age=0",
			"Content-Type": "image/gif;base64",
			"Content-Length": String(buffer.length),
		},
	});
};

export const loader: LoaderFunction = async ({
	request,
}: {
	request: Request;
}) => {
	const url = new URL(request.url);
	const src = url.searchParams.get("src");
	const width = url.searchParams.get("w");
	const quality = url.searchParams.get("q");
	if (!src || !width || !quality) {
		return BadImageResponse();
	}

	try {
		let imageBuffer: Buffer;

		if (src.startsWith("http://") || src.startsWith("https://")) {
			// Handle external URLs
			const image = await fetch(src);
			if (!image.ok || !image.body) {
				throw new Error(
					`fetching image failed. src: ${src}, status: ${image.status}`,
				);
			}
			imageBuffer = Buffer.from(await image.arrayBuffer());
		} else {
			// Handle local files
			const publicPath = path.join(process.cwd(), "public", src);
			imageBuffer = await fs.readFile(publicPath);
		}

		const resizedImage = await sharp(imageBuffer)
			.resize(Number.parseInt(width))
			.webp({
				quality: Number.parseInt(quality),
			})
			.toBuffer();

		return new Response(resizedImage, {
			status: 200,
			headers: {
				"Cache-Control": `max-age=${60 * 60 * 24 * 365}, public`,
				"Content-Type": "image/webp",
				"Content-Length": resizedImage.length.toFixed(0),
			},
		});
	} catch (error) {
		console.error(error);
		return BadImageResponse();
	}
};

const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
const quality = 75;

export const Img: React.FC<ComponentPropsWithoutRef<"img">> = (props) => {
	if (!props.src) {
		throw new Error("no src provided to Img component");
	}
	if (props.srcSet) {
		console.warn("srcSet will be overwritten by srcSetGenerator");
	}
	const srcSetParts = widths.map(
		(width) =>
			`/image?src=${encodeURIComponent(
				props.src || "",
			)}&w=${width}&q=${quality} ${width}w`,
	);
	return (
		<img
			alt={props.alt ?? "Image without alt text"}
			{...props}
			srcSet={srcSetParts.join(", ")}
			src={srcSetParts[0]}
			aria-label={props.alt ? undefined : "Image"}
		/>
	);
};
