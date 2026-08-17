type Variant = "light" | "dark";

export default function BlobBackground({ variant = "light" }: { variant?: Variant }) {
	if (variant === "dark") {
		return (
			<div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
				<div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-accent-500/25 blur-[110px] animate-blob" />
				<div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] rounded-full bg-brand-500/30 blur-[110px] animate-blob animate-blob-delay" />
				<div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-violet-500/15 blur-[110px] animate-blob animate-blob-delay-2" />
			</div>
		);
	}

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
			<div className="absolute -top-24 -left-20 w-[360px] h-[360px] rounded-full bg-brand-100 blur-[90px] opacity-70 animate-blob" />
			<div className="absolute top-10 -right-24 w-[420px] h-[420px] rounded-full bg-accent-100 blur-[100px] opacity-80 animate-blob animate-blob-delay" />
			<div className="absolute -bottom-32 left-1/3 w-[380px] h-[380px] rounded-full bg-amber-100 blur-[100px] opacity-70 animate-blob animate-blob-delay-2" />
		</div>
	);
}
