"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectShowCase = ({ link, title, description, index }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
    };
  }, []);

  const handleWidthChange = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "5rem",
        flexDirection:
          width > 721 ? (index % 2 === 1 ? "row-reverse" : "row") : "column",
      }}
    >
      <div
        style={{
          width: width < 720 ? "100%" : "50%",
          padding:
            index % 2 === 1 ? "1rem 1rem 1rem 2rem" : "1rem 2rem 1rem 1rem",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }} class="new-projects">
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
          width: width < 720 ? "100%" : "50%",
          borderRadius: "1.3rem",
          border: "2px solid black",
          overflow: "hidden",
        }}
      >
        <iframe
          onClick={() => router.push(link, "_blank")}
          style={{ height: "100%", minHeight: "400px", width: "100%" }}
          src={link}
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectShowCase;
