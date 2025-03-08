import React from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  const baseClasses =
    "w-full h-20 text-4xl font-bold flex items-center justify-center rounded-md transition-all duration-200";

  // Different styling based on value and winning status
  const getSquareClasses = () => {
    if (isWinningSquare) {
      return `${baseClasses} bg-amber-500/30 text-amber-300 border-2 border-amber-400`;
    }

    if (!value) {
      return `${baseClasses} bg-game-dark hover:bg-game-dark-hover cursor-pointer border border-white/10`;
    }

    if (value === "X") {
      return `${baseClasses} bg-game-accent/20 text-game-accent-light border border-game-accent/30`;
    }

    return `${baseClasses} bg-game-secondary/20 text-game-secondary-light border border-game-secondary/30`;
  };

  return (
    <button
      className={getSquareClasses()}
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
};

export default Square;
