"use client";

import { useEffect, useRef, useState } from "react";

export default function StatBar({ label, value }: { label: string; value: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref}>
			<div className="flex items-center justify-between mb-1.5">
				<span className="text-sm font-medium text-gray-700">{label}</span>
				<span className="text-sm font-semibold text-brand-600">{visible ? value : 0}%</span>
			</div>
			<div className="h-2 rounded-full bg-gray-100 overflow-hidden">
				<div
					className="h-full rounded-full bg-linear-to-r from-brand-500 to-accent-500 transition-[width] duration-1000 ease-out"
					style={{ width: visible ? `${value}%` : "0%" }}
				/>
			</div>
		</div>
	);
}
