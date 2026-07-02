import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft, Music2 } from 'lucide-react';

export default function ChosenPairing({ track, video, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        width: "100%",
        maxWidth: "520px",
        textAlign: "center",
        padding: "0 16px",
      }}
    >
      {/* Label */}
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.4)",
        margin: 0
      }}>
        Soundtrack Locked
      </p>

      {/* Album Art */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
          flexShrink: 0,
        }}
      >
        <img
          src={track.cover}
          alt={track.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      {/* Track Info */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <h1 style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "rgba(255,255,255,0.96)",
          margin: 0,
          lineHeight: 1.1
        }}>
          {track.title}
        </h1>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: "18px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.5)",
          margin: 0
        }}>
          {track.artist}
        </p>
      </div>

      {/* Divider */}
      <div style={{ width: "48px", height: "1px", background: "rgba(255,255,255,0.15)" }} />

      {/* Description */}
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: "15px",
        fontWeight: 400,
        color: "rgba(255,255,255,0.5)",
        lineHeight: "1.7",
        margin: 0,
        maxWidth: "400px"
      }}>
        Paired with <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{video.name}</strong>. {track.reason}
      </p>

      {/* Actions */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", width: "100%" }}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "100px",
            padding: "18px 48px",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 14px 40px rgba(255,255,255,0.2)",
            minWidth: "280px",
            whiteSpace: "nowrap"
          }}
        >
          <Download size={18} strokeWidth={2.5} />
          Use this Soundtrack
        </motion.button>

        <button
          onClick={onReset}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
            letterSpacing: "0.05em",
            transition: "color 0.2s",
            padding: "8px 0",
          }}
          onMouseOver={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
          onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Start Over
        </button>
      </div>
    </motion.div>
  );
}
