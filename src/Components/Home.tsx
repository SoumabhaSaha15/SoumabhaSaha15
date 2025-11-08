import React from "react";
import useRipple from "use-ripple-hook";
import { TabIndexes } from "../utils";
import { TypeAnimation } from 'react-type-animation';
const Home: React.FC = () => {
  const [ripple, event] = useRipple({duration:200,timingFunction:'linear'});
  return (
    <React.Fragment>
      <div className="hero bg-base-200 min-h-[100dvh] scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[0]}>
        <div className="hero-content flex-col lg:flex-row">
          <figure className="hover-gallery max-w-60 sm:max-w-72 rounded-2xl">
            <img src="./myImages/picture (3).png" />
            <img src="./myImages/picture (1).png" />
            <img src="./myImages/picture (2).png" />
            <img src="./myImages/picture (4).png" />
          </figure>
          <div>
            <h1 className="text-4xl font-normal animate-pulse">
              {"Hi, I'm Soumabha Saha,"}
              <br />
              {<TypeAnimation
                sequence={[
                  "a fullstack dev.",
                  2000,
                  "a UI/UX designer.",
                  2000,
                  "an app developer.",
                  2000,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: 'inherit', display: 'inline-block', color: "var(--color-primary)" }}
                repeat={Infinity}
                preRenderFirstString={true}
              />}
            </h1>
            <p className="py-6">
              Dedicated B.Tech student in Computer Science Engineering with strong academic performance and hands-on
              experience in full-stack development, programming, and databases. Eager to apply technical skills to innovative
              projects.
            </p>
            <button
              className="btn btn-accent hover:btn-primary"
              ref={ripple}
              onPointerDown={event}
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'Resume.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download resume
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;