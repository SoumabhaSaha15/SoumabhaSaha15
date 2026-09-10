import { type FC } from "react";
import { TabIndexes } from "@/utils";
import { HiDownload } from "react-icons/hi";
import { useRipple } from "use-ripple-hook";

const Home: FC = () => {
  const [ripple, event] = useRipple({ duration: 200, timingFunction: 'ease-in-out', color: "currentColor" });
  return (
    <>
      <div className="h-0" id={TabIndexes[0]}></div>
      <div className="hero min-h-dvh scroll-smooth transition-transform snap-y snap-mandatory" id={TabIndexes[0] + "content"}>
        <div className="hero-content flex-col lg:flex-row">
          <figure className="hover-gallery max-w-60 sm:max-w-72 rounded-2xl">
            <img src="./myImages/picture (3).png" alt="3rd pic" />
            <img src="./myImages/picture (1).png" alt="1st pic" />
            <img src="./myImages/picture (2).png" alt="2nd pic" />
            <img src="./myImages/picture (4).png" alt="4th pic" />
          </figure>
          <div>
            <span className="text-rotate text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-loose w-full">
              <span className="justify-items-center">
                <span>Hi, I'm Soumabha Saha,</span>
                <span>a fullstack web developer.</span>
                <span>an app developer.</span>
              </span>
            </span>
            <p className="py-6">
              Results-driven CSE graduate with hands-on experience in full-stack web development, modern frontend frameworks, and robust backend architectures. Proficient in React 19, TypeScript, Django REST Framework, Node.js, and .NET Core. Demonstrates a strong foundation in software design, database management, and asynchronous state orchestration. Experienced in developing scalable, decoupled web applications and enterprise services.
            </p>
            <div className="hover:aura text-accent rounded-full inline-block">
              <button
                type="button"
                className="btn btn-primary hover:btn-secondary rounded-full"
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
                <HiDownload size={20} /> Get resume
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Home;