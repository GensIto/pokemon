import { SPRITE_PAIRS } from "./constants";

export const getImageURL = (obj: { [key: string]: string | null }) => {
  const validPairs = SPRITE_PAIRS.filter(
    ([front, back]) => obj[front] !== null && obj[back] !== null
  );

  const [randomFrontKey, randomBackKey] =
    validPairs[Math.floor(Math.random() * validPairs.length)] || [];

  const frontUrl = obj[randomFrontKey];
  const backUrl = obj[randomBackKey];
  return { frontUrl, backUrl };
};
