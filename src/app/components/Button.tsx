// src/app/components/Button.tsx

const Button = ({ children }: { children: React.ReactNode }) => {
    return (
      <button className="button">
        {children}
      </button>
    );
  };
  
  export default Button;
  
  