import './about.css'
import Image from 'next/image';
export default function About() {
  return (
    <section id='about' className="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <Image
              src="/working-emoji.png"
              alt="emoji"
              class="work-emoji"
            />
            <Image
              src="/about-img.webp"
              alt="mee"
              class="img-side__main-img"
            />
            <span>
              <Image
                src="/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                alt="text"
              />
            </span>
          </div>
          <div class="text-side">
            <h3>About me</h3>
            <h4>
              Front-end Developer <br /> based in Ramdhuni, Nepal 📍
            </h4>
            <p>
              Hey, my name is Gaurav, and I&apos;m a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
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
