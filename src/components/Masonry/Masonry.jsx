"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import "./Masonry.css";
import { useMediaQuery } from "../../helpers/useMediaQuery";

const GAP_WEIGHT = 0.04; // rough share of the gap, relative to column width

// `ratio` (width / height) is only a fallback until the real size is measured.
const images = [
	{ id: 1, src: "/tulum/1K3A8082.JPG", alt: "", ratio: 0.75 },
	{ id: 2, src: "/tulum/1K3A8290.JPG", alt: "", ratio: 1.5 },
	{
		id: 3,
		src: "/tulum/b68098af-8212-4383-9f39-a4b48a92fe17.JPG",
		alt: "",
		ratio: 1.5,
	},
	{ id: 6, src: "/tulum/hero-t1.JPG", alt: "", ratio: 0.75 },
	{ id: 4, src: "/tulum/Sunrise_Yoga-06.JPG", alt: "", ratio: 1.5 },
	{ id: 5, src: "/tulum/IMG_0938.JPG", alt: "", ratio: 1.5 },
	{ id: 9, src: "/tulum/IMG_7870.JPG", alt: "", ratio: 0.75 },
	{ id: 8, src: "/tulum/Sunrise-11.JPG", alt: "", ratio: 1.5 },
	{ id: 7, src: "/tulum/IMG_0939.JPG", alt: "", ratio: 1.5 },
	{ id: 10, src: "/tulum/Cenote-Corazon.jpg", alt: "", ratio: 1.5 },
	{ id: 11, src: "/tulum/IMG_9978.JPG", alt: "", ratio: 0.75 },
];

// Loads every image once to learn its real height/width ratio.
function useMeasuredRatios(list) {
	const [measured, setMeasured] = useState({});

	useEffect(() => {
		let cancelled = false;
		list.forEach(({ id, src }) => {
			if (!src) return;
			const probe = new Image();
			const done = (hOverW) => {
				if (cancelled) return;
				setMeasured((prev) => (id in prev ? prev : { ...prev, [id]: hOverW }));
			};
			probe.onload = () => done(probe.naturalHeight / probe.naturalWidth || 1);
			probe.onerror = () => done(1);
			probe.src = src;
		});
		return () => {
			cancelled = true;
		};
	}, [list]);

	const ready = list.every(({ id, src }) => !src || id in measured);
	return { measured, ready };
}

// Puts each image in the shortest column, then moves/swaps images between
// columns until the column heights are as even as possible.
function balanceColumns(heights, cols) {
	const colOf = new Array(heights.length);
	const sums = new Array(cols).fill(0);

	heights.forEach((h, i) => {
		const c = sums.indexOf(Math.min(...sums));
		colOf[i] = c;
		sums[c] += h;
	});

	const spread = () => Math.max(...sums) - Math.min(...sums);

	for (let pass = 0; pass < 100; pass++) {
		const current = spread();
		let best = null;
		let bestSpread = current;

		for (let i = 0; i < heights.length; i++) {
			const from = colOf[i];

			// try moving image i to another column
			for (let c = 0; c < cols; c++) {
				if (c === from) continue;
				sums[from] -= heights[i];
				sums[c] += heights[i];
				const s = spread();
				sums[from] += heights[i];
				sums[c] -= heights[i];
				if (s < bestSpread - 1e-9) {
					bestSpread = s;
					best = { type: "move", i, c };
				}
			}

			// try swapping image i with an image in another column
			for (let j = i + 1; j < heights.length; j++) {
				const other = colOf[j];
				if (other === from) continue;
				const diff = heights[i] - heights[j];
				sums[from] -= diff;
				sums[other] += diff;
				const s = spread();
				sums[from] += diff;
				sums[other] -= diff;
				if (s < bestSpread - 1e-9) {
					bestSpread = s;
					best = { type: "swap", i, j };
				}
			}
		}

		if (!best) break;

		if (best.type === "move") {
			sums[colOf[best.i]] -= heights[best.i];
			sums[best.c] += heights[best.i];
			colOf[best.i] = best.c;
		} else {
			const a = colOf[best.i];
			const b = colOf[best.j];
			const diff = heights[best.i] - heights[best.j];
			sums[a] -= diff;
			sums[b] += diff;
			colOf[best.i] = b;
			colOf[best.j] = a;
		}
	}

	return colOf;
}

function Lightbox({ images, index, onClose, onChange }) {
	const count = images.length;

	const prev = useCallback(
		() => onChange((index - 1 + count) % count),
		[index, count, onChange],
	);
	const next = useCallback(
		() => onChange((index + 1) % count),
		[index, count, onChange],
	);

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowLeft") prev();
			else if (e.key === "ArrowRight") next();
		};
		document.addEventListener("keydown", onKey);
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = originalOverflow;
		};
	}, [onClose, prev, next]);

	const image = images[index];

	return createPortal(
		<div
			className="pin-lightbox"
			role="dialog"
			aria-modal="true"
			aria-label="Image viewer"
			onClick={onClose}
		>
			<button
				type="button"
				className="pin-lightbox__close"
				onClick={onClose}
				aria-label="Close"
			>
				×
			</button>
			<button
				type="button"
				className="pin-lightbox__nav pin-lightbox__nav--prev"
				onClick={(e) => {
					e.stopPropagation();
					prev();
				}}
				aria-label="Previous image"
			>
				‹
			</button>
			<img
				className="pin-lightbox__img"
				src={image.src}
				alt={image.alt}
				onClick={(e) => e.stopPropagation()}
			/>
			<button
				type="button"
				className="pin-lightbox__nav pin-lightbox__nav--next"
				onClick={(e) => {
					e.stopPropagation();
					next();
				}}
				aria-label="Next image"
			>
				›
			</button>
		</div>,
		document.body,
	);
}

export default function Masonry() {
	const isMobile = useMediaQuery();

	const COLUMNS = isMobile ? 2 : 3;
	const { measured, ready } = useMeasuredRatios(images);
	const [active, setActive] = useState(null);
	const close = useCallback(() => setActive(null), []);

	const columns = useMemo(() => {
		const heights = images.map(
			(img) => (measured[img.id] ?? 1 / (img.ratio || 1)) + GAP_WEIGHT,
		);
		const colOf = balanceColumns(heights, COLUMNS);
		const result = Array.from({ length: COLUMNS }, () => []);
		// keep original order inside each column
		images.forEach((img, i) => result[colOf[i]].push(img));
		return result;
	}, [measured]);

	return (
		<>
			<div className={`pin-masonry${ready ? "" : " pin-masonry--loading"}`}>
				{columns.map((column, colIndex) => (
					<div
						className="pin-masonry__column"
						key={colIndex}
					>
						{column.map((image) => (
							<div
								className="pin-masonry__item"
								key={image.id}
							>
								<button
									type="button"
									className="pin-masonry__button"
									onClick={() => setActive(images.indexOf(image))}
									aria-label={image.alt || "View image"}
								>
									<img
										src={image.src}
										alt={image.alt}
										style={
											!image.src ? { aspectRatio: image.ratio } : undefined
										}
									/>
								</button>
							</div>
						))}
					</div>
				))}
			</div>

			{active !== null && (
				<Lightbox
					images={images}
					index={active}
					onClose={close}
					onChange={setActive}
				/>
			)}
		</>
	);
}
