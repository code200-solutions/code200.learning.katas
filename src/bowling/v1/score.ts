import { Frame, Game } from '../types/game.type';

export function score(game: Game) {
 
  for(const frame of game) {
  const frameScore = sum(frame);
  if (frame.length !==3 && frameScore>10) {
    return -1
  }
 }

  return game.reduce(
    (score: number, frame: Frame, i, allFrames) =>
      score +
      sum(frame) +
      (isSpare(frame) || isStrike(frame) ? bonus(frame, i, allFrames) : 0),
    0,
  );
}

function sum(array: number[]): number {
  return array?.reduce((sum, n) => sum + n, 0) ?? 0;
}

function isSpare(frame: Frame): boolean {
  return sum(frame) === 10 && frame?.[0] !== 10;
}

function isStrike(frame: Frame): boolean {
  return frame?.[0] === 10;
}

function islastFrame (frame: Frame): boolean {
  return frame?.length === 3;
}

function bonus(frame: Frame, frameIndex: number, game: Game): number {
  if (game == undefined) return 0; // undefined or null
  if (!isStrike(frame) && !isSpare(frame)) return 0;

  const nextFrame = game[frameIndex + 1];
  const afterNextFrame = game[frameIndex + 2];

  if (isSpare(frame)) return nextFrame?.[0] ?? 0;
  if (islastFrame(nextFrame)) return nextFrame[0] + nextFrame[1];
  return sum(nextFrame) + (isStrike(nextFrame) ? afterNextFrame?.[0] ?? 0 : 0);
}
