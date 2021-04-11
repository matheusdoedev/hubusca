export function parseDateInFormat(date: Date | string): string {
  if (typeof date === "string") {
    return `${
      new Date(date).getDate() < 10
        ? `0${new Date(date).getDate()}`
        : new Date(date).getDate()
    }/${
      new Date(date).getMonth() + 1 < 10
        ? `0${new Date(date).getMonth() + 1}`
        : new Date(date).getMonth() + 1
    }/${new Date(date).getFullYear()}`;
  }

  return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }/${date.getFullYear()}`;
}
