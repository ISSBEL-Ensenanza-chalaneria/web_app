import { useEffect, useState } from "react";
import { getPageBySlug } from "../api/wordpress";

const Home = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    getPageBySlug("inicio").then(data => {
      const parsed = JSON.parse(data);
      setContent(parsed[0]?.content?.rendered || "No content");
    });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Inicio</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video"
        allowFullScreen
      />
    </div>
  );
};

export default Home;
