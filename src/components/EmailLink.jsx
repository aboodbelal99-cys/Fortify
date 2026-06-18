'use client';

import React, { useState, useEffect } from 'react';
import { contactInfo } from '@/data/services';

// Robust helper to copy text to clipboard with legacy fallback
const copyToClipboard = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    // Fallback: create textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return Promise.resolve();
    } catch (err) {
      document.body.removeChild(textarea);
      return Promise.reject(err);
    }
  }
};

export default function EmailLink({ children, className, id, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e) => {
    if (e) e.preventDefault();
    setIsOpen(true);
  };

  const handleOpenGmail = () => {
    // Copy to clipboard as a helper so they have it
    copyToClipboard(contactInfo.email).catch(() => {});
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactInfo.email)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    
    setIsOpen(false);
    setCopied(true);
    setShowToast(true);
  };

  const handleCopyEmail = () => {
    copyToClipboard(contactInfo.email)
      .then(() => {
        setCopied(true);
        setShowToast(true);
        // Auto close modal after a short delay
        setTimeout(() => {
          setIsOpen(false);
        }, 800);
      })
      .catch((err) => {
        console.error('Clipboard copy failed:', err);
        // Even if clipboard fails, show toast with email so they see it
        setCopied(false);
        setShowToast(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 800);
      });
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        setCopied(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Handle escape key to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <a
        href={`mailto:${contactInfo.email}`}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick(e);
          }
        }}
        className={`${className} select-none`}
        id={id}
        aria-label={label || 'Contact via email'}
        style={{ cursor: 'pointer', textDecoration: 'none' }}
      >
        {children}
      </a>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-md p-6 overflow-hidden rounded-2xl border border-border-gold bg-navy-dark shadow-2xl text-left transform transition-all duration-300 scale-100 flex flex-col z-10">
            {/* Glow Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors text-xl p-1 bg-transparent border-0 cursor-pointer"
              aria-label="Close dialog"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-gold font-sans font-normal">✉</span> Contact via Email
              </h3>
              <p className="text-text-secondary text-sm">
                Select how you would like to connect with <span className="text-gold font-medium">{contactInfo.email}</span>
              </p>
            </div>

            {/* Options List */}
            <div className="flex flex-col gap-3">
              {/* Option 1: Compose in Gmail Web */}
              <button
                onClick={handleOpenGmail}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-surface/30 hover:bg-gold/10 hover:border-gold/30 transition-all text-white text-sm font-medium group text-left cursor-pointer"
                type="button"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-gold transition-colors">Compose in Gmail</div>
                    <div className="text-xs text-text-muted">Opens Gmail Web compose in a new tab</div>
                  </div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0">&rarr;</span>
              </button>

              {/* Option 2: Default Mail Client */}
              <a
                href={`mailto:${contactInfo.email}`}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-surface/30 hover:bg-gold/10 hover:border-gold/30 transition-all text-white text-sm font-medium group text-left cursor-pointer no-underline"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">💻</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-gold transition-colors">Default Mail Client</div>
                    <div className="text-xs text-text-muted">Outlook, Apple Mail, or system default</div>
                  </div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0">&rarr;</span>
              </a>

              {/* Option 3: Copy Email Address */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-surface/30 hover:bg-gold/10 hover:border-gold/30 transition-all text-white text-sm font-medium group text-left cursor-pointer"
                type="button"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{copied ? '✅' : '📋'}</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-gold transition-colors">
                      {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                    </div>
                    <div className="text-xs text-text-muted">Copy to clipboard to send manually</div>
                  </div>
                </div>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Success Toast */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-navy-dark/95 border border-gold/30 text-white px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-white">{copied ? 'Copied!' : 'Email Address'}</span>
            <span className="text-xs text-text-secondary">{contactInfo.email}</span>
          </div>
        </div>
      )}
    </>
  );
}
