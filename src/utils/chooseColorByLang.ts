export function chooseColorByLang(lang: string): string {
  switch (lang) {
    case "JavaScript":
      return `#f1e05a`;
    case "HTML":
      return `#E34F26`;
    case "TypeScript":
      return `#3178C6`;
    case "CSS":
      return `#1572B6`;
    case "C":
      return `#A8B9CC`;
    case "C++":
      return `#00599C`;
    case "SCSS":
      return `#CC6699`;
    case "Python":
      return `#3776AB`;
    case "Java":
      return `#007396`;
    case "Ruby":
      return `#CC342D`;
    case "C#":
      return `#239120`;
    case "Vue":
      return `#4FC08D`;
    case "Shell":
      return `#89e051`;
  }
}
