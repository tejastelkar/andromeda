import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function DropzoneArea({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(12px)",
    },
  };

  const headingVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariant = {
    hidden: {
      opacity: 0.001,
      y: 10,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
  };

  const headingLines = [
    "FIND THE",
    "PERFECT SOUND",
    "FOR YOUR REEL"
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      gap: "28px",
      width: "100%",
      padding: "0 24px",
      }}
    >
      {/* Heading */}
      <motion.h1
        variants={headingVariant}
        style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: "clamp(24px, 5vw, 38px)", // Slightly larger on desktop
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: "1.1em",
          color: "rgba(255,255,255,0.92)",
          textAlign: "center",
          textTransform: "uppercase",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.05em",
        }}
      >
        {headingLines.map((line, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center", columnGap: "0.25em" }}>
            {line.split(" ").map((word, j) => (
              <span key={j} style={{ whiteSpace: "nowrap", display: "inline-block" }}>
                {word.split("").map((char, k) => (
                  <motion.span
                    key={k}
                    variants={letterVariant}
                    style={{ display: "inline-block", willChange: "transform" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </div>
        ))}
      </motion.h1>

      {/* Button */}
      <motion.div variants={child}>
        <a
          href="#"
          onClick={handleClick}
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            borderRadius: "100px",
            color: "rgba(0,0,0,1)",
            padding: "18px 54px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            boxShadow: "0 14px 38px rgba(255,255,255,0.18)",
            width: "clamp(220px, 50vw, 480px)",
            maxWidth: "90vw",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,255,255,0.25)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(255,255,255,0.15)';
          }}
        >
          Upload Reel
        </a>
      </motion.div>

      <input
        type="file"
        accept="video/*,audio/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </motion.div>
  );
}
