type ExternalLinkIconProps = {
  className?: string;
};

export default function ExternalLinkIcon({ className }: ExternalLinkIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={['external-link-icon', className].filter(Boolean).join(' ')}
      fill="none"
      focusable="false"
      viewBox="0 0 16 16"
    >
      <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}
