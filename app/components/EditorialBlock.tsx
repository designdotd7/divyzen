import type { LucideIcon } from "lucide-react";

// Original artwork used in place of photography — swap for a real photo
// later by rendering an <Image> inside the fill div below.
// NOTE: keep this component's own position as its default (static, in normal
// flow). To place it absolutely within a custom layout, wrap it in an outer
// positioned <div> and size this component with w-full h-full — don't pass
// "absolute" into `className` here.
export default function EditorialBlock({
	icon: Icon,
	caption,
	index,
	tone = "ink",
	className = "",
}: {
	icon: LucideIcon;
	caption?: string;
	index?: string;
	tone?: "ink" | "accent" | "cream";
	className?: string;
}) {
	const fill = tone === "accent" ? "bg-accent" : tone === "cream" ? "bg-cream-2 border border-line" : "bg-ink";
	const iconColor = tone === "cream" ? "text-ink" : "text-cream";
	const textColor = tone === "cream" ? "text-ink" : "text-cream/70";

	return (
		<div className={`relative ${className}`}>
			<div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 border border-ink/20" />
			<div className={`relative h-full w-full ${fill} flex flex-col justify-between p-7`}>
				<Icon className={`w-10 h-10 ${iconColor}`} strokeWidth={1.25} />
				<div className="flex items-end justify-between gap-3">
					{caption && <span className={`text-xs uppercase tracking-widest font-medium ${textColor}`}>{caption}</span>}
					{index && <span className={`font-display text-3xl ${textColor}`}>{index}</span>}
				</div>
			</div>
		</div>
	);
}
