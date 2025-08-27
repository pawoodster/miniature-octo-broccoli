import React from 'react';

export const Alert = ({ children, className }) => (
  <div className={`p-4 border rounded ${className}`}>
    {children}
  </div>
);

export const AlertTitle = ({ children, className }) => (
  <h5 className={`font-bold mb-1 ${className}`}>
    {children}
  </h5>
);

export const AlertDescription = ({ children, className }) => (
  <div className={`${className}`}>
    {children}
  </div>
);
