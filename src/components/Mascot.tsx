import { useState } from 'react';

interface MascotProps {
  variant: 'egg' | 'welcome' | 'career' | 'time' | 'goal' | 'celebration';
  className?: string;
}

const mascotImages: Record<MascotProps['variant'], string> = {
  egg: '/assets/mascot/mascot-egg.png',
  welcome: '/assets/mascot/mascot-welcome.png',
  career: '/assets/mascot/mascot-career.png',
  time: '/assets/mascot/mascot-time.png',
  goal: '/assets/mascot/mascot-goal.png',
  celebration: '/assets/mascot/mascot-celebration.png',
};

const mascotAlt: Record<MascotProps['variant'], string> = {
  egg: 'Saarthi mascot hatching from egg',
  welcome: 'Saarthi mascot welcoming you',
  career: 'Saarthi mascot with wings spread',
  time: 'Saarthi mascot holding a clock',
  goal: 'Saarthi mascot wearing glasses and tie',
  celebration: 'Saarthi mascot celebrating',
};

function MascotFallback({ variant }: { variant: MascotProps['variant'] }) {
  // SVG fallback that resembles a cute teal bird mascot
  const renderVariant = () => {
    switch (variant) {
      case 'egg':
        return (
          <g>
            {/* Egg shell */}
            <ellipse cx="100" cy="130" rx="55" ry="70" fill="#fef3c7" stroke="#d4a574" strokeWidth="3"/>
            <path d="M 55 90 Q 70 60 100 55 Q 130 60 145 90" fill="none" stroke="#d4a574" strokeWidth="3" strokeDasharray="8 4"/>
            {/* Bird peeking out */}
            <circle cx="100" cy="85" r="35" fill="#2dd4bf"/>
            <circle cx="88" cy="78" r="8" fill="white"/>
            <circle cx="112" cy="78" r="8" fill="white"/>
            <circle cx="88" cy="78" r="4" fill="#1f2937"/>
            <circle cx="112" cy="78" r="4" fill="#1f2937"/>
            <path d="M 97 90 L 100 98 L 103 90" fill="#f97316"/>
            {/* Tuft */}
            <path d="M 95 50 Q 100 40 105 50" stroke="#2dd4bf" strokeWidth="4" fill="none"/>
          </g>
        );
      case 'career':
        return (
          <g>
            {/* Body */}
            <ellipse cx="100" cy="130" rx="45" ry="50" fill="#2dd4bf"/>
            {/* Head */}
            <circle cx="100" cy="70" r="40" fill="#2dd4bf"/>
            {/* Eyes */}
            <circle cx="85" cy="65" r="10" fill="white"/>
            <circle cx="115" cy="65" r="10" fill="white"/>
            <circle cx="85" cy="65" r="5" fill="#1f2937"/>
            <circle cx="115" cy="65" r="5" fill="#1f2937"/>
            {/* Beak */}
            <path d="M 95 80 L 100 90 L 105 80" fill="#f97316"/>
            {/* Wings spread */}
            <ellipse cx="40" cy="120" rx="25" ry="40" fill="#2dd4bf" transform="rotate(-20 40 120)"/>
            <ellipse cx="160" cy="120" rx="25" ry="40" fill="#2dd4bf" transform="rotate(20 160 120)"/>
            {/* Peacock feathers */}
            <circle cx="30" cy="150" r="8" fill="#1e40af"/>
            <circle cx="30" cy="150" r="4" fill="#fbbf24"/>
            <circle cx="45" cy="165" r="8" fill="#1e40af"/>
            <circle cx="45" cy="165" r="4" fill="#fbbf24"/>
            {/* Tuft */}
            <path d="M 95 30 Q 100 15 105 30" stroke="#2dd4bf" strokeWidth="5" fill="none"/>
            {/* Feet */}
            <path d="M 85 180 L 85 195 M 80 195 L 90 195" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
            <path d="M 115 180 L 115 195 M 110 195 L 120 195" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
          </g>
        );
      case 'time':
        return (
          <g>
            {/* Body */}
            <ellipse cx="100" cy="130" rx="40" ry="45" fill="#2dd4bf"/>
            {/* Head */}
            <circle cx="100" cy="70" r="38" fill="#2dd4bf"/>
            {/* Eyes */}
            <circle cx="87" cy="65" r="9" fill="white"/>
            <circle cx="113" cy="65" r="9" fill="white"/>
            <circle cx="87" cy="65" r="4" fill="#1f2937"/>
            <circle cx="113" cy="65" r="4" fill="#1f2937"/>
            {/* Beak */}
            <path d="M 95 78 L 100 88 L 105 78" fill="#f97316"/>
            {/* Wing holding clock */}
            <ellipse cx="145" cy="100" rx="20" ry="30" fill="#2dd4bf" transform="rotate(30 145 100)"/>
            {/* Clock */}
            <circle cx="165" cy="85" r="22" fill="#fbbf24" stroke="#f97316" strokeWidth="3"/>
            <circle cx="165" cy="85" r="3" fill="#1f2937"/>
            <line x1="165" y1="85" x2="165" y2="70" stroke="#1f2937" strokeWidth="3" strokeLinecap="round"/>
            <line x1="165" y1="85" x2="175" y2="85" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/>
            {/* Peacock feathers */}
            <circle cx="55" cy="150" r="7" fill="#1e40af"/>
            <circle cx="55" cy="150" r="3" fill="#fbbf24"/>
            {/* Tuft */}
            <path d="M 95 32 Q 100 18 105 32" stroke="#2dd4bf" strokeWidth="5" fill="none"/>
            {/* Feet */}
            <path d="M 85 175 L 85 190 M 80 190 L 90 190" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
            <path d="M 115 175 L 115 190 M 110 190 L 120 190" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
          </g>
        );
      case 'goal':
        return (
          <g>
            {/* Body */}
            <ellipse cx="100" cy="135" rx="38" ry="42" fill="#2dd4bf"/>
            {/* Tie */}
            <path d="M 100 100 L 92 115 L 100 155 L 108 115 Z" fill="#b45309"/>
            <path d="M 90 100 L 110 100 L 108 108 L 92 108 Z" fill="#b45309"/>
            {/* Head */}
            <circle cx="100" cy="60" r="36" fill="#2dd4bf"/>
            {/* Glasses */}
            <circle cx="82" cy="55" r="14" fill="none" stroke="#78350f" strokeWidth="3"/>
            <circle cx="118" cy="55" r="14" fill="none" stroke="#78350f" strokeWidth="3"/>
            <line x1="96" y1="55" x2="104" y2="55" stroke="#78350f" strokeWidth="3"/>
            <line x1="68" y1="52" x2="60" y2="48" stroke="#78350f" strokeWidth="3"/>
            <line x1="132" y1="52" x2="140" y2="48" stroke="#78350f" strokeWidth="3"/>
            {/* Eyes behind glasses */}
            <circle cx="82" cy="55" r="5" fill="white"/>
            <circle cx="118" cy="55" r="5" fill="white"/>
            <circle cx="82" cy="55" r="2.5" fill="#1f2937"/>
            <circle cx="118" cy="55" r="2.5" fill="#1f2937"/>
            {/* Beak */}
            <path d="M 95 72 L 100 82 L 105 72" fill="#f97316"/>
            {/* Wing */}
            <ellipse cx="50" cy="130" rx="18" ry="28" fill="#2dd4bf" transform="rotate(-15 50 130)"/>
            {/* Tuft */}
            <path d="M 95 24 Q 100 10 105 24" stroke="#2dd4bf" strokeWidth="5" fill="none"/>
            {/* Feet */}
            <path d="M 85 177 L 85 192 M 80 192 L 90 192" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
            <path d="M 115 177 L 115 192 M 110 192 L 120 192" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
          </g>
        );
      case 'celebration':
      case 'welcome':
      default:
        return (
          <g>
            {/* Body */}
            <ellipse cx="100" cy="130" rx="42" ry="48" fill="#2dd4bf"/>
            {/* Head */}
            <circle cx="100" cy="68" r="38" fill="#2dd4bf"/>
            {/* Eyes */}
            <circle cx="85" cy="62" r="10" fill="white"/>
            <circle cx="115" cy="62" r="10" fill="white"/>
            <circle cx="85" cy="62" r="5" fill="#1f2937"/>
            <circle cx="115" cy="62" r="5" fill="#1f2937"/>
            {/* Happy beak */}
            <path d="M 95 78 L 100 88 L 105 78" fill="#f97316"/>
            {/* Wings */}
            <ellipse cx="48" cy="125" rx="22" ry="35" fill="#2dd4bf" transform="rotate(-10 48 125)"/>
            {/* Peacock tail feathers */}
            <ellipse cx="55" cy="155" rx="12" ry="20" fill="#2dd4bf"/>
            <circle cx="55" cy="165" r="8" fill="#1e40af"/>
            <circle cx="55" cy="165" r="4" fill="#fbbf24"/>
            <ellipse cx="40" cy="148" rx="10" ry="18" fill="#2dd4bf"/>
            <circle cx="40" cy="158" r="6" fill="#1e40af"/>
            <circle cx="40" cy="158" r="3" fill="#fbbf24"/>
            {/* Tuft */}
            <path d="M 95 30 Q 100 12 105 30" stroke="#2dd4bf" strokeWidth="5" fill="none"/>
            {/* Feet */}
            <path d="M 85 178 L 85 193 M 80 193 L 90 193" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
            <path d="M 115 178 L 115 193 M 110 193 L 120 193" stroke="#f97316" strokeWidth="4" strokeLinecap="round"/>
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {renderVariant()}
    </svg>
  );
}

export function Mascot({ variant, className = '' }: MascotProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`mascot ${className}`}>
      {!imageError ? (
        <img
          src={mascotImages[variant]}
          alt={mascotAlt[variant]}
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <MascotFallback variant={variant} />
      )}
    </div>
  );
}
