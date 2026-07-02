import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHASES = [
  "Uploading clip...",
  "Reading motion and mood...",
  "Mapping visual energy...",
  "Finding soundtrack matches...",
  "Ranking strongest recommendations..."
];

export default function AnalysisSequence({ onComplete }) {
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    if (phaseIndex < PHASES.length) {
      const timer = setTimeout(() => {
        setPhaseIndex(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [phaseIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}
    >
      {/* Spinner */}
      <div style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.12)",
        borderTopColor: "rgba(255,255,255,0.9)",
        borderRightColor: "rgba(255,255,255,0.9)",
        animation: "spin 0.9s linear infinite"
      }} />

      {/* Animated phase text */}
      <div style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <AnimatePresence mode="wait">
          {phaseIndex < PHASES.length && (
            <motion.p
              key={phaseIndex}
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
              transition={{ duration: 0.45 }}
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 600,
                color: "rgba(255,255,255,0.92)",
                textAlign: "center",
                letterSpacing: "-0.02em",
                margin: 0
              }}
            >
              {PHASES[phaseIndex]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </motion.div>
  );
}
