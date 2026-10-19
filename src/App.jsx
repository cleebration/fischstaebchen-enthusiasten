import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Verein from "./pages/Verein.jsx";
import Gruppen from "./pages/Gruppen.jsx";
import Aktionen from "./pages/Aktionen.jsx";
import Aufnahmetest from "./pages/Aufnahmetest.jsx";
import Beilagen from "./pages/Beilagen.jsx";
import Videos from "./pages/Videos.jsx";
import Mitmachen from "./pages/Mitmachen.jsx";
import Newsletter from "./pages/Newsletter.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Rechtliches from "./pages/Rechtliches.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verein" element={<Verein />} />
        <Route path="/gruppen" element={<Gruppen />} />
        <Route path="/aktionen" element={<Aktionen />} />
        <Route path="/aufnahmetest" element={<Aufnahmetest />} />
        <Route path="/beilagen" element={<Beilagen />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/mitmachen" element={<Mitmachen />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/rechtliches" element={<Rechtliches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
