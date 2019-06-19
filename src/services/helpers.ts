// USE _
export const randomInteger = (min: number, max: number): number => {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }