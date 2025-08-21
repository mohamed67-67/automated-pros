import React from "react";

export default function SkeletalLoader({ className }: { className?: string }) {
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <div className="skeleton"></div>
    </div>
  );
}
