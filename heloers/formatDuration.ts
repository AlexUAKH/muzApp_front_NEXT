export const formatDuration = (value: number): string => {
  const minute:number = Math.floor(value / 60);
  const secondLeft:number = value - minute * 60;
  return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
}