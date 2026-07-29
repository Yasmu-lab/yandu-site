export function LogoMark({ className, fill = "#1F3D2B" }: { className?: string; fill?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="78" r="9" fill={fill} />
      <path
        d="M50 70 C 50 50, 38 42, 30 28"
        stroke={fill}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 70 C 50 50, 62 42, 70 28"
        stroke={fill}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="27" cy="22" rx="11" ry="7" fill={fill} transform="rotate(-30 27 22)" />
      <ellipse cx="73" cy="22" rx="11" ry="7" fill={fill} transform="rotate(30 73 22)" />
    </svg>
  );
}
