export default function Logo({ className = "w-10 h-10" }) {
	return (
		<svg
			className={className}
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Logo"
		>
			{/* Soap bar */}
			<rect className="fill-primary" x="10" y="30" width="80" height="40" />

			{/* Bubbles */}
			<circle className="fill-primary-foreground" cx="30" cy="45" r="5" />
			<circle className="fill-primary-foreground" cx="70" cy="55" r="4" />
			<circle className="fill-primary-foreground" cx="50" cy="40" r="3" />
			<circle className="fill-primary-foreground" cx="80" cy="50" r="2" />
		</svg>
	);
}
