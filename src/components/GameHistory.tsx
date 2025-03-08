import React from "react";
import { History, Clock } from "lucide-react";

interface GameHistoryProps {
  history: Array<{
    winner: string | null;
    board: Array<string | null>;
    date: Date;
  }>;
}

const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  // Format date to a readable string
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  };

  // Get result text based on winner
  const getResultText = (winner: string | null) => {
    if (winner) {
      return `Player ${winner} won`;
    }
    return "Draw";
  };

  // Get appropriate color class based on winner
  const getResultColorClass = (winner: string | null) => {
    if (winner === "X") return "text-game-accent-light";
    if (winner === "O") return "text-game-secondary-light";
    return "text-white/60";
  };

  return (
    <div className="p-4 border rounded-lg bg-game-dark border-white/10">
      <h2 className="flex items-center gap-2 mb-3 text-lg font-semibold text-white/90">
        <History className="w-5 h-5 text-game-accent-light" />
        Game History
      </h2>

      <div className="pr-1 space-y-2 overflow-y-auto max-h-60">
        {history.length === 0 ? (
          <p className="text-sm italic text-white/50">No games played yet</p>
        ) : (
          [...history].reverse().map((game, index) => (
            <div
              key={index}
              className="p-2 text-sm border rounded bg-game-dark-secondary border-white/10"
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`font-medium ${getResultColorClass(game.winner)}`}
                >
                  {getResultText(game.winner)}
                </span>
                <span className="flex items-center gap-1 text-white/50">
                  <Clock className="w-3 h-3" />
                  {formatDate(game.date)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameHistory;
