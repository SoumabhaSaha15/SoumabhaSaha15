import React from "react";
const Home: React.FC = () => {
  return (
    <React.Fragment>
      <div className="hero bg-base-200 min-h-[calc(100dvh-65px)]" id="Home">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="hover-gallery max-w-72 rounded-2xl">
            <img src="picture (3).jpg" />
            <img src="picture (1).jpg" />
            <img src="picture (2).jpg" />
            <img src="picture (4).jpg" />
          </figure>
          <div>
            <h1 className="text-5xl font-bold">Soumabha Saha</h1>
            <p className="py-6">
              Dedicated B.Tech student in Computer Science Engineering with strong academic performance and hands-on
              experience in full-stack development, programming, and databases. Eager to apply technical skills to innovative
              projects.
            </p>
            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;