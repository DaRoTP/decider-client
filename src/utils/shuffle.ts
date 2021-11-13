export function shuffle<T>(list: T[]): T[] {
  let currentIndex = list.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [list[currentIndex], list[randomIndex]] = [
      list[randomIndex],
      list[currentIndex],
    ];
  }

  return list;
}
