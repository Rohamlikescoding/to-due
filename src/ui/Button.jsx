function Button({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        className
          ? `
  duration-100   overflow-hidden hover:scale-125 ease-in  border-l-2   ${className}`
          : `duration-100   overflow-hidden hover:scale-125 ease-in px-2 border-l-2 border-sky-800/10 text-lg;`
      }
    >
      {children}
    </button>
  );
}

export default Button;
