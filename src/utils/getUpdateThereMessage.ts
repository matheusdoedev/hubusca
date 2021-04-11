export function getUpdateThereMessage(daysCount: number): string {
  if (daysCount === 0) {
    return "Atualizado hoje";
  } else if (daysCount === 1) {
    return "Atualizado há 1 dia";
  } else if (daysCount > 1 && daysCount <= 30) {
    return `Atualizado há ${daysCount} dias`;
  } else if (daysCount > 30 && daysCount <= 60) {
    return `Atualizado há 1 mês`;
  } else {
    return `Atualizado há ${Math.round(daysCount / 30)} meses`;
  }
}
