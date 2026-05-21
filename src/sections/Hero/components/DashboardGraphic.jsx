import React from 'react';

const DashboardGraphic = () => {
    return (
        <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
            <defs>
                <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: 'rgba(43,128,237,.06)' }}></stop><stop offset="100%" style={{ stopColor: 'rgba(43,128,237,.02)' }}></stop></linearGradient>
                <linearGradient id="blue1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#2B80ED' }}></stop><stop offset="100%" style={{ stopColor: '#1e65c4' }}></stop></linearGradient>
                <linearGradient id="green1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#10B981' }}></stop><stop offset="100%" style={{ stopColor: '#059669' }}></stop></linearGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur><feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite></filter>
            </defs>
            <rect width="480" height="320" fill="url(#bg1)" rx="12"></rect>
            <line x1="0" y1="80" x2="480" y2="80" stroke="rgba(43,128,237,.06)" strokeWidth="1"></line>
            <line x1="0" y1="160" x2="480" y2="160" stroke="rgba(43,128,237,.06)" strokeWidth="1"></line>
            <line x1="0" y1="240" x2="480" y2="240" stroke="rgba(43,128,237,.06)" strokeWidth="1"></line>
            <line x1="120" y1="0" x2="120" y2="320" stroke="rgba(43,128,237,.06)" strokeWidth="1"></line>
            <line x1="240" y1="0" x2="240" y2="320" stroke="rgba(43,128,237,.06)" strokeWidth="1"></line>
            <line x1="360" y1="0" x2="360" y2="320" stroke="rgba(43,128,237,.06)" strokeWidth="1"></line>
            <g transform="translate(30,60)">
                <rect x="0" y="40" width="110" height="160" rx="8" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)" strokeWidth="1"></rect>
                <rect x="0" y="20" width="110" height="24" rx="6" fill="rgba(43,128,237,.2)" stroke="rgba(43,128,237,.35)" strokeWidth="1"></rect>
                <circle cx="18" cy="32" r="5" fill="#10B981" opacity=".9"></circle>
                <circle cx="34" cy="32" r="5" fill="#F59E0B" opacity=".9"></circle>
                <circle cx="50" cy="32" r="5" fill="#EF4444" opacity=".9"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.5s" repeatCount="indefinite"></animate></circle>
                <circle cx="66" cy="32" r="5" fill="rgba(255,255,255,.3)" opacity=".7"></circle>
                <text x="55" y="90" fontFamily="Sora,sans-serif" fontSize="8" fill="rgba(255,255,255,.35)" textAnchor="middle">MACHINE A</text>
                <circle cx="55" cy="130" r="28" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="2"></circle>
                <circle cx="55" cy="130" r="20" fill="rgba(43,128,237,.12)" stroke="rgba(43,128,237,.25)" strokeWidth="1.5"></circle>
                <circle cx="55" cy="130" r="6" fill="rgba(43,128,237,.4)"></circle>
                <g fill="rgba(43,128,237,.3)" transform="rotate(0,55,130)">
                    <rect x="52" y="104" width="6" height="8" rx="2"></rect>
                    <rect x="52" y="148" width="6" height="8" rx="2"></rect>
                    <rect x="29" y="127" width="8" height="6" rx="2"></rect>
                    <rect x="73" y="127" width="8" height="6" rx="2"></rect>
                </g>
                <g transform="translate(38,165)">
                    <rect width="34" height="22" rx="4" fill="rgba(239,68,68,.15)" stroke="rgba(239,68,68,.3)" strokeWidth="1"></rect>
                    <text x="17" y="15" fontFamily="sans-serif" fontSize="11" fill="#f87171" textAnchor="middle">⚠</text>
                </g>
            </g>
            <g transform="translate(160,180)">
                <rect x="0" y="20" width="180" height="22" rx="5" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" strokeWidth="1"></rect>
                <line x1="20" y1="20" x2="20" y2="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"></line>
                <line x1="50" y1="20" x2="50" y2="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"></line>
                <line x1="80" y1="20" x2="80" y2="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"></line>
                <line x1="110" y1="20" x2="110" y2="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"></line>
                <line x1="140" y1="20" x2="140" y2="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"></line>
                <line x1="165" y1="20" x2="165" y2="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"></line>
                <circle cx="10" cy="31" r="9" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)" strokeWidth="1"></circle>
                <circle cx="170" cy="31" r="9" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.12)" strokeWidth="1"></circle>
                <rect x="30" y="10" width="24" height="14" rx="3" fill="rgba(43,128,237,.2)" stroke="rgba(43,128,237,.3)" strokeWidth="1"></rect>
                <rect x="70" y="10" width="24" height="14" rx="3" fill="rgba(43,128,237,.2)" stroke="rgba(43,128,237,.3)" strokeWidth="1"></rect>
                <rect x="115" y="10" width="24" height="14" rx="3" fill="rgba(43,128,237,.15)" stroke="rgba(43,128,237,.25)" strokeWidth="1"></rect>
                <text x="90" y="58" fontFamily="Sora,sans-serif" fontSize="7" fill="rgba(255,255,255,.28)" textAnchor="middle">CONVEYOR LINE</text>
            </g>
            <g transform="translate(310,60)">
                <circle cx="40" cy="22" r="12" fill="rgba(43,128,237,.2)" stroke="rgba(43,128,237,.4)" strokeWidth="1.5"></circle>
                <text x="40" y="27" fontFamily="sans-serif" fontSize="13" textAnchor="middle" fill="#7cb8f8">👷</text>
                <rect x="32" y="36" width="16" height="30" rx="4" fill="rgba(43,128,237,.18)" stroke="rgba(43,128,237,.3)" strokeWidth="1"></rect>
                <line x1="32" y1="44" x2="18" y2="60" stroke="rgba(43,128,237,.35)" strokeWidth="3" strokeLinecap="round"></line>
                <line x1="48" y1="44" x2="62" y2="56" stroke="rgba(43,128,237,.35)" strokeWidth="3" strokeLinecap="round"></line>
                <line x1="36" y1="66" x2="32" y2="88" stroke="rgba(43,128,237,.35)" strokeWidth="3" strokeLinecap="round"></line>
                <line x1="44" y1="66" x2="48" y2="88" stroke="rgba(43,128,237,.35)" strokeWidth="3" strokeLinecap="round"></line>
                <g transform="translate(10,58)">
                    <rect x="0" y="0" width="16" height="5" rx="2" fill="rgba(245,158,11,.6)"></rect>
                    <rect x="14" y="-2" width="6" height="9" rx="1.5" fill="rgba(245,158,11,.8)"></rect>
                </g>
                <rect x="4" y="96" width="72" height="18" rx="5" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.3)" strokeWidth="1"></rect>
                <text x="40" y="109" fontFamily="Sora,sans-serif" fontSize="7" fill="#34d399" textAnchor="middle" fontWeight="700">ON THE WAY</text>
            </g>
            <g transform="translate(380,60)">
                <rect x="0" y="0" width="80" height="100" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1"></rect>
                <text x="40" y="16" fontFamily="Sora,sans-serif" fontSize="7" fill="rgba(255,255,255,.35)" textAnchor="middle">SPARES</text>
                <line x1="6" y1="28" x2="74" y2="28" stroke="rgba(255,255,255,.07)" strokeWidth="1"></line>
                <line x1="6" y1="56" x2="74" y2="56" stroke="rgba(255,255,255,.07)" strokeWidth="1"></line>
                <line x1="6" y1="80" x2="74" y2="80" stroke="rgba(255,255,255,.07)" strokeWidth="1"></line>
                <circle cx="20" cy="42" r="8" fill="rgba(43,128,237,.2)" stroke="rgba(43,128,237,.3)" strokeWidth="1"></circle><circle cx="20" cy="42" r="3" fill="rgba(43,128,237,.4)"></circle>
                <rect x="34" y="34" width="14" height="14" rx="2" fill="rgba(245,158,11,.15)" stroke="rgba(245,158,11,.25)" strokeWidth="1"></rect>
                <circle cx="58" cy="42" r="7" fill="rgba(16,185,129,.15)" stroke="rgba(16,185,129,.25)" strokeWidth="1"></circle>
                <rect x="10" y="62" width="18" height="10" rx="2" fill="rgba(43,128,237,.15)" stroke="rgba(43,128,237,.2)" strokeWidth="1"></rect>
                <circle cx="44" cy="68" r="6" fill="rgba(139,92,246,.15)" stroke="rgba(139,92,246,.25)" strokeWidth="1"></circle>
                <rect x="56" y="62" width="14" height="10" rx="2" fill="rgba(245,158,11,.12)" stroke="rgba(245,158,11,.2)" strokeWidth="1"></rect>
                <rect x="6" y="86" width="68" height="10" rx="3" fill="rgba(16,185,129,.1)"></rect>
                <text x="40" y="94" fontFamily="Sora,sans-serif" fontSize="6" fill="#34d399" textAnchor="middle" fontWeight="700">120 PARTS IN STOCK</text>
            </g>
            <g transform="translate(155,50)">
                <rect x="0" y="0" width="145" height="95" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(43,128,237,.2)" strokeWidth="1.5"></rect>
                <rect x="0" y="0" width="145" height="22" rx="8" fill="rgba(43,128,237,.18)"></rect>
                <rect x="0" y="12" width="145" height="10" rx="0" fill="rgba(43,128,237,.18)"></rect>
                <text x="72" y="15" fontFamily="Sora,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.8)" textAnchor="middle" fontWeight="700">LIVE RFQ DASHBOARD</text>
                <g transform="translate(8,30)">
                    <rect x="0" y="0" width="129" height="14" rx="3" fill="rgba(255,255,255,.04)"></rect>
                    <circle cx="6" cy="7" r="3" fill="#EF4444"></circle>
                    <text x="16" y="10" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.7)">Gearbox Repair · Line 3 · Urgent</text>
                    <rect x="102" y="2" width="27" height="10" rx="3" fill="rgba(239,68,68,.15)"></rect>
                    <text x="115" y="9" fontFamily="Sora,sans-serif" fontSize="6" fill="#f87171" textAnchor="middle" fontWeight="700">URGENT</text>
                </g>
                <g transform="translate(8,48)">
                    <rect x="0" y="0" width="129" height="14" rx="3" fill="rgba(255,255,255,.04)"></rect>
                    <circle cx="6" cy="7" r="3" fill="#2B80ED"></circle>
                    <text x="16" y="10" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.7)">PLC Troubleshooting · Mumbai</text>
                    <rect x="102" y="2" width="27" height="10" rx="3" fill="rgba(43,128,237,.18)"></rect>
                    <text x="115" y="9" fontFamily="Sora,sans-serif" fontSize="6" fill="#7cb8f8" textAnchor="middle" fontWeight="700">3 QUOTES</text>
                </g>
                <g transform="translate(8,66)">
                    <rect x="0" y="0" width="129" height="14" rx="3" fill="rgba(255,255,255,.04)"></rect>
                    <circle cx="6" cy="7" r="3" fill="#10B981"></circle>
                    <text x="16" y="10" fontFamily="DM Sans,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.7)">Custom Shaft · CNC · Ahmedabad</text>
                    <rect x="102" y="2" width="27" height="10" rx="3" fill="rgba(16,185,129,.13)"></rect>
                    <text x="115" y="9" fontFamily="Sora,sans-serif" fontSize="6" fill="#34d399" textAnchor="middle" fontWeight="700">SOURCED</text>
                </g>
            </g>
            <line x1="140" y1="155" x2="155" y2="120" stroke="rgba(43,128,237,.25)" strokeWidth="1" strokeDasharray="4,3"></line>
            <line x1="300" y1="100" x2="310" y2="100" stroke="rgba(43,128,237,.25)" strokeWidth="1" strokeDasharray="4,3"></line>
        </svg>
    );
};

export default DashboardGraphic;