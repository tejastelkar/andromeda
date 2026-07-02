import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroStudio from '../components/HeroStudio';
import DropzoneArea from '../components/DropzoneArea';
import ActiveWorkspace from '../components/ActiveWorkspace';
import AnalysisSequence from '../components/AnalysisSequence';
import RecommendationStack from '../components/RecommendationStack';
import ChosenPairing from '../components/ChosenPairing';

// Overlay wrapper — same pattern as AuthModal
// Blurs the rings background and centers content
function StudioOverlay({ children, onBackdropClick }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Blurred backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onBackdropClick}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      />
      {/* Content — scrollable, centered, mobile-safe */}
      <div className="studio-overlay-content" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [appState, setAppState] = useState('idle'); // idle, workspace, analyzing, results, paired
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleUpload = (file) => {
    const url = URL.createObjectURL(file);
    setUploadedVideo({ name: file.name, url, file });
    setAppState('workspace');
  };

  const resetFlow = () => {
    setAppState('idle');
    setUploadedVideo(null);
    setSelectedTrack(null);
  };

  return (
    <>
      {/* Always-visible background with rings, logo, sidebar, dropzone */}
      <HeroStudio>
        {appState === 'idle' && (
          <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <DropzoneArea onUpload={handleUpload} />
          </motion.div>
        )}
      </HeroStudio>

      {/* Overlays rendered at root level, outside HeroStudio, just like AuthModal */}
      <AnimatePresence mode="wait">
        {appState === 'workspace' && (
          <StudioOverlay key="workspace">
            <ActiveWorkspace
              video={uploadedVideo}
              onAnalyze={() => setAppState('analyzing')}
              onClear={resetFlow}
            />
          </StudioOverlay>
        )}

        {appState === 'analyzing' && (
          <StudioOverlay key="analyzing">
            <AnalysisSequence onComplete={() => setAppState('results')} />
          </StudioOverlay>
        )}

        {appState === 'results' && (
          <StudioOverlay key="results">
            <RecommendationStack onSelectTrack={(track) => {
              setSelectedTrack(track);
              setAppState('paired');
            }} />
          </StudioOverlay>
        )}

        {appState === 'paired' && (
          <StudioOverlay key="paired">
            <ChosenPairing
              track={selectedTrack}
              video={uploadedVideo}
              onReset={resetFlow}
            />
          </StudioOverlay>
        )}
      </AnimatePresence>
    </>
  );
}
