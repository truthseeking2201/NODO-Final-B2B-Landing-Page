export default function NodoOnchainAlertFlow() {
  return (
    <div className="nodo-alert-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --bg-primary: #000000;
          --bg-card: #080808;
          --stroke-dark: #1A1A1A;
          --stroke-medium: #404040;
          --stroke-light: #606060;
          --accent-glow: #ffffff;
          --text-primary: #ffffff;
          --text-secondary: #AAAAAA;
          --text-badge: #CCCCCC;
          --font-body: "Inter", sans-serif;
          --font-mono: "DM Mono", monospace;
        }

        .nodo-alert-root {
          width: 100%;
          min-height: auto;
          display: block;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-body);
          padding: 0;
          overflow: visible;
        }

        .diagram-container {
          width: 100%;
          max-width: 1040px;
          aspect-ratio: 1040 / 510;
          position: relative;
        }

        .nodo-svg {
          width: 100%;
          height: 100%;
          display: block;
          overflow: visible;
        }

        .glow-filter {
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
        }

        @keyframes flow-dash {
          to { stroke-dashoffset: -20; }
        }

        @keyframes pulse-node {
          0% { r: 2; opacity: 0.6; }
          50% { r: 3.5; opacity: 1; }
          100% { r: 2; opacity: 0.6; }
        }

        @keyframes ripple-expand {
          0% { transform: scale(0.2); opacity: 0; }
          15% { opacity: 0.8; stroke-width: 1.5; }
          100% { transform: scale(3.5); opacity: 0; stroke-width: 0; }
        }

        .flow-line-base {
          fill: none;
          stroke: var(--stroke-dark);
          stroke-width: 1;
        }

        .flow-line-active {
          fill: none;
          stroke: var(--accent-glow);
          stroke-width: 1.5;
          stroke-dasharray: 6 6;
          animation: flow-dash 0.8s linear infinite;
          opacity: 0.7;
          filter: drop-shadow(0 0 3px rgba(255,255,255,0.5));
        }

        .node-circle {
          fill: var(--bg-primary);
          stroke: var(--stroke-light);
          stroke-width: 1.5;
        }

        .node-pulse {
          fill: var(--accent-glow);
          animation: pulse-node 2s ease-out infinite;
        }

        .bg-ripple {
          fill: none;
          stroke: #FFFFFF;
          stroke-width: 1;
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0;
          animation: ripple-expand 6s linear infinite;
          filter: url(#glowFilter);
        }

        .bg-static-circle {
          fill: none;
          stroke: #444444;
          stroke-width: 0.5;
          stroke-dasharray: 4 4;
          opacity: 0.7;
        }

        .card-rect {
          fill: var(--bg-card);
          stroke: var(--stroke-medium);
          stroke-width: 1;
          transition: all 0.3s ease-out;
          filter: drop-shadow(0px 2px 6px rgba(0,0,0,0.5));
        }

        .card-group:hover .card-rect {
          stroke: var(--accent-glow);
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4)) drop-shadow(0px 4px 10px rgba(0,0,0,0.6));
          transform: translateY(-2px);
        }

        .txt-badge {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          fill: var(--text-badge);
          text-transform: uppercase;
        }

        .txt-title {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          fill: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .txt-desc {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 400;
          fill: var(--text-secondary);
          line-height: 1.4;
        }

        .icon-stroke {
          fill: none;
          stroke: var(--accent-glow);
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
        }

        .icon-fill {
          fill: var(--accent-glow);
          filter: drop-shadow(0 0 2px rgba(255,255,255,0.4));
        }
      `}</style>

      <div className="diagram-container">
        <svg
          className="nodo-svg"
          viewBox="0 0 1040 510"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
            </linearGradient>

            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feFlood floodColor="#FFFFFF" floodOpacity="0.8" result="flood" />
              <feComposite in="flood" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <path id="flowPath1-2" d="M 520 100 L 520 130" />
            <path id="flowPath2-3" d="M 520 210 L 520 240" />
            <path id="flowPath3-4" d="M 520 320 L 520 350" />
            <path id="flowPath4-5" d="M 520 430 L 520 445 C 520 455, 310 455, 310 465 L 310 480" />
            <path id="flowPath4-6" d="M 520 430 L 520 445 C 520 455, 730 455, 730 465 L 730 480" />
          </defs>

          <g transform="translate(520, 250)">
            <circle r="80" className="bg-ripple" style={{ animationDelay: '0s' }} />
            <circle r="80" className="bg-ripple" style={{ animationDelay: '2s' }} />
            <circle r="80" className="bg-ripple" style={{ animationDelay: '4s' }} />
            <circle r="180" className="bg-static-circle" />
            <circle r="350" className="bg-static-circle" opacity="0.4" />
          </g>

          <use href="#flowPath1-2" className="flow-line-active" />
          <circle r="3.5" fill="white">
            <animateMotion dur="1.2s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flowPath1-2" />
            </animateMotion>
          </circle>

          <use href="#flowPath2-3" className="flow-line-active" />
          <circle r="3.5" fill="white" opacity="0.9">
            <animateMotion dur="1.2s" begin="0.3s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flowPath2-3" />
            </animateMotion>
          </circle>

          <use href="#flowPath3-4" className="flow-line-active" />
          <circle r="3.5" fill="white" opacity="0.9">
            <animateMotion dur="1.2s" begin="0.6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flowPath3-4" />
            </animateMotion>
          </circle>

          <use href="#flowPath4-5" className="flow-line-active" style={{ animationDuration: '2s' }} />
          <circle r="3.5" fill="white" opacity="0.9">
            <animateMotion dur="2s" begin="0.9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flowPath4-5" />
            </animateMotion>
          </circle>

          <use href="#flowPath4-6" className="flow-line-active" style={{ animationDuration: '2s' }} />
          <circle r="3.5" fill="white" opacity="0.9">
            <animateMotion dur="2s" begin="1.1s" repeatCount="indefinite" rotate="auto">
              <mpath href="#flowPath4-6" />
            </animateMotion>
          </circle>

          <g className="card-group" transform="translate(310, 20)">
            <rect className="card-rect" x="0" y="0" width="420" height="80" rx="6" />
            <g transform="translate(30, 24)">
              <circle className="icon-stroke" cx="16" cy="16" r="10" />
              <path className="icon-stroke" d="M16 16 L24 10" />
              <circle className="icon-fill" cx="16" cy="16" r="2" />
            </g>
            <text x="80" y="28" className="txt-badge">STAGE 01</text>
            <text x="80" y="48" className="txt-title">Monitoring</text>
            <text x="80" y="65" className="txt-desc">Vault, protocol, and market monitoring.</text>
            <circle cx="210" cy="80" r="1" className="node-circle" />
            <circle cx="210" cy="80" r="2.5" className="node-pulse" />
          </g>

          <g className="card-group" transform="translate(310, 130)">
            <rect className="card-rect" x="0" y="0" width="420" height="80" rx="6" />
            <circle cx="210" cy="0" r="1" className="node-circle" />
            <circle cx="210" cy="0" r="2.5" className="node-pulse" />
            <g transform="translate(30, 24)">
               <path className="icon-stroke" d="M16 4 L29 26 H3 Z" />
               <line className="icon-stroke" x1="16" y1="12" x2="16" y2="18" />
               <circle className="icon-fill" cx="16" cy="23" r="1.5" />
            </g>
            <text x="80" y="28" className="txt-badge">STAGE 02</text>
            <text x="80" y="48" className="txt-title">Immediate Alert & Response</text>
            <text x="80" y="65" className="txt-desc">Critical events are escalated to NODO instantly.</text>
            <circle cx="210" cy="80" r="1" className="node-circle" />
            <circle cx="210" cy="80" r="2.5" className="node-pulse" />
          </g>

          <g className="card-group" transform="translate(310, 240)">
            <rect className="card-rect" x="0" y="0" width="420" height="80" rx="6" />
            <circle cx="210" cy="0" r="1" className="node-circle" />
            <circle cx="210" cy="0" r="2.5" className="node-pulse" />
            <g transform="translate(30, 24)">
               <circle className="icon-stroke" cx="16" cy="16" r="11" />
               <polyline className="icon-stroke" points="16 10 16 16 20 16" />
            </g>
            <text x="80" y="28" className="txt-badge">STAGE 03</text>
            <text x="80" y="48" className="txt-title">Decision Window</text>
            <text x="80" y="65" className="txt-desc">Up to 60 minutes to validate and choose.</text>
            <circle cx="210" cy="80" r="1" className="node-circle" />
            <circle cx="210" cy="80" r="2.5" className="node-pulse" />
          </g>

          <g className="card-group" transform="translate(310, 350)">
            <rect className="card-rect" x="0" y="0" width="420" height="80" rx="6" />
            <circle cx="210" cy="0" r="1" className="node-circle" />
            <circle cx="210" cy="0" r="2.5" className="node-pulse" />
            <g transform="translate(30, 24)">
               <line className="icon-stroke" x1="4" y1="8" x2="28" y2="8" />
               <line className="icon-stroke" x1="4" y1="16" x2="28" y2="16" />
               <line className="icon-stroke" x1="4" y1="24" x2="28" y2="24" />
               <circle className="icon-fill" cx="10" cy="8" r="2" />
               <circle className="icon-fill" cx="22" cy="16" r="2" />
               <circle className="icon-fill" cx="14" cy="24" r="2" />
            </g>
            <text x="80" y="28" className="txt-badge">STAGE 04</text>
            <text x="80" y="48" className="txt-title">Design Implementation</text>
            <text x="80" y="65" className="txt-desc">NODO applies the chosen mitigation to vaults.</text>
            <circle cx="210" cy="80" r="1" className="node-circle" />
            <circle cx="210" cy="80" r="2.5" className="node-pulse" />
          </g>

          <g className="card-group" transform="translate(150, 460)">
            <rect className="card-rect" x="0" y="0" width="320" height="80" rx="6" />
            <g transform="translate(30, 24)">
               <path className="icon-stroke" d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12" />
               <path className="icon-stroke" d="M2 20c0 5.5 4.5 10 10 10s10-4.5 10-10" />
               <polyline className="icon-stroke" points="22 8 22 12 18 12" />
               <polyline className="icon-stroke" points="2 24 2 20 6 20" />
            </g>
            <text x="80" y="28" className="txt-badge">STAGE 05</text>
            <text x="80" y="48" className="txt-title">Monitoring & Recovering</text>
            <text x="80" y="65" className="txt-desc">Track system health until full recovery.</text>
          </g>

          <g className="card-group" transform="translate(570, 460)">
            <rect className="card-rect" x="0" y="0" width="320" height="80" rx="6" />
            <g transform="translate(30, 24)">
               <path className="icon-stroke" d="M24 4H8C5.8 4 4 5.8 4 8v12c0 2.2 1.8 4 4 4h12l6 6V8c0-2.2-1.8-4-4-4z" />
            </g>
            <text x="80" y="28" className="txt-badge">STAGE 06</text>
            <text x="80" y="48" className="txt-title">User Communication</text>
            <text x="80" y="65" className="txt-desc">Structured updates for all stakeholders.</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
