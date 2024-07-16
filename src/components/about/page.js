import "./about.css";
import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <Image
              src="/working-emoji.png"
              alt="emoji"
              className="work-emoji"
              width={60}
              height={60}
            />
            <Image
              src="/about-img.avif"
              alt="mee"
              className="img-side__main-img"
              width={200}
              height={500}
            />
            <span>
              <Image
                src="/web_developer_text.svg"
                alt="text"
                width={200}
                height={190}
              />
            </span>
          </div>
          <div className="text-side">
            <h3>About me</h3>
            <h4>
              Front-end Developer <br /> based in Ramdhuni, Nepal 📍
            </h4>
            <p>
              Hey, my name is Gaurav, and I&apos;m a Frontend Developer. My
              passion is to create and develop a clean UI/UX for my users.
              <br />
              <br />
              My main stack currently is React/Next.js in combination with
              Tailwind CSS and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
