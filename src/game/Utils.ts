export function throwDice() {
  return [
    getRandomInt(1, 7),
    getRandomInt(1, 7),
  ];
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min)
}
