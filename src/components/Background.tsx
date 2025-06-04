'use client';

import { useEffect, useState } from "react";

export default function Background() {
  const [stars, setStars] = useState<Array<{ top: number, left: number, right: number, delay: number }>>([]);

  useEffect(() => {
    // Generate stars only on the client side
    const generateRandom = (min: number, max: number) => Math.random() * (max - min) + min;
    const newStars = Array(4).fill(0).map(() => ({
      top: generateRandom(0, -800),  // ปรับตามพื้นที่ background สูง 700px
      left: generateRandom(0, 300), // ปรับตามความกว้างที่เหมาะสม
      right: generateRandom(0, 1100), // ปรับตามความกว้างที่เหมาะสม
      delay: generateRandom(3, 0.8), // ปรับดีเลย์สำหรับดาวตก
    }));
    setStars(newStars);
  }, []);

  const ShootingStar = ({ delay, top, left, right }: { delay: number, top: number, left: number, right: number }) => (
    <div
      className="shooting-star hidden sm:block"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        right: `${right}px`,
        animationDelay: `${delay}s`,
      }}
    />
  );

  return (
    <div className="background">
      <div className="heading"></div>
      {stars.map((star, i) => (
        <ShootingStar key={i} delay={star.delay} top={star.top} left={star.left} right={star.right} />
      ))}
    </div>
  );
} 