import type { CSSProperties } from 'react';

type AnimatedButtonProps = {
  href: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
  style?: CSSProperties;
};

export default function AnimatedButton({ href, label, className = '', target, rel, style }: AnimatedButtonProps) {
  const letters = label.split('');
  const buttonClassName = ['btn-53', className].filter(Boolean).join(' ');

  return (
    <a href={href} className={buttonClassName} target={target} rel={rel} style={style}>
      <span className="btn-53__spacer" aria-hidden="true">
        {label}
      </span>
      <span className="btn-53__layer btn-53__original">{label}</span>
      <span className="btn-53__layer btn-53__letters" aria-hidden="true">
        {letters.map((char, index) => (
          <span
            key={`${label}-${index}`}
            style={{
              transitionDelay: `${index * 50}ms`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </a>
  );
}
