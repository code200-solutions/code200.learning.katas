import { Frame, Game } from '../types/game.type';

export function score(game: Game) {
  return game.reduce(
    (score: number, frame: Frame, i, allFrames) =>
      score +
      sum(frame) +
      (isSpare(frame) ? spareBonus(frame, i, allFrames) : 0),
    0,
  );
}

function sum(array: number[]): number {
  return array?.reduce((sum, n) => sum + n, 0) ?? 0;
}

function isSpare(frame: Frame): boolean {
  return sum(frame) === 10 && frame?.[0] !== 10;
}

function spareBonus(frame: Frame, frameIndex: number, game: Game): number {
  if (game == undefined) return 0; // undefined or null
  if (!isSpare(frame)) return 0;

  const nextFrame = game[frameIndex + 1]; // if frameIndex is the last frame, nextFrame will be undefined
  return nextFrame?.[0] ?? 0;
}
