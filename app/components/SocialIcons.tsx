// lucide-react no longer ships brand/social marks, so these are small inline SVGs
// sized to match lucide icons (24x24 viewBox, sit on `currentColor`).
type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
		</svg>
	);
}

export function InstagramIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
			<rect x="3" y="3" width="18" height="18" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
		</svg>
	);
}

export function LinkedinIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.5 8.75h6.9V21h-6.9V8.75Zm10.6 0H21v2.02h.06c.46-.87 1.6-1.79 3.28-1.79 3.5 0 4.16 2.3 4.16 5.3V21h-6.9v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-6.9V8.75h.71Z" />
		</svg>
	);
}

export function XIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
			<path d="M18.244 2H21.5l-7.39 8.44L22.8 22h-6.78l-5.31-6.95L4.6 22H1.34l7.9-9.03L1 2h6.95l4.8 6.35L18.24 2Zm-1.19 18h1.8L7.03 3.94H5.1L17.05 20Z" />
		</svg>
	);
}
