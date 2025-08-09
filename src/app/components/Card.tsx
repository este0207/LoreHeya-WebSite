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
  isDark?: boolean; // Pour indiquer si la carte est sombre (fond vert) ou claire (fond blanc)
  isCentered?: boolean; // Centre le contenu horizontalement et le texte
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
    >
      {/** Anchor smooth-scroll handler for in-page links */}
      {/** Using a function here to keep render clean */}
      {/** It only triggers when buttonLink is a hash (#id) */}
      {/** No changes for external or normal links */}
      {/** Types ensure safe event usage */}
      {/** history.replaceState used to update hash without jump */}
      {/** Note: globals.css also sets scroll-behavior: smooth as fallback */}
      {/** This keeps UX consistent even if Link does default scroll */}
      {/** and allows offset control later if needed */}
      
      {(() => null)()}
      
      {/** Helper defined inline to access buttonLink */}
      {/** eslint-disable-next-line react/jsx-no-undef */}
      
      {/** We keep logic inside component scope */}
      
      {/** @ts-ignore - helper function declared below via function hoisting */}
      
      <div className={`card-content ${isCentered ? 'centered' : ''}`}>
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
      {backgroundImage && (
        <div className="card-image-container">
          <Image
            src={backgroundImage}
            alt="Card Background"
            layout="fill"
            objectFit="cover"
            className="card-image"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Card;