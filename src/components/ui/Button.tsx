import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`${className} py-2 text-white font-semibold flex-1 space-x-2 rounded-md hover:bg-transparent hover:text-black hover:border-gray-800 hover:border-2 transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
