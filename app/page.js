export default function Home() {
  return (
    <div className="wrap">
      <div className="top">
        <span>The econiq method</span>
        <span className="status">
          <span className="dot" />
          Launching soon
        </span>
      </div>

      <main className="hero">
        <p className="eyebrow">Multifamily market-cycle intelligence</p>
        <div className="wordmark">
          econ<span className="iq">iq</span>
        </div>
        <h1 className="headline">Read the cycle before the market does.</h1>
        <p className="sub">
          A training method for multifamily investors and operators — built to
          navigate all four phases of the market cycle by separating leading
          indicators from trailing noise, and correlation from cause.
        </p>

        <div className="cycle" aria-hidden="true">
          <svg viewBox="0 0 760 120" preserveAspectRatio="none" role="presentation">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(224,169,59,0.15)" />
                <stop offset="50%" stopColor="rgba(224,169,59,0.9)" />
                <stop offset="100%" stopColor="rgba(224,169,59,0.15)" />
              </linearGradient>
            </defs>
            <line x1="0" y1="60" x2="760" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <path
              id="curve"
              d="M0,60 C95,60 95,18 190,18 C285,18 285,102 380,102 C475,102 475,18 570,18 C665,18 665,60 760,60"
              fill="none"
              stroke="url(#g)"
              strokeWidth="1.5"
            />
            <circle className="tracer" r="4" fill="var(--accent)">
              <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
                <mpath href="#curve" />
              </animateMotion>
            </circle>
          </svg>
          <div className="phases">
            <span>Recovery</span>
            <span>Expansion</span>
            <span>Hyper-supply</span>
            <span>Recession</span>
          </div>
        </div>
      </main>

      <footer className="foot">
        <span>© 2026 econiq</span>
        <span>
          Notify: <a href="mailto:hello@econiq.com">hello@econiq.com</a>
        </span>
      </footer>
    </div>
  );
}
