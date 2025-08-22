"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  isDark?: boolean; 
  isCentered?: boolean; 
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  isDark = false,
  isCentered = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`card-container ${isDark ? 'card-dark' : 'card-light'} ${isCentered ? 'centered-vert' : ''}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Card Background"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          className="card-bg-image"
          priority
        />
      )}
      {/* Overlay pour lisibilité */}
      {backgroundImage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: isDark
              ? 'linear-gradient(120deg, rgba(26,67,20,0.65) 60%, rgba(0,0,0,0.35) 100%)'
              : 'linear-gradient(120deg, rgba(255,255,255,0.65) 60%, rgba(0,0,0,0.15) 100%)',
            zIndex: 1,
          }}
        />
      )}
      <div
        className={`card-content ${isCentered ? 'centered' : ''}`}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {buttonText && buttonLink && buttonText.trim().length > 0 && (
          <Link
            href={buttonLink}
            onClick={(event) => {
              try {
                if (buttonLink && buttonLink.startsWith('#')) {
                  event.preventDefault();
                  const target = document.querySelector(buttonLink);
                  if (target) {
                    (target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.history.replaceState({}, '', buttonLink);
                  }
                }
              } catch (error) {
                // Fallback: let Next.js handle default navigation
              }
            }}
          >
            <button className="card-button">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;