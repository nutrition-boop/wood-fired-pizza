/**
 * Pizza Dough Calculation Logic
 * All calculations use Baker's Percentage (ingredients as % of flour weight)
 */

export interface DoughResult {
  totalFlour: number;
  totalWater: number;
  totalSalt: number;
  totalYeast: number;
  totalOil: number;
  totalSugar: number;
  totalWeight: number;
  preferment?: {
    type: 'poolish' | 'biga';
    flour: number;
    water: number;
    yeast: number;
  };
  finalMix?: {
    flour: number;
    water: number;
    salt: number;
    yeast: number;
    oil: number;
    sugar: number;
  };
}

export const calculateDough = (
  ballCount: number,
  ballWeight: number,
  hydration: number,
  saltPercent: number,
  yeastPercent: number,
  oilPercent: number = 0,
  sugarPercent: number = 0,
  wastePercent: number = 2, // 2% default bowl residue
  preferment?: {
    type: 'poolish' | 'biga';
    flourPercent: number; // % of total flour used in preferment
    hydration: number; // poolish is 100%, biga is usually 45-50%
  }
): DoughResult => {
  // 1. Calculate total weight needed with waste factor
  const targetWeight = ballCount * ballWeight;
  const totalWeight = targetWeight * (1 + wastePercent / 100);

  // 2. Calculate total flour weight
  // formula: TotalWeight = Flour + (Flour * Hydration%) + (Flour * Salt%) + ...
  // Flour = TotalWeight / (1 + Hydration% + Salt% + Yeast% + Oil% + Sugar%)
  const sumPercents = (hydration + saltPercent + yeastPercent + oilPercent + sugarPercent) / 100;
  const totalFlour = Math.round(totalWeight / (1 + sumPercents));

  // 3. Calculate absolute amounts
  const totalWater = Math.round(totalFlour * (hydration / 100));
  const totalSalt = Number((totalFlour * (saltPercent / 100)).toFixed(1));
  const totalYeast = Number((totalFlour * (yeastPercent / 100)).toFixed(2));
  const totalOil = Math.round(totalFlour * (oilPercent / 100));
  const totalSugar = Math.round(totalFlour * (sugarPercent / 100));

  let result: DoughResult = {
    totalFlour,
    totalWater,
    totalSalt,
    totalYeast,
    totalOil,
    totalSugar,
    totalWeight: Math.round(totalWeight),
  };

  // 4. Handle Preferments
  if (preferment) {
    const prefFlour = Math.round(totalFlour * (preferment.flourPercent / 100));
    const prefWater = Math.round(prefFlour * (preferment.hydration / 100));
    
    // In poolish/biga, most or all yeast often goes into the preferment
    // For simplicity in this calculator, we put all yeast in preferment
    const prefYeast = totalYeast;

    result.preferment = {
      type: preferment.type,
      flour: prefFlour,
      water: prefWater,
      yeast: prefYeast,
    };

    result.finalMix = {
      flour: totalFlour - prefFlour,
      water: totalWater - prefWater,
      salt: totalSalt,
      yeast: 0, // all yeast was in preferment
      oil: totalOil,
      sugar: totalSugar,
    };
  }

  return result;
};

export const getYeastByTemp = (
  timeHours: number,
  tempCelsius: number,
  yeastType: 'IDY' | 'ADY' | 'Fresh'
): number => {
  // Basic model for yeast quantity based on time and temp
  // Based on pizza making community models (e.g. TXCraig1's model)
  // This is a simplified version: yeast = factor / (temp * time)
  let baseFactor = 40; // baseline for IDY
  if (yeastType === 'ADY') baseFactor = 55;
  if (yeastType === 'Fresh') baseFactor = 120;

  // Temperature weight (exponential growth)
  const tempFactor = Math.pow(1.1, tempCelsius - 20);
  
  // Percent calculation
  const percent = baseFactor / (timeHours * tempFactor * 10);
  return Number(Math.max(0.01, percent).toFixed(3));
};
