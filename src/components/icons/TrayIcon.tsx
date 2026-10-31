/** The tray icon, matching src-tauri/resources/tray_*.png; uses currentColor like a macOS template image. */
type TrayIconState = "idle" | "recording" | "transcribing";

const TrayIcon = ({
  state,
  size,
}: {
  state: TrayIconState;
  size: number | string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className="fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    {state === "idle" && (
      <>
        <rect x="4" y="20" width="8" height="24" rx="4" />
        <rect x="16" y="12" width="8" height="40" rx="4" />
        <rect x="28" y="4" width="8" height="56" rx="4" />
        <rect x="40" y="12" width="8" height="40" rx="4" />
        <rect x="52" y="20" width="8" height="24" rx="4" />
      </>
    )}
    {state === "recording" && (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 2A30 30 0 1 0 32 62A30 30 0 1 0 32 2ZM20 20a4 4 0 0 1 4 4v16a4 4 0 0 1-8 0V24a4 4 0 0 1 4-4Zm12-10a4 4 0 0 1 4 4v36a4 4 0 0 1-8 0V14a4 4 0 0 1 4-4Zm12 10a4 4 0 0 1 4 4v16a4 4 0 0 1-8 0V24a4 4 0 0 1 4-4Z"
      />
    )}
    {state === "transcribing" && (
      <>
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="24 16.84"
          strokeDashoffset="-6"
        />
        <rect x="18" y="24" width="6" height="16" rx="3" />
        <rect x="29" y="16" width="6" height="32" rx="3" />
        <rect x="40" y="24" width="6" height="16" rx="3" />
      </>
    )}
  </svg>
);

export default TrayIcon;
