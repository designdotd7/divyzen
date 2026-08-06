import type { LucideIcon } from "lucide-react";

// Original gradient artwork used in place of photography — swap for real
// photos later by rendering an <Image> here instead.
export default function ArtPanel({
	icon: Icon,
	label,
	tone = "brand",
	className = "",
}: {
	icon: LucideIcon;
	label?: string;
	tone?: "brand" | "accent" | "mixed";
	className?: string;
}) {
	const gradient =
		tone === "accent"
			? "bg-linear-to-br from-accent-500 via-accent-600 to-brand-700"
			: tone === "mixed"
				? "bg-linear-to-br from-brand-500 via-brand-700 to-accent-600"
				: "bg-linear-to-br from-brand-600 via-brand-700 to-brand-900";

	// Tailwind emits `.relative` after `.absolute` in its stylesheet, so both
	// classes on one element always resolve to `position: relative` — only add
	// our own `relative` when the caller isn't already supplying a position.
	const isPositioned = /(^|\s)(absolute|fixed|sticky|relative)(\s|$)/.test(className);
	const position = isPositioned ? "" : "relative";

	return (
		<div className={`${position} overflow-hidden rounded-4xl ${gradient} ${className}`}>
			<div className="absolute inset-0 dot-grid opacity-40" />
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
