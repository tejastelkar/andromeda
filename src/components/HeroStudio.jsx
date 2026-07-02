import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Music2, Package2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import AuthModal from "./AuthModal";
import { AuthContext } from "../contexts/AuthContext";

// Wave/sine logo SVG inline - matches Aural logo
function WaveLogo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 287 287"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#wave_logo_filter)">
        <path d="M29.182 147.206C29.1723 147.206 29.166 147.217 29.1702 147.225C51.7791 195.301 71.7168 217.695 92.0656 217.695C117.865 217.695 133.93 183.458 150.941 147.206C164.364 118.6 179.577 86.171 194.892 86.171C211.748 86.171 232.213 124.405 242.913 147.206C243.865 149.138 245.537 150.619 247.57 151.331C249.603 152.043 251.834 151.93 253.784 151.014C255.734 150.099 257.247 148.455 257.997 146.436C258.747 144.418 258.675 142.185 257.796 140.219C235.276 92.1306 215.284 69.7305 194.892 69.7305C169.093 69.7305 153.027 103.968 136.016 140.219C122.634 168.826 107.422 201.254 92.1067 201.254C75.25 201.254 54.7855 163.02 44.0856 140.219C43.1336 138.287 41.4613 136.806 39.4283 136.094C37.3952 135.382 35.1639 135.496 33.214 136.411C31.2642 137.327 29.7515 138.97 29.0013 140.989C28.2534 143.001 28.3228 145.226 29.194 147.188C29.1979 147.196 29.1915 147.206 29.182 147.206V147.206Z" fill="white"/>
      </g>
      <path d="M194.892 67.7305C180.995 67.7305 170.009 76.9739 160.532 90.2168C151.036 103.488 142.687 121.296 134.206 139.369L134.205 139.372C127.498 153.708 120.404 168.84 113.096 180.395C109.441 186.172 105.795 190.953 102.192 194.269C98.5694 197.603 95.2126 199.255 92.1064 199.255C88.6256 199.255 84.6508 197.254 80.3213 193.426C76.0372 189.637 71.6704 184.293 67.4336 178.151C58.9666 165.878 51.2308 150.736 45.8965 139.369L45.8877 139.353L45.8799 139.335C44.6963 136.933 42.6171 135.091 40.0898 134.206C37.5626 133.321 34.7882 133.463 32.3643 134.601C29.9404 135.739 28.0598 137.782 27.127 140.292C26.2438 142.668 26.2792 145.283 27.2129 147.629C27.2439 147.78 27.2919 147.931 27.3604 148.076C38.6955 172.179 49.4292 189.999 59.9727 201.819C70.5143 213.637 81.0852 219.695 92.0654 219.695C105.962 219.695 116.948 210.452 126.425 197.209C135.921 183.938 144.27 166.129 152.751 148.056C159.479 133.719 166.582 118.586 173.896 107.031C177.554 101.254 181.202 96.4721 184.806 93.1562C188.429 89.822 191.786 88.1709 194.892 88.1709C198.373 88.1709 202.347 90.1712 206.677 94C210.961 97.7886 215.328 103.133 219.564 109.274C228.031 121.547 235.768 136.688 241.103 148.056L241.11 148.073L241.119 148.091C242.303 150.492 244.382 152.334 246.909 153.219C249.436 154.104 252.21 153.962 254.634 152.824C257.058 151.686 258.939 149.643 259.872 147.133C260.805 144.623 260.715 141.847 259.622 139.402L259.614 139.387L259.607 139.371C248.316 115.26 237.59 97.4348 227.038 85.6104C216.487 73.7877 205.892 67.7305 194.892 67.7305ZM30.0225 149.025C29.8122 149.122 29.5784 149.186 29.3232 149.202L29.1816 149.206C29.487 149.206 29.7703 149.14 30.0225 149.024V149.025Z" stroke="url(#wave_logo_gradient)" strokeWidth="4"/>
      <defs>
        <filter id="wave_logo_filter" x="24.4883" y="65.7305" width="238.023" height="156.367" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="0.402957"/>
          <feGaussianBlur stdDeviation="2.21626"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2093_3125"/>
        </filter>
        <linearGradient id="wave_logo_gradient" x1="143.499" y1="217.695" x2="143.499" y2="69.7305" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="0.515629" stopColor="white" stopOpacity="0"/>
          <stop offset="1" stopOpacity="0.24"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Left sidebar icons - matches reference sidebar
