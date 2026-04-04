export type SideEffectEntry = {
  name: string;
  description: string;
  severity: 'low' | 'moderate' | 'high';
};

export type StudyEntry = {
  citation: string;
  finding: string;
};

export type DeepDive = {
  mechanismTitle: string;
  mechanismBody: string;
  researchTitle: string;
  researchBody: string;
  studies: StudyEntry[];
  sideEffects: SideEffectEntry[];
  buyersGuideTitle: string;
  buyersGuideBody: string;
  vsAlternativesTitle?: string;
  vsAlternativesBody?: string;
};

export type DeepDiveMap = Record<string, DeepDive>;
