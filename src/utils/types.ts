export enum Pairs {
  BTCUSDT = 'BTCUSDT',
  ETHUSDT = 'ETHUSDT',
  BNBUSDT = 'BNBUSDT',
}

export type HistoryType = {
  id: number;
  toPair: Pairs;
  fromPair: Pairs;
  lastUpdateTime: Date;
};

export interface IDepth {
  e: string;
  E: number;
  s: string;
  U: number;
  u: number;
  b: string[][];
  a: string[][];
}
