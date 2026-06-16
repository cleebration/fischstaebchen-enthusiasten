// Vitest-Setup: erweitert expect um jest-dom-Matcher (toBeInTheDocument etc.).
import "@testing-library/jest-dom/vitest";

// jsdom implementiert window.scrollTo nicht – stummschalten für ScrollToTop.
window.scrollTo = () => {};

