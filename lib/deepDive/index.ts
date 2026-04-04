import { healingDeepDive } from './healing';
import { fatLossDeepDive } from './fatLoss';
import { performanceDeepDive } from './performance';
import { antiAgingCognitiveLooksDeepDive } from './antiAgingCognitiveLooks';
import { supplyDeepDive } from './supply';
import type { DeepDiveMap } from './types';

export const allDeepDives: DeepDiveMap = {
  ...healingDeepDive,
  ...fatLossDeepDive,
  ...performanceDeepDive,
  ...antiAgingCognitiveLooksDeepDive,
  ...supplyDeepDive,
};

export function getDeepDive(slug: string) {
  return allDeepDives[slug] ?? null;
}

export type { DeepDive, DeepDiveMap } from './types';
