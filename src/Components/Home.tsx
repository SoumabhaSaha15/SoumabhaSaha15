import React from "react";
import { TabIndexes } from "../consts";
import { TypeAnimation } from 'react-type-animation';
const Home: React.FC = () => {
  return (
    <React.Fragment>
      <div className="hero bg-base-200 min-h-[100dvh]" id={TabIndexes[0]}>
        <div className="hero-content flex-col lg:flex-row">
          <figure className="hover-gallery max-w-72 rounded-2xl">
            <img src="picture (3).jpg" />
            <img src="picture (1).jpg" />
            <img src="picture (2).jpg" />
            <img src="picture (4).jpg" />
          </figure>
          <div>
            <h1 className="text-3xl font-normal animate-pulse">
              {<TypeAnimation
                sequence={[
                  'Hello I am Soumabha Saha.',
                  1000,
                  'Like to build apps in Node js.',
                  1000,
                  'Typescript is Love.',
                  1000,
                  'React is awesome.',
                  1000,
                  'CSS feels like a magic with Tailwind-CSS and Daisy-UI.',
                  1000
                ]}
                wrapper="span"
                speed={40}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />}
            </h1>
            <p className="py-6">
              Dedicated B.Tech student in Computer Science Engineering with strong academic performance and hands-on
              experience in full-stack development, programming, and databases. Eager to apply technical skills to innovative
              projects.
            </p>
            <button
              className="btn btn-accent"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'Resume.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;