interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export default function GlowButton({ 
  children, 
  onClick, 
  className = '', 
  href,
  variant = 'primary'
}: GlowButtonProps) {
  const baseStyles = "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1";
  const primaryStyles = "bg-[#294266] text-white shadow-[0_0_15px_#294266] hover:shadow-[0_0_5px_#294266,0_0_15px_#294266,0_0_30px_#294266]";
  const secondaryStyles = "bg-white text-[#1d2e4a] ring-1 ring-inset ring-[#294266] hover:bg-gray-50 shadow-[0_0_15px_rgba(29,46,74,0.1)] hover:shadow-[0_0_5px_rgba(29,46,74,0.1),0_0_15px_rgba(29,46,74,0.1),0_0_30px_rgba(29,46,74,0.1)]";
  
  const buttonStyles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
} 