import React, { useState } from "react";

interface ActionButtonProps {
  text: string;
  onClick: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 200); // Effekt för kort animation
  };

  return (
    <button
      className={`action-button ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

