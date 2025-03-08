import React from "react";
import { Trophy, User, Users } from "lucide-react";

interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
    draws: number;
  };
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores }) => {
  return (
    <div className="bg-game-dark p-4 rounded-lg border border-white/10">
      <h2 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-game-accent-light" />
        Score Board
      </h2>

      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 bg-game-accent/20 rounded border border-game-accent/30">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-game-accent-light" />
            <span className="font-medium text-white/80">Player X</span>
          </div>
          <span className="text-lg font-bold text-game-accent-light">
            {scores.X}
          </span>
        </div>

        <div className="flex justify-between items-center p-2 bg-game-secondary/20 rounded border border-game-secondary/30">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-game-secondary-light" />
            <span className="font-medium text-white/80">Player O</span>
          </div>
          <span className="text-lg font-bold text-game-secondary-light">
            {scores.O}
          </span>
        </div>

        <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-white/60" />
            <span className="font-medium text-white/80">Draws</span>
          </div>
          <span className="text-lg font-bold text-white/60">
            {scores.draws}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
