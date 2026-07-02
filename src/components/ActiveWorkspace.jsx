import React from 'react';
import { Sparkles, X, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ActiveWorkspace({ video, onAnalyze, onClear }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "56px",
        width: "100%",
        maxWidth: "860px",
        padding: "0 24px",
        flexWrap: "wrap",
      }}
    >
      {/* Video Preview — phone aspect ratio, constrained height */}
      <div style={{
        position: "relative",
        height: "min(420px, 60vh)",
        aspectRatio: "9/16",
        flexShrink: 0,
        borderRadius: "28px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(0,0,0,0.8)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.7)"
      }}>
        <video
          src={video?.url}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.92 }}
          loop
          muted
          playsInline
          autoPlay
        />
        <button
          onClick={onClear}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(8px)",
            transition: "all 0.2s",
          }}
          title="Remove video"
          onMouseOver={e => e.currentTarget.style.background = "rgba(0,0,0,0.9)"}
          onMouseOut={e => e.currentTarget.style.background = "rgba(0,0,0,0.6)"}
        >
          <X size={15} strokeWidth={2.5} />
        </button>
      </div>

      {/* Action Area */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0px",
        maxWidth: "380px",
        minWidth: "240px",
        flex: 1,
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "5px 12px",
          borderRadius: "100px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          marginBottom: "20px"
        }}>
          <Video size={12} color="rgba(255,255,255,0.6)" />
          <span style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "10px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.1em"
          }}>
            Reel Uploaded
          </span>
        </div>

        {/* Filename */}
        <h2
          title={video?.name}
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: "clamp(22px, 3vw, 30px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.95)",
            margin: "0 0 14px 0",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%"
          }}
        >
          {video?.name || "Untitled_Reel.mp4"}
        </h2>

        {/* Description */}
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: "14px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.45)",
          lineHeight: "1.65",
          margin: "0 0 36px 0"
        }}>
          Our AI engine will analyze the motion, pace, and mood of your reel to find the perfect soundtrack.
        </p>

        {/* CTA Button */}
        <motion.a
          href="#"
          onClick={e => { e.preventDefault(); onAnalyze(); }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "100px",
            padding: "16px 40px",
            fontFamily: '"Poppins", sans-serif',
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 12px 36px rgba(255,255,255,0.18)",
            whiteSpace: "nowrap",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow = "0 16px 48px rgba(255,255,255,0.28)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 12px 36px rgba(255,255,255,0.18)";
          }}
        >
          <Sparkles size={17} strokeWidth={2.5} />
          Find Matching Audio
        </motion.a>
      </div>
    </motion.div>
  );
}
