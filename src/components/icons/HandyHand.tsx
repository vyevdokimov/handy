const HandyHand = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
  // The sidebar passes a className for its icons; the icon uses fill-text.
  className?: string;
}) => (
  <svg
    width={width || 126}
    height={height || 135}
    viewBox="0 0 64 64"
    className="fill-text"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="20" width="8" height="24" rx="4" />
    <rect x="16" y="12" width="8" height="40" rx="4" />
    <rect x="28" y="4" width="8" height="56" rx="4" />
    <rect x="40" y="12" width="8" height="40" rx="4" />
    <rect x="52" y="20" width="8" height="24" rx="4" />
  </svg>
);

export default HandyHand;
