import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const MOCK_RECOMMENDATIONS = [
  {
    id: 1,
    title: "Neon Horizon",
    artist: "Synthwave Collective",
    score: "98%",
    tags: ["High Energy", "Electronic"],
    reason: "Matches the fast pacing and vibrant contrast of your clip perfectly.",
    cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Silent Orbit",
    artist: "Aura Dynamics",
    score: "94%",
    tags: ["Atmospheric", "Ambient"],
    reason: "Aligns with the dramatic shadows and slow pans detected.",
    cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Urban Pulse",
    artist: "Metro Lines",
    score: "89%",
    tags: ["Rhythmic", "Percussive"],
    reason: "Strong beat sync potential with the motion cuts in the middle.",
    cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=400&auto=format&fit=crop"
  }
];

export default function RecommendationStack({ onSelectTrack }) {
  return (
    <div style={{
      width: "100%",
      maxWidth: "680px",
      margin: "0 auto",
      padding: "32px 16px 40px",
      boxSizing: "border-box",
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "32px" }}
      >
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          marginBottom: "10px",
          margin: "0 0 10px"
        }}>
          Analysis Complete
        </p>
        <h1 style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: "clamp(26px, 6vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "rgba(255,255,255,0.95)",
          lineHeight: 1.1,
          margin: 0
        }}>
          Strongest Matches
        </h1>
      </motion.div>

      {/* Track Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {MOCK_RECOMMENDATIONS.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.45 }}
            style={{
              borderRadius: "20px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              overflow: "hidden",
              padding: "16px",
              boxSizing: "border-box",
            }}
          >
            {/* Top row: rank + art + info + score badge */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "14px",
            }}>
              {/* Rank */}
              <span style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "12px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.2)",
                flexShrink: 0,
                width: "16px",
                textAlign: "center",
              }}>
                {index + 1}
              </span>

              {/* Album Art */}
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <img
                  src={track.cover}
                  alt={track.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Title + Artist */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.95)",
                  margin: "0 0 3px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {track.title}
                </h3>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}>
                  {track.artist}
                </p>
              </div>

              {/* Match Score */}
              <span style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "11px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.08)",
                padding: "4px 10px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}>
                {track.score}
              </span>
            </div>

            {/* Tags row */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "14px",
              paddingLeft: "30px",
            }}>
              {track.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "3px 9px",
                  borderRadius: "100px",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom row: reason + select button */}
            <div style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "12px",
              paddingLeft: "30px",
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.5,
                margin: 0,
                flex: 1,
              }}>
                {track.reason}
              </p>

              {/* Select Button */}
              <button
                onClick={() => onSelectTrack(track)}
                style={{
                  flexShrink: 0,
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "100px",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.18s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.borderColor = "#fff";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              >
                <CheckCircle size={14} strokeWidth={2.5} />
                Select
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
