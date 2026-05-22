import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;