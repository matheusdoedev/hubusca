export function smoothScroll(href: string) {
  const resultadoSection = document.getElementById(href);

  if (!resultadoSection) {
    console.error("Element do not exist");
  }

  resultadoSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
