import { Game } from '../types/game.type';

export type TestData = { scores: Game; expectedScore: number };
export type TestDataMap = Record<string, TestData>;
