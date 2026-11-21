import type { CSSProperties } from 'react';

/**
 * Geometric brand motifs used across the site — bold, flat shapes in the
 * school palette. All shapes draw on a 100×100 grid and fill with currentColor.
 */
export type ShapeName =
  | 'chevrons'
  | 'quarters'
  | 'leaf'
  | 'chevronUp'
  | 'ring'
  | 'bowtie'
  | 'steps'
  | 'pyramid'
  | 'bars'
  | 'clover'
  | 'triangle'
  | 'circle'
  | 'arch'
  | 'checker'
  | 'drop'
  | 'book'
  | 'wedge'
  | 'flower';

const paths: Record<ShapeName, React.ReactNode> = {
  chevrons: (
    <>
      <path d="M8 0 L50 50 L8 100 Z" />
      <path d="M50 0 L92 50 L50 100 Z" />
    </>
  ),
  quarters: (
    <>
      <path d="M48 0 V48 H0 A48 48 0 0 1 48 0 Z" />
      <path d="M52 0 A48 48 0 0 1 100 48 H52 Z" />
      <path d="M0 52 H48 V100 A48 48 0 0 1 0 52 Z" />
      <path d="M52 52 H100 A48 48 0 0 1 52 100 Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M100 0 L100 48 L0 48 C0 20 22 0 50 0 Z" />
      <path d="M100 52 C100 80 78 100 50 100 L0 100 L0 52 Z" />
    </>
  ),
  chevronUp: <path d="M0 40 L50 0 L100 40 L100 100 L50 60 L0 100 Z" />,
  ring: <path fillRule="evenodd" d="M50 0 A50 50 0 1 1 49.99 0 Z M50 22 A28 28 0 1 0 50.01 22 Z" />,
  bowtie: <path d="M0 0 H100 L72 50 L100 100 H0 L28 50 Z" />,
  steps: <path d="M0 0 H36 V64 H100 V100 H0 Z" />,
  pyramid: <path d="M36 0 H64 V30 H78 V62 H100 V100 H0 V62 H22 V30 H36 Z" />,
  bars: (
    <>
      <rect x="0" y="0" width="100" height="26" />
      <rect x="0" y="37" width="100" height="26" />
      <rect x="0" y="74" width="100" height="26" />
    </>
  ),
  clover: (
    <>
      <circle cx="26" cy="26" r="24" />
      <circle cx="74" cy="26" r="24" />
      <circle cx="26" cy="74" r="24" />
      <circle cx="74" cy="74" r="24" />
    </>
  ),
  triangle: <path d="M50 4 L100 96 H0 Z" />,
  circle: <circle cx="50" cy="50" r="50" />,
  arch: <path d="M0 100 V50 A50 50 0 0 1 100 50 V100 Z" />,
  checker: (
    <>
      <path d="M0 25 L25 0 H50 V25 L25 50 H0 Z" />
      <path d="M50 25 L75 0 H100 V25 L75 50 H50 Z" />
      <path d="M0 75 L25 50 H50 V75 L25 100 H0 Z" />
      <path d="M50 75 L75 50 H100 V75 L75 100 H50 Z" />
    </>
  ),
  drop: <path d="M100 0 V40 C100 75 72 100 38 100 C17 100 0 83 0 62 C0 28 28 0 62 0 Z" />,
  book: <path d="M0 0 Q25 14 50 6 Q75 14 100 0 V86 Q75 100 50 92 Q25 100 0 86 Z" />,
  wedge: <path d="M0 0 L100 100 H0 Z" />,
  flower: <path d="M30 0 H70 A30 30 0 0 1 100 30 V70 A30 30 0 0 1 70 100 H30 A30 30 0 0 1 0 70 V30 A30 30 0 0 1 30 0 Z" />,
};

type Props = {
  name: ShapeName;
  className?: string;
  style?: CSSProperties;
  title?: string;
};

export default function Shape({ name, className, style, title }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      style={style}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      {paths[name]}
    </svg>
  );
}
