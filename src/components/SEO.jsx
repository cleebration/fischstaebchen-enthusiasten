import { useEffect } from "react";
import { site } from "../data.js";

export default function SEO({ title }) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.short}` : site.name;
  }, [title]);
  return null;
}
