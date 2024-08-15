import { Game } from './types/game.type';
import * as v1 from './v1/score';

export default {
  v1: v1.score,
} as Record<string, (game: any | Game) => number>;
