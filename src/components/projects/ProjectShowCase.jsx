"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./ProjectShowCase.css";

const ProjectShowCase = ({ link, title, description, index }) => {
  const router = useRouter();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWidthChange = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidthChange);
    return () => window.removeEventListener("resize", handleWidthChange);
  }, []);

  const flexDirection =
    width > 721 ? (index % 2 === 1 ? "row-reverse" : "row") : "column";
  const padding =
    index % 2 === 1 ? "1rem 1rem 1rem 2rem" : "1rem 2rem 1rem 1rem";
  const iframeWidth = width < 720 ? "100%" : "50%";

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "5rem",
        flexDirection,
      }}
    >
      <div
        style={{
          width: iframeWidth,
          padding,
        }}
      >
        <h2 style={{ marginBottom: "1rem" }} className="new-projects">
          <a
            style={{
              textDecorationStyle: "wavy",
              textDecorationColor: "#147efb",
              color: "black",
            }}
            target="_blank"
            href={link}
          >
            {title}
          </a>
        </h2>
        {description.map((text) => (
          <p
            key={text}
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              color: "#767676",
            }}
          >
            {text}
          </p>
        ))}
      </div>
      <div
        onClick={() => router.push(link, "_blank")}
        style={{
          cursor: "pointer",
          width: iframeWidth,
          borderRadius: "1.3rem",
          border: "2px solid black",
          overflow: "hidden",
        }}
      >
        <div className="iframe-container">
          <div className="iframe-desktop-view">
            <div className="iframe-content">
              <iframe
                style={{ height: "100%", minHeight: "400px", width: "100%" }}
                src={link}
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowCase;
