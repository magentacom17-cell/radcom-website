import React from 'react';

interface RadcomLogoProps {
  id?: string;
  className?: string;
  variant?: 'full' | 'emblem' | 'horizontal';
  showText?: boolean;
}

export const RadcomLogo: React.FC<RadcomLogoProps> = ({
  id = 'radcom-brand-logo',
  className = 'h-10 w-auto',
  variant = 'full',
  showText = true,
}) => {
  if (variant === 'emblem' || !showText) {
    return (
      <svg
        id={id}
        viewBox="0 0 320 140"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PT RADCOM Solusindo Informatika Emblem"
      >
        <g id="rsi-monogram">
          {/* R Stem */}
          <rect x="15" y="15" width="30" height="95" rx="2" fill="#153285" />
          {/* R Loop */}
          <path d="M 40 15 L 88 15 C 112 15 126 26 126 45 C 126 64 112 75 88 75 L 40 75 Z" fill="#153285" />
          <path d="M 45 35 L 84 35 C 96 35 102 40 102 45 C 102 50 96 55 84 55 L 45 55 Z" fill="#ffffff" />
          {/* R Leg */}
          <path d="M 75 70 L 112 110 L 82 110 L 52 75 Z" fill="#153285" />

          {/* S Geometric Curve */}
          <path d="M 132 36 C 138 22 155 14 176 14 C 200 14 215 25 215 41 C 215 58 199 66 176 71 C 153 76 146 81 146 89 C 146 97 156 103 171 103 C 186 103 197 97 203 89 L 222 101 C 210 115 193 121 169 121 C 140 121 120 108 120 87 C 120 69 136 60 160 54 C 183 48 190 44 190 37 C 190 31 183 27 174 27 C 162 27 153 33 148 40 Z" fill="#153285" />

          {/* I Column */}
          <path d="M 235 110 L 235 15 L 275 15 L 295 35 L 295 110 Z" fill="#153285" />
          {/* Red Accent Triangle */}
          <polygon points="282,15 302,15 302,35" fill="#E01E2B" />
        </g>
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <svg
        id={id}
        viewBox="0 0 380 90"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="PT RADCOM Solusindo Informatika Logo"
      >
        <g transform="translate(10, 5) scale(0.62)">
          <rect x="15" y="15" width="30" height="95" rx="2" fill="#153285" />
          <path d="M 40 15 L 88 15 C 112 15 126 26 126 45 C 126 64 112 75 88 75 L 40 75 Z" fill="#153285" />
          <path d="M 45 35 L 84 35 C 96 35 102 40 102 45 C 102 50 96 55 84 55 L 45 55 Z" fill="#ffffff" />
          <path d="M 75 70 L 112 110 L 82 110 L 52 75 Z" fill="#153285" />

          <path d="M 132 36 C 138 22 155 14 176 14 C 200 14 215 25 215 41 C 215 58 199 66 176 71 C 153 76 146 81 146 89 C 146 97 156 103 171 103 C 186 103 197 97 203 89 L 222 101 C 210 115 193 121 169 121 C 140 121 120 108 120 87 C 120 69 136 60 160 54 C 183 48 190 44 190 37 C 190 31 183 27 174 27 C 162 27 153 33 148 40 Z" fill="#153285" />

          <path d="M 235 110 L 235 15 L 275 15 L 295 35 L 295 110 Z" fill="#153285" />
          <polygon points="282,15 302,15 302,35" fill="#E01E2B" />
        </g>
        <g transform="translate(210, 0)" fill="#E01E2B" fontFamily="'Plus Jakarta Sans', Montserrat, sans-serif" fontWeight="900">
          <text x="0" y="32" textLength="160" lengthAdjust="spacing" fontSize="20">RADCOM</text>
          <text x="0" y="54" textLength="160" lengthAdjust="spacing" fontSize="15">SOLUSINDO</text>
          <text x="0" y="74" textLength="160" lengthAdjust="spacing" fontSize="14">INFORMATIKA</text>
        </g>
      </svg>
    );
  }

  // Default: Exact Full Logo from photo (Monogram on top, 3 lines of bold red text below)
  return (
    <img
      id={id}
      src="/radcom-logo.svg"
      alt="PT RADCOM Solusindo Informatika Logo"
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};
