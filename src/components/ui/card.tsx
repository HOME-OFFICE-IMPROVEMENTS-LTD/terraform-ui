"use client";

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className = '' }: CardProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export type { CardProps };
export { Card, CardHeader, CardContent };
