import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: "button" | "submit";
  alignSelf?: "left" | "center" | "right";
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, type, onClick, alignSelf = "left" }) => {
  return (
    <button
      type={type}
      style={{
        maxWidth: "110px",
        padding: "6px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#3498db",
        color: "#ecf0f1",
        cursor: "pointer",
        alignSelf,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