function SidebarIcons() {
  return (
    // Outer wrapper handles the centering — Framer Motion must NOT own the transform
    <div className="sidebar-wrapper">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        background: "rgba(22,22,22,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "22px",
        padding: "13px 10px",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      {/* Wave icon - active */}
      <SidebarBtn active={true} title="Home">
        {/* Render a smaller version of the WaveLogo to fit the 48x48 button */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 287 287"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#sb_wave_filter)">
            <path d="M29.182 147.206C29.1723 147.206 29.166 147.217 29.1702 147.225C51.7791 195.301 71.7168 217.695 92.0656 217.695C117.865 217.695 133.93 183.458 150.941 147.206C164.364 118.6 179.577 86.171 194.892 86.171C211.748 86.171 232.213 124.405 242.913 147.206C243.865 149.138 245.537 150.619 247.57 151.331C249.603 152.043 251.834 151.93 253.784 151.014C255.734 150.099 257.247 148.455 257.997 146.436C258.747 144.418 258.675 142.185 257.796 140.219C235.276 92.1306 215.284 69.7305 194.892 69.7305C169.093 69.7305 153.027 103.968 136.016 140.219C122.634 168.826 107.422 201.254 92.1067 201.254C75.25 201.254 54.7855 163.02 44.0856 140.219C43.1336 138.287 41.4613 136.806 39.4283 136.094C37.3952 135.382 35.1639 135.496 33.214 136.411C31.2642 137.327 29.7515 138.97 29.0013 140.989C28.2534 143.001 28.3228 145.226 29.194 147.188C29.1979 147.196 29.1915 147.206 29.182 147.206Z" fill="white"/>
          </g>
          <defs>
            <filter id="sb_wave_filter" x="24" y="65" width="238" height="157" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            </filter>
          </defs>
        </svg>
      </SidebarBtn>
      {/* Play icon */}
      <SidebarBtn active={false} title="Now Playing">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 8.8l5.5 3.2-5.5 3.2V8.8z" fill="currentColor" />
        </svg>
      </SidebarBtn>
      {/* Playlist icon */}
      <SidebarBtn active={false} title="Playlist">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h12M4 10h12M4 14h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="18.5" cy="15.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M21 13V8.5l2.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SidebarBtn>
      {/* Cross icon */}
      <SidebarBtn active={false} title="Experiences">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </SidebarBtn>
      {/* Search icon */}
      <SidebarBtn active={false} title="Search">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </SidebarBtn>
    </motion.div>
    </div>
  );
}

function SidebarBtn({ active, title, children }) {
  return (
    <button
      title={title}
      style={{
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "14px",
        background: active ? "rgba(255,255,255,0.10)" : "transparent",
        color: active ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.62)",
        border: "none",
        cursor: "pointer",
        transition: "background 0.2s, color 0.2s",
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}



// Concentric rings — exact Aural Port animation
// Inspected live from auralport.framer.website:
// • 11 rings, spacing ~94px each
// • Same Framer Motion animation per ring: scale 1→1.05→1, opacity highOp→lowOp→highOp
// • Each ring is staggered by ~0.28s so the crest travels outward like a sound wave
function ConcentricRings() {
  // 13 rings, 100px spacing — outermost bleeds past viewport like Aural Port
  const rings = [
    { size: 100,  restOp: 0.20, peakOp: 1.00 },
    { size: 200,  restOp: 0.18, peakOp: 0.90 },
    { size: 300,  restOp: 0.16, peakOp: 0.78 },
    { size: 400,  restOp: 0.14, peakOp: 0.66 },
    { size: 500,  restOp: 0.12, peakOp: 0.54 },
    { size: 600,  restOp: 0.10, peakOp: 0.42 },
    { size: 700,  restOp: 0.08, peakOp: 0.30 },
    { size: 800,  restOp: 0.07, peakOp: 0.20 },
    { size: 900,  restOp: 0.05, peakOp: 0.13 },
    { size: 1000, restOp: 0.04, peakOp: 0.08 },
    { size: 1100, restOp: 0.03, peakOp: 0.05 },
    { size: 1200, restOp: 0.02, peakOp: 0.03 },
    { size: 1350, restOp: 0.01, peakOp: 0.02 },
  ];

  const DURATION = 3.2;  // full cycle length
  const STAGGER  = 0.25; // delay between each ring's peak

  return (
    <div
      style={{
        position: "absolute",
        top: "28%",       // higher — near logo, matching Aural Port layout
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 0,
        height: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "visible",
      }}
    >
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width:  `${ring.size}px`,
            height: `${ring.size}px`,
            top:    "50%",
            left:   "50%",
            marginLeft: `-${ring.size / 2}px`,
            marginTop:  `-${ring.size / 2}px`,
            borderRadius: "50%",
            border: `${Math.max(0.5, 1.4 - i * 0.085)}px solid rgba(255,255,255,1)`,
          }}
          animate={{
            // scale swells to 1.05 at peak — matches Aural Port exactly
            scale:   [1, 1.05, 1],
            // opacity: rest (dim) → peak (bright) → rest (dim)
            opacity: [ring.restOp, ring.peakOp, ring.restOp],
          }}
          transition={{
            duration:    DURATION,
            delay:       i * STAGGER,
            repeat:      Infinity,
            ease:        "easeInOut",
            repeatDelay: 0.5,
          }}
        />
      ))}
    </div>
  );
}



