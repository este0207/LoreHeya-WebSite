"use client";
import React from 'react';
import Image from 'next/image';

const LoadingScreen = ({ isFadingOut }: { isFadingOut: boolean }) => {
  return (
    <div
      className={`loading-screen ${
        isFadingOut ? 'zoom-out' : ''
      }`}
    >
      <div className="loading-content">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;