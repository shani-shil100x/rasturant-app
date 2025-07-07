// components/DiscountBadge.js
import React, { useEffect, useState } from "react";

const DiscountBadge = ({ discountPercent, expiresAt }) => {
  const [timeLeft, setTimeLeft] = useState(expiresAt - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(expiresAt - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  const formatTime = () => {
    if (timeLeft <= 0) return "Expired";
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold shadow-md">
      {discountPercent}% OFF • {formatTime()}
    </div>
  );
};

export default DiscountBadge;
