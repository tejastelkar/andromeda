import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../contexts/AuthContext';
import { useStore } from '../store';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';

function WaveLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16C4 16 7 4 12 4C17 4 18 20 22 20C26 20 28 16 28 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function AuthModal() {
  const { loginWithEmail, loginWithGoogle, registerWithEmail } = useContext(AuthContext);
  const isAuthModalOpen = useStore((s) => s.isAuthModalOpen);
  const setAuthModalOpen = useStore((s) => s.setAuthModalOpen);
  
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isAuthModalOpen) {
      setTimeout(() => {
        setMode('signin');
        setEmail('');
        setPassword('');
        setUsername('');
      }, 300);
    }
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'signin') {
      if (!email || !password) return toast.error('Please fill in all fields');
      setLoading(true);
      try {
        await loginWithEmail(email, password);
        toast.success('Welcome back!');
        setAuthModalOpen(false);
      } catch (error) {
        toast.error(error.message || 'Failed to sign in');
      } finally {
        setLoading(false);
      }
    } else {
      if (!email || !password || !username) return toast.error('Please fill in all fields');
      setLoading(true);
      try {
        await registerWithEmail(email, password, username);
        toast.success('Account created successfully!');
        setAuthModalOpen(false);
      } catch (error) {
        toast.error(error.message || 'Failed to sign up');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      toast.success(mode === 'signin' ? 'Welcome back!' : 'Account created!');
      setAuthModalOpen(false);
    } catch (error) {
      toast.error(error.message || 'Failed to authenticate with Google');
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setAuthModalOpen(false)}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="auth-modal-content"
        style={{
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(20,20,20,0.75) 0%, rgba(10,10,10,0.85) 100%)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)',
          color: '#fff',
          fontFamily: '"Poppins", sans-serif'
        }}
      >
        <button 
          onClick={() => setAuthModalOpen(false)}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.6)',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          <WaveLogo />
          <span style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 900,
            fontSize: '22px',
            letterSpacing: '-0.04em',
          }}>
            andromeda<sup style={{ fontSize: '10px', marginLeft: '1px' }}>™</sup>
          </span>
        </div>

        <div style={{ position: 'relative', width: '100%', minHeight: mode === 'signup' ? '280px' : '220px', transition: 'min-height 0.3s ease' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === 'signup' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === 'signup' ? -20 : 20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ width: '100%' }}
            >
              <h1 style={{ 
                fontSize: '26px', 
                fontWeight: 700, 
                marginBottom: '10px', 
                width: '100%', 
                textAlign: 'center',
                letterSpacing: '-0.03em',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #999999 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {mode === 'signin' ? 'Welcome back' : 'Create an account'}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '36px', width: '100%', textAlign: 'center', fontWeight: 400 }}>
                {mode === 'signin' ? 'Sign in to access your Andromeda Studio.' : 'Join the Andromeda Studio community.'}
              </p>

              <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {mode === 'signup' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={inputStyle}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </motion.div>
                )}
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '24px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%)',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: '15px',
                    letterSpacing: '-0.01em',
                    cursor: loading ? 'default' : 'pointer',
                    marginTop: '12px',
                    boxShadow: '0 8px 24px rgba(255,255,255,0.15)',
                    opacity: loading ? 0.7 : 1,
                    transition: 'box-shadow 0.2s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,255,255,0.25)'}
                  onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,0.15)'}
                >
                  {loading ? 'Processing...' : (mode === 'signin' ? 'Sign In' : 'Sign Up')}
                </motion.button>
              </form>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', margin: '24px 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>or</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
        </div>

        <motion.button
          whileHover={{ scale: 1.015, backgroundColor: 'rgba(255,255,255,0.06)' }}
          whileTap={{ scale: 0.985 }}
          onClick={handleGoogleSignIn}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.02)',
            color: '#fff',
            fontWeight: 500,
            fontSize: '15px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </motion.button>

        <p style={{ marginTop: '32px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
          {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            style={{ 
              background: 'none',
              border: 'none',
              color: '#fff', 
              textDecoration: 'none', 
              fontWeight: 500,
              cursor: 'pointer',
              padding: 0,
              fontSize: '14px'
            }}
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '16px 24px',
  borderRadius: '24px',
  border: '1px solid rgba(255,255,255,0.04)',
  background: 'rgba(255,255,255,0.03)',
  color: '#fff',
  fontSize: '14px',
  outline: 'none',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  boxSizing: 'border-box',
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
};

const handleInputFocus = (e) => {
  e.target.style.border = '1px solid rgba(255,255,255,0.15)';
  e.target.style.background = 'rgba(255,255,255,0.06)';
  e.target.style.boxShadow = '0 0 0 4px rgba(255,255,255,0.03), inset 0 2px 4px rgba(0,0,0,0.1)';
};

const handleInputBlur = (e) => {
  e.target.style.border = '1px solid rgba(255,255,255,0.04)';
  e.target.style.background = 'rgba(255,255,255,0.03)';
  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)';
};
