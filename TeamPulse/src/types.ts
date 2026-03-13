export type Mood = "great"|"good"|"okay"|"tired"|"stressed";

export type EnergyLevel = 1|2|3|4|5;

export interface CheckIn {
  id: string;
  name: string;
  mood: Mood;
  energy: EnergyLevel;
  comment?: string;
  timestamp: Date;
}

export interface DayStats {
  averageEnergy: number;
  moodDistribution: Record<Mood, number>;
  totalCheckIns: number;
}

