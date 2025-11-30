import { type FC } from "react";
import { TabIndexes } from "../utils";
import useRipple from "use-ripple-hook";
import { HiDownload } from "react-icons/hi";

const Home: FC = () => {
  const [ripple, event] = useRipple({ duration: 200, timingFunction: 'linear' });
  return (
    <>
      <div className="h-0" id={TabIndexes[0]}></div>
      <div className="hero min-h-dvh scroll-smooth transition-all snap-y snap-mandatory" id={TabIndexes[0]+"content"}>
        <div className="hero-content flex-col lg:flex-row">
          <figure className="hover-gallery max-w-60 sm:max-w-72 rounded-2xl">
            <img src="./myImages/picture (3).png" />
            <img src="./myImages/picture (1).png" />
            <img src="./myImages/picture (2).png" />
            <img src="./myImages/picture (4).png" />
          </figure>
          <div>
            <span className="text-rotate text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-loose w-full duration-12000">
              <span className="justify-items-center">
                <span>Hi, I'm Soumabha Saha,</span>
                <span>a fullstack developer.</span>
                <span>a UI/UX designer.</span>
                <span>an app developer.</span>
              </span>
            </span>
            <p className="py-6">
              Dedicated B.Tech student in Computer Science Engineering with strong academic performance and hands-on
              experience in full-stack development, programming, and databases. Eager to apply technical skills to innovative
              projects.
            </p>
            <button
              className="btn btn-accent hover:btn-primary rounded-full"
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
              <HiDownload size={20} />Get resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;