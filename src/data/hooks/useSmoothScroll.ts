import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    // getting all anchors pointing href to internal sections
    const links = document.querySelectorAll("[data-smooth-scroll]");

    const scrollToSection = (event) => {
      const href = event.currentTarget.dataset.smoothScroll;

      if (href) {
        event.preventDefault();

        const section = document.getElementById(href);

        // changing the anchor behavior to scroll smooth into view
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // adding onclick event for each link that will active to scrollToSection funtion on click
    links.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  });
}
