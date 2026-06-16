import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App.jsx";
import { posts } from "../data.js";
import { postSlug } from "../lib/rss.js";

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

const routes = [
  "/",
  "/verein",
  "/gruppen",
  "/aktionen",
  "/aufnahmetest",
  "/beilagen",
  "/videos",
  "/mitmachen",
  "/blog",
  "/rechtliches",
  "/diese-seite-gibt-es-nicht",
];

describe("Routing-Smoke-Test", () => {
  it.each(routes)("rendert %s ohne Absturz und mit Überschrift", (path) => {
    renderAt(path);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });

  it("rendert eine einzelne Blog-Seite", () => {
    const slug = postSlug(posts[0]);
    renderAt(`/blog/${slug}`);
    expect(screen.getByText(posts[0].title)).toBeInTheDocument();
  });

  it("zeigt überall den Haftungsausschluss im Footer", () => {
    renderAt("/");
    expect(
      screen.getAllByText(/keine.*Verbindung|unabhängig|nicht.*iglo/i).length
    ).toBeGreaterThan(0);
  });
});

describe("Aufnahmetest-Interaktion", () => {
  it("klickt sich durch alle Fragen und zeigt ein Ergebnis", async () => {
    const user = userEvent.setup();
    renderAt("/aufnahmetest");

    // Erste Frage sichtbar
    expect(screen.getByText(/Frage 1 \//)).toBeInTheDocument();

    // Sechs Fragen → jeweils erste Option klicken
    for (let i = 0; i < 6; i++) {
      const card = screen.getByText(/Frage \d+ \/|Auswertung/).closest("div");
      const buttons = within(card.parentElement).getAllByRole("button");
      await user.click(buttons[0]);
    }

    // Ergebnis erscheint
    expect(screen.getByText(/Auswertung/)).toBeInTheDocument();
    expect(screen.getByText(/Hingabe-Punkten/)).toBeInTheDocument();
  });
});
