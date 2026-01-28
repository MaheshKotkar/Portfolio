import React from 'react';
import './Logo.css';

const Logo = ({ className = "" }) => {
    return (
        <div className={`logo-container ${className}`}>
            <svg viewBox="0 0 100 100" className="logo-svg">
                <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--secondary)" />
                    </linearGradient>
                </defs>
                {/* Outer Rotating Ring */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    className="rotating-ring"
                />

                {/* Orbiting Particle Path (Invisible) */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    id="orbitPath"
                />

                {/* Orbiting Particle */}
                <circle r="3" className="orbiting-particle">
                    <animateMotion
                        duration="4s"
                        repeatCount="indefinite"
                        path="M 50,5 A 45,45 0 1,1 50,95 A 45,45 0 1,1 50,5"
                    />
                </circle>

                {/* Initials MK */}
                <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    className="logo-text"
                >
                    MK
                </text>
            </svg>
        </div>
    );
};

export default Logo;
