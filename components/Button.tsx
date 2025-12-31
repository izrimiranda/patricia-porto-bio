import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, href, icon, className = '' }) => {
  const baseClasses = "w-full max-w-md md:max-w-xl bg-white border border-stone-100 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-nude-100 hover:to-white text-stone-700 font-medium py-4 md:py-5 px-6 md:px-8 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 md:gap-4 md:text-lg group";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${className}`}>
        {icon && <span className="text-stone-400 group-hover:text-stone-600 transition-colors">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {icon && <span className="text-stone-400 group-hover:text-stone-600 transition-colors">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;