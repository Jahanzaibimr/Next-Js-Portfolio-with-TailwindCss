const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-accent text-black font-semibold rounded-full hover:bg-accent/80 transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
