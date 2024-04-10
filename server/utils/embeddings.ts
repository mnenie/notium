export const vectorLength = (vector: number[]): number => {
  return Math.sqrt(vector.reduce((acc, val) => acc + val ** 2, 0));
};

export const dotProduct = (vector1: number[], vector2: number[]): number => {
  return vector1.reduce((acc, val, index) => acc + val * vector2[index], 0);
};

export const cosineDistance = (vector1: number[], vector2: number[]): number => {
  const dot = dotProduct(vector1, vector2);
  const length1 = vectorLength(vector1);
  const length2 = vectorLength(vector2);
  return 1 - dot / (length1 * length2);
};
