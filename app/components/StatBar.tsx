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
			<div className="flex items-baseline justify-between mb-2">
				<span className="text-xs uppercase tracking-widest text-ink-muted">{label}</span>
				<span className="font-display text-xl text-ink">{visible ? value : 0}%</span>
			</div>
			<div className="h-px bg-line">
				<div className="h-px bg-accent transition-[width] duration-1000 ease-out" style={{ width: visible ? `${value}%` : "0%" }} />
			</div>
		</div>
	);
}