// Bottom dock — 3 dots default, hover morphs into 3 solid icons (Aural Port style)
function BottomDock() {
  const [hovered, setHovered] = useState(false);

  // Exact SVGs extracted from Aural Port
  const icons = [
    // Store/Lock / Bag
    <svg key="store" display="block" viewBox="0 0 24 24" style={{width: 24, height: 24}} xmlns="http://www.w3.org/2000/svg">
      <path d="M 0.75 12 C 0.336 12 0 11.664 0 11.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 11.25 C 16.5 11.664 16.164 12 15.75 12 Z" fillOpacity="0" fill="#fff" transform="translate(3.75 8.25)" />
      <path d="M 0.75 12 C 0.336 12 0 11.664 0 11.25 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 L 16.5 11.25 C 16.5 11.664 16.164 12 15.75 12 Z" fill="transparent" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#fff" transform="translate(3.75 8.25)" />
      <path d="M 0 6.75 L 0 3.75 C 0 1.679 1.679 0 3.75 0 C 5.821 0 7.5 1.679 7.5 3.75 L 7.5 6.75" fill="transparent" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#fff" transform="translate(8.25 1.5)" />
    </svg>,
    // Music Note
    <svg key="music" display="block" viewBox="0 0 24 24" style={{width: 24, height: 24}} xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 C 5.25 4.075 4.075 5.25 2.625 5.25 C 1.175 5.25 0 4.075 0 2.625 Z" fillOpacity="0" fill="#fff" transform="translate(14.25 12.75)" />
      <path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 C 5.25 4.075 4.075 5.25 2.625 5.25 C 1.175 5.25 0 4.075 0 2.625 Z" fillOpacity="0" fill="#fff" transform="translate(2.25 15.75)" />
      <path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 C 5.25 4.075 4.075 5.25 2.625 5.25 C 1.175 5.25 0 4.075 0 2.625 Z" fill="transparent" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#fff" transform="translate(14.25 12.75)" />
      <path d="M 0 2.625 C 0 1.175 1.175 0 2.625 0 C 4.075 0 5.25 1.175 5.25 2.625 C 5.25 4.075 4.075 5.25 2.625 5.25 C 1.175 5.25 0 4.075 0 2.625 Z" fill="transparent" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#fff" transform="translate(2.25 15.75)" />
      <path d="M 0 16.125 L 0 3 L 12 0 L 12 13.125" fill="transparent" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#fff" transform="translate(7.5 2.25)" />
    </svg>,
    // Plus
    <svg key="plus" display="block" viewBox="0 0 24 24" style={{width: 24, height: 24}} xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 0 L 14 0" fill="transparent" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#fff" transform="translate(5 12)" />
      <path d="M 0 0 L 0 14" fill="transparent" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#fff" transform="translate(12 5)" />
    </svg>,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        bottom: "12px",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
        zIndex: 10,
        pointerEvents: "auto",
        cursor: "pointer",
      }}
    >
      {/* Invisible expanded hit area to prevent losing hover */}
      <div style={{ padding: "24px", display: "flex", gap: "33px", alignItems: "center" }}>
        {[0, 1, 2].map((i) => {
          // Aural port uses 12px for the first dot, 8px for the others.
          const dotSize = i === 0 ? 12 : 8;
          const dotOpacity = i === 0 ? 1 : 0.5;

          return (
            <motion.div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
                position: "relative",
              }}
            >
              <AnimatePresence>
                {hovered ? (
                  <motion.div
                    key="icon"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      duration: 0.2,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                    style={{ position: "absolute", color: "white" }}
                  >
                    {icons[i]}
                  </motion.div>
                ) : (
                  <motion.div
                    key="dot"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: dotOpacity, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    style={{
                      position: "absolute",
                      width: `${dotSize}px`,
                      height: `${dotSize}px`,
                      borderRadius: "50%",
                      backgroundColor: "white",
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function AuthButton() {
  const { user } = useStore();
  const setAuthModalOpen = useStore(s => s.setAuthModalOpen);
  const authContext = useContext(AuthContext);
  const logout = authContext ? authContext.logout : () => {};
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown on outside click
  React.useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e) => {
      if (!e.target.closest('#profile-menu')) setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.6, duration: 0.8 }}
      style={{ position: "relative" }}
      id="profile-menu"
    >
      {user ? (
        <>
          {/* Profile pill — clicking opens dropdown */}
          <button
            onClick={() => setDropdownOpen(o => !o)}
            className="user-profile-btn"
          >
            <span className="user-profile-name">
              {user.displayName || user.email?.split('@')[0] || "User"}
            </span>
            <div className="user-profile-avatar">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" referrerPolicy="no-referrer" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#fff 0%,#aaa 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontSize: "13px", fontWeight: 700 }}>
                  {(user.displayName || user.email || "U")[0].toUpperCase()}
                </div>
              )}
            </div>
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  minWidth: "220px",
                  background: "rgba(14,14,14,0.92)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "8px",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                  zIndex: 100,
                }}
              >
                {/* User info header */}
                <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="Profile" referrerPolicy="no-referrer" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#fff 0%,#aaa 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontSize: "15px", fontWeight: 700 }}>
                          {(user.displayName || user.email || "U")[0].toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div style={{ overflow: "hidden" }}>
                      <p style={{ fontFamily: '"Poppins",sans-serif', fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {user.displayName || "User"}
                      </p>
                      <p style={{ fontFamily: '"Poppins",sans-serif', fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Logout */}
                <button
                  onClick={() => { setDropdownOpen(false); logout(); }}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    background: "transparent",
                    border: "none",
                    borderRadius: "10px",
                    color: "rgba(255,80,80,0.85)",
                    fontFamily: '"Poppins",sans-serif',
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "background 0.15s",
                  }}
                  onMouseOver={e => e.currentTarget.style.background = "rgba(255,60,60,0.08)"}
                  onMouseOut={e => e.currentTarget.style.background = "transparent"}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Sign Out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <button
          onClick={() => setAuthModalOpen(true)}
          style={{
            display: "inline-block",
            padding: "8px 24px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "100px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            backdropFilter: "blur(12px)",
            transition: "all 0.2s ease",
            cursor: "pointer",
            fontFamily: '"Poppins",sans-serif',
            whiteSpace: "nowrap",
          }}
          onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
          onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
        >
          Sign In
        </button>
      )}
    </motion.div>
  );
}

export default function HeroStudio({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Left sidebar */}
      <SidebarIcons />

      {/* Concentric rings - positioned in upper area */}
      <ConcentricRings />

      <AnimatePresence>
        <AuthModal />
      </AnimatePresence>

      {/* ── Unified top header bar ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "68px",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          gap: "16px",
        }}
      >
        {/* Left spacer col — mirrors right col so logo is truly centered */}
        <div style={{ flex: 1 }} />

        {/* Logo — center col */}
        <motion.div
          initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            whiteSpace: "nowrap",
          }}
        >
          <WaveLogo />
          <span
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 900,
              fontSize: "clamp(18px, 3.5vw, 26px)",
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            andromeda<sup style={{ fontSize: "11px", verticalAlign: "super", marginLeft: "1px", fontWeight: 700 }}>™</sup>
          </span>
        </motion.div>

        {/* Right col — auth button, right-aligned */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <AuthButton />
        </div>
      </div>

      {/* Main content area — pinned to bottom center like Aural Port reference */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        {children}
      </div>

      {/* Pagination dots */}
      <BottomDock />
    </div>
  );
}
