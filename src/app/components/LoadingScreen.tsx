"use client";
import React from 'react';
import Image from 'next/image';

const LoadingScreen = ({ isFadingOut }: { isFadingOut: boolean }) => {
  return (
    <div className={`loading-screen ${isFadingOut ? 'hidden' : ''}`}>
      <div className="loading-content">
        <div className="loader"></div> {/* Le loader est ici */}
      </div>
    </div>
  );
};

export default LoadingScreen;