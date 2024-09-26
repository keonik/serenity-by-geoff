import { cn } from "~/lib/utils";

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg
      className={cn("dark:invert", className)}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo"
    >
      <style>
        {`
          .flame { fill: #FFA500; }
          .wax { fill: #F0F0F0; }
        `}
      </style>
      <rect
        className="wax"
        x="35"
        y="40"
        width="30"
        height="55"
        rx="2"
        ry="2"
      />
      <path className="flame" d="M50 5 Q60 20 55 30 Q45 40 50 5 Z" />
    </svg>
  );
}
