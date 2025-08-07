"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  isDark?: boolean; // Pour indiquer si la carte est sombre (fond vert) ou claire (fond blanc)
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  isDark = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`card-container ${isDark ? 'card-dark' : 'card-light'}`}
    >
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Link href={buttonLink}>
          <button className="card-button">
            {buttonText}
          </button>
        </Link>
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