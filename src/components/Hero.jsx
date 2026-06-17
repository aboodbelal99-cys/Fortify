import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#031e2a]">
      
      {/* ===== Background Radial Ambient Glow ===== */}
      <div className="absolute inset-0 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#031e2a] via-[#031e2a] to-[#021520]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[650px] h-[70vw] max-h-[650px] bg-gradient-radial from-[#E8B95E]/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#031e2a] to-transparent" />
      </div>

      {/* ===== LEFT CIRCUIT BOARD ===== */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[420px] pointer-events-none z-10 select-none">
        <svg viewBox="0 0 420 900" className="w-full h-full" fill="none" preserveAspectRatio="xMinYMid slice">
          <defs>
            <filter id="glow-l" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-sm-l" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ─── Line 1: top short ─── */}
          <path d="M 0 75 L 100 75 L 100 55 L 155 55" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.35" />
          <path d="M 100 75 L 100 95 L 140 95" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.18" />
          <circle cx="155" cy="55" r="3" fill="#E8B95E" opacity="0.8" />
          <circle cx="155" cy="55" r="7" fill="#E8B95E" opacity="0.15" filter="url(#glow-l)" />
          <circle cx="140" cy="95" r="2" fill="#E8B95E" opacity="0.5" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 0 75 L 100 75 L 100 55 L 155 55" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 2 ─── */}
          <path d="M 0 140 L 70 140 L 70 170 L 180 170" stroke="#E8B95E" strokeWidth="1.3" strokeOpacity="0.30" />
          <path d="M 180 170 L 180 145 L 220 145" stroke="#E8B95E" strokeWidth="0.9" strokeOpacity="0.20" />
          <path d="M 180 170 L 180 195 L 210 195" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="220" cy="145" r="2.5" fill="#E8B95E" opacity="0.6" />
          <circle cx="210" cy="195" r="2" fill="#E8B95E" opacity="0.45" />
          {/* Large glow orb */}
          <circle cx="70" cy="140" r="5" fill="#E8B95E" opacity="0.7" filter="url(#glow-l)">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="5.5s" repeatCount="indefinite" path="M 0 140 L 70 140 L 70 170 L 180 170" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="5.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 3: long with branch ─── */}
          <path d="M 0 225 L 140 225 L 140 255 L 260 255" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.30" />
          <path d="M 140 255 L 140 280 L 195 280" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.18" />
          <path d="M 260 255 L 260 230 L 300 230" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="260" cy="255" r="3" fill="#E8B95E" opacity="0.75" />
          <circle cx="260" cy="255" r="8" fill="#E8B95E" opacity="0.12" filter="url(#glow-l)" />
          <circle cx="300" cy="230" r="2" fill="#E8B95E" opacity="0.5" />
          <circle cx="195" cy="280" r="2" fill="#E8B95E" opacity="0.4" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="7s" repeatCount="indefinite" path="M 0 225 L 140 225 L 140 255 L 260 255" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="7s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 4 ─── */}
          <path d="M 0 310 L 55 310 L 55 340 L 170 340" stroke="#E8B95E" strokeWidth="1.1" strokeOpacity="0.28" />
          <path d="M 170 340 L 170 315 L 210 315" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="170" cy="340" r="2.5" fill="#E8B95E" opacity="0.6" />
          <circle cx="210" cy="315" r="2" fill="#E8B95E" opacity="0.45" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="5s" repeatCount="indefinite" path="M 0 310 L 55 310 L 55 340 L 170 340" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 5: long with glow orb ─── */}
          <path d="M 0 390 L 120 390 L 120 420 L 230 420 L 230 395 L 290 395" stroke="#E8B95E" strokeWidth="1.3" strokeOpacity="0.32" />
          <path d="M 230 420 L 230 445 L 270 445" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="290" cy="395" r="3" fill="#E8B95E" opacity="0.8" />
          <circle cx="290" cy="395" r="8" fill="#E8B95E" opacity="0.15" filter="url(#glow-l)" />
          <circle cx="270" cy="445" r="2" fill="#E8B95E" opacity="0.4" />
          {/* Big glow orb at bend */}
          <circle cx="120" cy="390" r="6" fill="#E8B95E" opacity="0.6" filter="url(#glow-l)">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="8s" repeatCount="indefinite" path="M 0 390 L 120 390 L 120 420 L 230 420 L 230 395 L 290 395" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 6 ─── */}
          <path d="M 0 490 L 80 490 L 80 515 L 200 515" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.28" />
          <path d="M 200 515 L 200 490 L 245 490" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.18" />
          <circle cx="200" cy="515" r="2.5" fill="#E8B95E" opacity="0.65" />
          <circle cx="245" cy="490" r="2" fill="#E8B95E" opacity="0.45" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 0 490 L 80 490 L 80 515 L 200 515" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 7: with branching ─── */}
          <path d="M 0 575 L 150 575 L 150 600 L 280 600" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.30" />
          <path d="M 150 600 L 150 625 L 200 625" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <path d="M 280 600 L 280 575 L 320 575" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.14" />
          <circle cx="280" cy="600" r="3" fill="#E8B95E" opacity="0.7" />
          <circle cx="280" cy="600" r="7" fill="#E8B95E" opacity="0.12" filter="url(#glow-l)" />
          <circle cx="200" cy="625" r="2" fill="#E8B95E" opacity="0.4" />
          <circle cx="320" cy="575" r="2" fill="#E8B95E" opacity="0.5" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="7.5s" repeatCount="indefinite" path="M 0 575 L 150 575 L 150 600 L 280 600" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="7.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 8 ─── */}
          <path d="M 0 665 L 90 665 L 90 690 L 190 690" stroke="#E8B95E" strokeWidth="1.1" strokeOpacity="0.25" />
          <path d="M 190 690 L 190 665 L 230 665" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="190" cy="690" r="2.5" fill="#E8B95E" opacity="0.6" />
          <circle cx="230" cy="665" r="2" fill="#E8B95E" opacity="0.4" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="5.5s" repeatCount="indefinite" path="M 0 665 L 90 665 L 90 690 L 190 690" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="5.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 9: bottom with big glow ─── */}
          <path d="M 0 745 L 110 745 L 110 770 L 250 770" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.28" />
          <path d="M 250 770 L 250 745 L 300 745" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="250" cy="770" r="3" fill="#E8B95E" opacity="0.75" />
          <circle cx="250" cy="770" r="8" fill="#E8B95E" opacity="0.12" filter="url(#glow-l)" />
          <circle cx="300" cy="745" r="2" fill="#E8B95E" opacity="0.5" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="6.5s" repeatCount="indefinite" path="M 0 745 L 110 745 L 110 770 L 250 770" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="6.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 10: very bottom ─── */}
          <path d="M 0 830 L 65 830 L 65 855 L 175 855" stroke="#E8B95E" strokeWidth="1.0" strokeOpacity="0.22" />
          <circle cx="175" cy="855" r="2.5" fill="#E8B95E" opacity="0.55" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M 0 830 L 65 830 L 65 855 L 175 855" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="4.5s" repeatCount="indefinite" />
          </circle>

          {/* Faint fill lines */}
          <path d="M 0 110 L 45 110" stroke="#E8B95E" strokeWidth="0.6" strokeOpacity="0.08" />
          <path d="M 0 195 L 30 195 L 30 210" stroke="#E8B95E" strokeWidth="0.6" strokeOpacity="0.07" />
          <path d="M 0 355 L 40 355" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
          <path d="M 0 450 L 50 450 L 50 465" stroke="#E8B95E" strokeWidth="0.6" strokeOpacity="0.07" />
          <path d="M 0 540 L 35 540" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
          <path d="M 0 710 L 45 710" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
          <path d="M 0 800 L 55 800 L 55 815" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
        </svg>
      </div>

      {/* ===== RIGHT CIRCUIT BOARD ===== */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[420px] pointer-events-none z-10 select-none">
        <svg viewBox="0 0 420 900" className="w-full h-full" fill="none" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <filter id="glow-r" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-sm-r" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ─── Line 1 ─── */}
          <path d="M 420 90 L 310 90 L 310 115 L 200 115" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.30" />
          <path d="M 310 115 L 310 140 L 265 140" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="200" cy="115" r="2.5" fill="#E8B95E" opacity="0.65" />
          <circle cx="265" cy="140" r="2" fill="#E8B95E" opacity="0.45" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="5s" repeatCount="indefinite" path="M 420 90 L 310 90 L 310 115 L 200 115" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 2 ─── */}
          <path d="M 420 170 L 340 170 L 340 200 L 220 200" stroke="#E8B95E" strokeWidth="1.3" strokeOpacity="0.32" />
          <path d="M 220 200 L 220 175 L 175 175" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.18" />
          <path d="M 220 200 L 220 225 L 180 225" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="175" cy="175" r="2" fill="#E8B95E" opacity="0.5" />
          <circle cx="180" cy="225" r="2" fill="#E8B95E" opacity="0.4" />
          {/* Big glow */}
          <circle cx="340" cy="170" r="5" fill="#E8B95E" opacity="0.7" filter="url(#glow-r)">
            <animate attributeName="opacity" values="0.4;0.85;0.4" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 420 170 L 340 170 L 340 200 L 220 200" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 3 ─── */}
          <path d="M 420 260 L 290 260 L 290 285 L 160 285" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.28" />
          <path d="M 160 285 L 160 260 L 120 260" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="160" cy="285" r="3" fill="#E8B95E" opacity="0.75" />
          <circle cx="160" cy="285" r="7" fill="#E8B95E" opacity="0.12" filter="url(#glow-r)" />
          <circle cx="120" cy="260" r="2" fill="#E8B95E" opacity="0.5" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="7s" repeatCount="indefinite" path="M 420 260 L 290 260 L 290 285 L 160 285" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="7s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 4 ─── */}
          <path d="M 420 340 L 355 340 L 355 365 L 240 365" stroke="#E8B95E" strokeWidth="1.1" strokeOpacity="0.26" />
          <path d="M 240 365 L 240 340 L 195 340" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="240" cy="365" r="2.5" fill="#E8B95E" opacity="0.6" />
          <circle cx="195" cy="340" r="2" fill="#E8B95E" opacity="0.45" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="5.5s" repeatCount="indefinite" path="M 420 340 L 355 340 L 355 365 L 240 365" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="5.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 5: long with glow ─── */}
          <path d="M 420 420 L 280 420 L 280 450 L 150 450 L 150 425 L 105 425" stroke="#E8B95E" strokeWidth="1.3" strokeOpacity="0.32" />
          <path d="M 150 450 L 150 475 L 110 475" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="105" cy="425" r="3" fill="#E8B95E" opacity="0.8" />
          <circle cx="105" cy="425" r="8" fill="#E8B95E" opacity="0.15" filter="url(#glow-r)" />
          <circle cx="110" cy="475" r="2" fill="#E8B95E" opacity="0.4" />
          {/* Big glow */}
          <circle cx="280" cy="420" r="6" fill="#E8B95E" opacity="0.6" filter="url(#glow-r)">
            <animate attributeName="opacity" values="0.3;0.75;0.3" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="8.5s" repeatCount="indefinite" path="M 420 420 L 280 420 L 280 450 L 150 450 L 150 425 L 105 425" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="8.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 6 ─── */}
          <path d="M 420 510 L 330 510 L 330 535 L 210 535" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.28" />
          <path d="M 210 535 L 210 510 L 165 510" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="210" cy="535" r="2.5" fill="#E8B95E" opacity="0.65" />
          <circle cx="165" cy="510" r="2" fill="#E8B95E" opacity="0.45" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="6s" repeatCount="indefinite" path="M 420 510 L 330 510 L 330 535 L 210 535" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="6s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 7: with branching ─── */}
          <path d="M 420 600 L 260 600 L 260 625 L 140 625" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.30" />
          <path d="M 260 625 L 260 650 L 210 650" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.14" />
          <path d="M 140 625 L 140 600 L 95 600" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="140" cy="625" r="3" fill="#E8B95E" opacity="0.7" />
          <circle cx="140" cy="625" r="7" fill="#E8B95E" opacity="0.12" filter="url(#glow-r)" />
          <circle cx="210" cy="650" r="2" fill="#E8B95E" opacity="0.4" />
          <circle cx="95" cy="600" r="2" fill="#E8B95E" opacity="0.5" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="7.5s" repeatCount="indefinite" path="M 420 600 L 260 600 L 260 625 L 140 625" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="7.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 8 ─── */}
          <path d="M 420 690 L 320 690 L 320 715 L 210 715" stroke="#E8B95E" strokeWidth="1.1" strokeOpacity="0.25" />
          <path d="M 210 715 L 210 690 L 170 690" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx="210" cy="715" r="2.5" fill="#E8B95E" opacity="0.6" />
          <circle cx="170" cy="690" r="2" fill="#E8B95E" opacity="0.4" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="5.5s" repeatCount="indefinite" path="M 420 690 L 320 690 L 320 715 L 210 715" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="5.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 9 ─── */}
          <path d="M 420 770 L 300 770 L 300 795 L 170 795" stroke="#E8B95E" strokeWidth="1.2" strokeOpacity="0.28" />
          <path d="M 170 795 L 170 770 L 125 770" stroke="#E8B95E" strokeWidth="0.8" strokeOpacity="0.16" />
          <circle cx="170" cy="795" r="3" fill="#E8B95E" opacity="0.75" />
          <circle cx="170" cy="795" r="8" fill="#E8B95E" opacity="0.12" filter="url(#glow-r)" />
          <circle cx="125" cy="770" r="2" fill="#E8B95E" opacity="0.5" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="6.5s" repeatCount="indefinite" path="M 420 770 L 300 770 L 300 795 L 170 795" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="6.5s" repeatCount="indefinite" />
          </circle>

          {/* ─── Line 10 ─── */}
          <path d="M 420 850 L 350 850 L 350 870 L 240 870" stroke="#E8B95E" strokeWidth="1.0" strokeOpacity="0.22" />
          <circle cx="240" cy="870" r="2.5" fill="#E8B95E" opacity="0.55" />
          <circle r="1.5" fill="#FFF" opacity="0.9">
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M 420 850 L 350 850 L 350 870 L 240 870" />
            <animate attributeName="opacity" values="0;1;0.8;0" dur="4.5s" repeatCount="indefinite" />
          </circle>

          {/* Faint fill lines */}
          <path d="M 420 130 L 375 130" stroke="#E8B95E" strokeWidth="0.6" strokeOpacity="0.08" />
          <path d="M 420 220 L 385 220 L 385 235" stroke="#E8B95E" strokeWidth="0.6" strokeOpacity="0.07" />
          <path d="M 420 385 L 370 385" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
          <path d="M 420 470 L 375 470 L 375 485" stroke="#E8B95E" strokeWidth="0.6" strokeOpacity="0.07" />
          <path d="M 420 560 L 385 560" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
          <path d="M 420 735 L 375 735" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
          <path d="M 420 820 L 365 820 L 365 835" stroke="#E8B95E" strokeWidth="0.5" strokeOpacity="0.06" />
        </svg>
      </div>

      {/* ===== Content Overlay ===== */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12 flex flex-col items-center justify-center min-h-[90vh]">
        
        {/* Logo at the Top Center */}
        <div className="animate-fade-in-up mb-1 flex flex-col items-center justify-center">
          <div className="relative w-[260px] aspect-[1024/696] logo-shine-wrapper">
            <img
              src="/images/logo-transparent-cropped.png"
              alt="Fortify Logo"
              className="w-full h-full object-contain logo-glow"
            />
            {/* Inline SVG overlay for golden circuit particles */}
            <svg
              viewBox="0 0 1024 696"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              fill="none"
            >
              <defs>
                <filter id="particle-glow" x="-150%" y="-150%" width="400%" height="400%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Trace Lines that Pulse (using CSS flow stroke animation) */}
              <path
                d="M 498 232 L 503 230 L 524 218 L 541 201 L 549 201 L 558 208"
                stroke="#E8B95E"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.75"
                className="pulse-line-1"
              />
              <path
                d="M 522 274 L 531 272 L 550 253 L 575 249 L 580 244 L 600 244 L 609 251"
                stroke="#E8B95E"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.75"
                className="pulse-line-2"
              />
              <path
                d="M 520 327 L 547 327 L 561 313 L 634 313 L 662 341 L 681 341 L 689 347"
                stroke="#E8B95E"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.75"
                className="pulse-line-3"
              />
              <path
                d="M 521 386 L 525 382 L 595 382 L 600 377 L 620 377 L 628 385"
                stroke="#E8B95E"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.75"
                className="pulse-line-4"
              />
              <path
                d="M 520 445 L 547 446 L 560 459 L 635 459 L 662 432 L 681 432 L 690 421"
                stroke="#E8B95E"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.75"
                className="pulse-line-5"
              />
              <path
                d="M 521 499 L 531 501 L 546 515 L 575 515 L 580 510 L 601 510 L 609 517"
                stroke="#E8B95E"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.75"
                className="pulse-line-6"
              />
              <path
                d="M 498 540 L 512 548 L 516 551 L 557 551"
                stroke="#E8B95E"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.75"
                className="pulse-line-7"
              />

              {/* Traveling energy particles */}
              <circle r="4" fill="#FFF" filter="url(#particle-glow)">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  path="M 498 232 L 503 230 L 524 218 L 541 201 L 549 201 L 558 208"
                />
              </circle>
              <circle r="4" fill="#FFF" filter="url(#particle-glow)">
                <animateMotion
                  dur="7.2s"
                  begin="1.2s"
                  repeatCount="indefinite"
                  path="M 522 274 L 531 272 L 550 253 L 575 249 L 580 244 L 600 244 L 609 251"
                />
              </circle>
              <circle r="4" fill="#FFF" filter="url(#particle-glow)">
                <animateMotion
                  dur="8.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                  path="M 520 327 L 547 327 L 561 313 L 634 313 L 662 341 L 681 341 L 689 347"
                />
              </circle>
              <circle r="4" fill="#FFF" filter="url(#particle-glow)">
                <animateMotion
                  dur="6.8s"
                  begin="2.1s"
                  repeatCount="indefinite"
                  path="M 521 386 L 525 382 L 595 382 L 600 377 L 620 377 L 628 385"
                />
              </circle>
              <circle r="4" fill="#FFF" filter="url(#particle-glow)">
                <animateMotion
                  dur="9s"
                  begin="0.9s"
                  repeatCount="indefinite"
                  path="M 520 445 L 547 446 L 560 459 L 635 459 L 662 432 L 681 432 L 690 421"
                />
              </circle>
              <circle r="4" fill="#FFF" filter="url(#particle-glow)">
                <animateMotion
                  dur="7.8s"
                  begin="1.8s"
                  repeatCount="indefinite"
                  path="M 521 499 L 531 501 L 546 515 L 575 515 L 580 510 L 601 510 L 609 517"
                />
              </circle>
              <circle r="4" fill="#FFF" filter="url(#particle-glow)">
                <animateMotion
                  dur="6.4s"
                  begin="0.4s"
                  repeatCount="indefinite"
                  path="M 498 540 L 512 548 L 516 551 L 557 551"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-extrabold leading-[1.08] tracking-tight mb-6">
          <span className="text-white drop-shadow-lg block">Business Automation</span>
          <span className="text-[#E8B95E] drop-shadow-lg block mt-2">Solutions</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-in-up text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md"
          style={{ animationDelay: '0.15s' }}
        >
          Helping businesses automate operations, improve customer engagement, and streamline daily workflows.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            href="/#services"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#E8B95E] to-[#d4a44e] text-[#042430] font-semibold text-[0.95rem] rounded-xl shadow-lg shadow-[#E8B95E]/20 hover:shadow-xl hover:shadow-[#E8B95E]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Services &rarr;
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-[0.95rem] backdrop-blur-sm bg-white/[0.05] hover:bg-white/[0.1] hover:border-[#E8B95E]/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
