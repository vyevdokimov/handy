/** Handy's mascot (Quantum Equalizer Neural Wave). */
const HandyMascot = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="handy-mascot-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#140b2e" />
          <stop offset="100%" stopColor="#2e1065" />
        </linearGradient>
        <linearGradient id="handy-mascot-center" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e9d5ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="handy-mascot-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="55%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
        <linearGradient id="handy-mascot-outer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="144"
        height="144"
        rx="34"
        fill="url(#handy-mascot-bg)"
        stroke="#a855f7"
        strokeWidth="3"
        strokeOpacity="0.6"
      />
      {/* 7 Quantum Equalizer Wave Bars */}
      <rect
        x="26"
        y="65"
        width="10"
        height="30"
        rx="5"
        fill="url(#handy-mascot-outer)"
      />
      <rect
        x="42"
        y="51"
        width="11"
        height="58"
        rx="5.5"
        fill="url(#handy-mascot-outer)"
      />
      <rect
        x="59"
        y="36"
        width="12"
        height="88"
        rx="6"
        fill="url(#handy-mascot-mid)"
      />
      <rect
        x="74"
        y="22"
        width="12"
        height="116"
        rx="6"
        fill="url(#handy-mascot-center)"
      />
      <rect
        x="89"
        y="36"
        width="12"
        height="88"
        rx="6"
        fill="url(#handy-mascot-mid)"
      />
      <rect
        x="107"
        y="51"
        width="11"
        height="58"
        rx="5.5"
        fill="url(#handy-mascot-outer)"
      />
      <rect
        x="124"
        y="65"
        width="10"
        height="30"
        rx="5"
        fill="url(#handy-mascot-outer)"
      />
    </svg>
  );
};

export default HandyMascot;
