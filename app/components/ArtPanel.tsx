import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type Tone = "brand" | "accent" | "mixed" | "sky" | "rose" | "amber" | "violet" | "emerald" | "fuchsia" | "orange" | "cyan" | "indigo" | "teal";

const fallbackGradient: Record<Tone, string> = {
	brand: "bg-linear-to-br from-brand-600 via-brand-700 to-brand-900",
	accent: "bg-linear-to-br from-accent-500 via-accent-600 to-brand-700",
	mixed: "bg-linear-to-br from-brand-500 via-brand-700 to-accent-600",
	sky: "bg-linear-to-br from-sky-500 via-sky-600 to-sky-800",
	rose: "bg-linear-to-br from-rose-500 via-rose-600 to-rose-800",
	amber: "bg-linear-to-br from-amber-500 via-amber-600 to-amber-800",
	violet: "bg-linear-to-br from-violet-500 via-violet-600 to-violet-800",
	emerald: "bg-linear-to-br from-emerald-500 via-emerald-600 to-emerald-800",
	fuchsia: "bg-linear-to-br from-fuchsia-500 via-fuchsia-600 to-fuchsia-800",
	orange: "bg-linear-to-br from-orange-500 via-orange-600 to-orange-800",
	cyan: "bg-linear-to-br from-cyan-500 via-cyan-600 to-cyan-800",
	indigo: "bg-linear-to-br from-indigo-500 via-indigo-600 to-indigo-800",
	teal: "bg-linear-to-br from-teal-500 via-teal-600 to-teal-800",
};

const photoOverlay: Record<Tone, string> = {
	brand: "bg-linear-to-br from-brand-900/70 via-brand-900/20 to-accent-600/40",
	accent: "bg-linear-to-br from-brand-900/70 via-brand-900/20 to-accent-600/40",
	mixed: "bg-linear-to-br from-brand-900/70 via-brand-900/20 to-accent-600/40",
	sky: "bg-linear-to-br from-sky-900/70 via-sky-900/25 to-sky-600/40",
	rose: "bg-linear-to-br from-rose-900/70 via-rose-900/25 to-rose-600/40",
	amber: "bg-linear-to-br from-amber-900/70 via-amber-900/25 to-amber-600/40",
	violet: "bg-linear-to-br from-violet-900/70 via-violet-900/25 to-violet-600/40",
	emerald: "bg-linear-to-br from-emerald-900/70 via-emerald-900/25 to-emerald-600/40",
	fuchsia: "bg-linear-to-br from-fuchsia-900/70 via-fuchsia-900/25 to-fuchsia-600/40",
	orange: "bg-linear-to-br from-orange-900/70 via-orange-900/25 to-orange-600/40",
	cyan: "bg-linear-to-br from-cyan-900/70 via-cyan-900/25 to-cyan-600/40",
	indigo: "bg-linear-to-br from-indigo-900/70 via-indigo-900/25 to-indigo-600/40",
	teal: "bg-linear-to-br from-teal-900/70 via-teal-900/25 to-teal-600/40",
};

const photoBase: Record<Tone, string> = {
	brand: "bg-brand-900",
	accent: "bg-brand-900",
	mixed: "bg-brand-900",
	sky: "bg-sky-900",
	rose: "bg-rose-900",
	amber: "bg-amber-900",
	violet: "bg-violet-900",
	emerald: "bg-emerald-900",
	fuchsia: "bg-fuchsia-900",
	orange: "bg-orange-900",
	cyan: "bg-cyan-900",
	indigo: "bg-indigo-900",
	teal: "bg-teal-900",
};

// Renders a Lorem Picsum photo (deterministic per `seed`) with a colour-tinted
// overlay driven by `tone`. Omit `seed` to fall back to a gradient placeholder.
export default function ArtPanel({
	icon: Icon,
	label,
	tone = "brand",
	seed,
	priority = false,
	className = "",
}: {
	icon: LucideIcon;
	label?: string;
	tone?: Tone;
	seed?: string;
	priority?: boolean;
	className?: string;
}) {
	// Tailwind emits `.relative` after `.absolute` in its stylesheet, so both
	// classes on one element always resolve to `position: relative` — only add
	// our own `relative` when the caller isn't already supplying a position.
	const isPositioned = /(^|\s)(absolute|fixed|sticky|relative)(\s|$)/.test(className);
	const position = isPositioned ? "" : "relative";

	return (
		<div className={`${position} overflow-hidden rounded-4xl ${seed ? photoBase[tone] : fallbackGradient[tone]} ${className}`}>
			{seed ? (
				<>
					<Image
						src={`https://picsum.photos/seed/${seed}/900/900`}
						alt=""
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="object-cover"
						priority={priority}
					/>
					<div className={`absolute inset-0 ${photoOverlay[tone]} mix-blend-multiply`} />
					<div className="absolute inset-0 bg-brand-900/10" />
				</>
			) : (
				<div className="absolute inset-0 dot-grid opacity-40" />
			)}
			<div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
			<div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
			<div className="relative h-full w-full flex items-center justify-center">
				<div className="w-24 h-24 rounded-3xl bg-white/15 border border-white/25 flex items-center justify-center backdrop-blur-sm">
					<Icon className="w-11 h-11 text-white" strokeWidth={1.75} />
				</div>
			</div>
			{label && (
				<div className="absolute bottom-4 left-4 right-4">
					<div className="glass rounded-xl px-3.5 py-2 inline-block">
						<span className="text-xs font-semibold text-brand-900">{label}</span>
					</div>
				</div>
			)}
		</div>
	);
}
