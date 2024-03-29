import { Link } from "react-router-dom";

export const Resume = () => {
  return (
    <div className="bg-black text-white min-h-screen py-10">
      <Link
        to="/CatPortfolio/"
        className="p-2 px-8 mr-8 absolute bg-black border-2 border-white hover:opacity-50 duration-300 top-25px right-0 rounded-full font-bold"
      >
        Back to Home
      </Link>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Yevgen Kotyk</h1>
        <p className="text-xl mb-4">
          Ivano-Frankivs'k, Ivano-Frankivsk, Ukraine
        </p>
        <p className="text-xl mb-4">evhenisssss@gmail.com</p>
        <p className="text-xl mb-4">+380977472982</p>
        <p className="text-xl mb-4">
          <a
            href="https://www.linkedin.com/in/yevgen-kotyk-124012179/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">SUMMARY</h2>
          <p className="text-lg mb-4">
            Hard-working, creative, and proactive web developer with expertise
            in React, PHP, and Laravel. Ambitious, self-learning, and constantly
            developing new skills. Dedicated to growth and evolution in the
            programming field.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Math Tutor</h3>
            <p className="text-lg mb-2">Buki.com</p>
            <p className="text-lg mb-2">
              January 2021 - October 2023, Ivano-Frankivsk
            </p>
            <ul className="list-disc ml-6">
              <li>
                Strengthened communication skills and assumed responsibility for
                diverse learning styles, refining the ability to effectively
                convey complex concepts.
              </li>
              <li>
                Adapted teaching strategies through a continual learning
                process, fostering an environment of professional growth and
                collaboration with peers.
              </li>
              <li>
                Implemented creative teaching methods and educational tools to
                enhance the learning experience, fostering a more engaging and
                effective tutoring environment.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Sales Manager</h3>
            <p className="text-lg mb-2">Krynta</p>
            <p className="text-lg mb-2">
              January 2019 - December 2019, Ivano-Frankivsk
            </p>
            <ul className="list-disc ml-6">
              <li>
                Enhanced soft skills vital for the role by excelling in
                high-pressure situations, showcasing unparalleled stress
                resilience.
              </li>
              <li>
                Cultivated enduring client relationships through the embodiment
                of patience in interactions, establishing a hallmark of
                reliability.
              </li>
              <li>
                Facilitated a positive team and client environment by
                prioritizing effective communication as a central tenet.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Front-End Dev</h3>
            <p className="text-lg mb-2">Cool Orca</p>
            <p className="text-lg mb-2">
              May 2023 - March 2023, Ivano-Frankivsk
            </p>
            <ul className="list-disc ml-6">
              <li>
                I specialize in crafting pixel-perfect frontend experiences that
                seamlessly blend innovation and functionality, navigating design
                trends with precision and creativity.
              </li>
              <li>
                As a frontend maestro, I excel in creating user-centric
                interfaces that captivate and inspire, collaborating seamlessly
                with design and backend teams to ensure delightful digital
                journeys.
              </li>
              <li>
                My expertise lies in pushing frontend boundaries, from crafting
                responsive layouts to optimizing performance for lightning-fast
                experiences, all while embracing new challenges and shaping
                memorable digital landscapes.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Accountant</h3>
            <p className="text-lg mb-2">MHP Perspective</p>
            <p className="text-lg mb-2">
              August 2023 - March 2024, Ivano-Frankivsk
            </p>
            <ul className="list-disc ml-6">
              <li>
                Navigated the numerical landscapes with precision, turning
                financial complexities into strategic assets, enhancing the
                fiscal integrity and growth of MHP Perspective.
              </li>
              <li>
                Cultured a rapport of trust and meticulous accuracy, becoming
                the cornerstone of financial decision-making through
                unparalleled analytical excellence.
              </li>
              <li>
                Championed collaborative synergy and innovative problem-solving,
                elevating the finance department's role as strategic partners in
                the company's journey towards fiscal resilience and prosperity.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
          <p className="text-lg mb-2">Bachelor of Computer Science</p>
          <p className="text-lg mb-2">IFNTUOG • Ivano-Frankivsk • 2018-2022</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">COURSEWORK</h2>
          <p className="text-lg mb-2">Laracasts</p>
          <p className="text-lg mb-2">
            Online • 2023-2024 • PHP, Laravel, design patterns, OOP and others
          </p>
          <br />
          <p className="text-lg mb-2">Kottans</p>
          <p className="text-lg mb-2">
            Online • 2022 • HTML,JS,CSS, GIT and others
          </p>
          <br />

          <p className="text-lg mb-2">Full stack open</p>
          <p className="text-lg mb-2">
            Online • 2023-2024 • React,NodeJS,TS and others
          </p>
          <br />
          <p className="text-lg mb-2">Youtube Chanels</p>
          <p className="text-lg mb-2">A lot</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
          <ul className="list-disc ml-6">
            <li>HTML: Pixel-perfect, semantic HTML</li>
            <li>CSS: SCSS, Tailwind</li>
            <li>JavaScript: ES5, ES6+</li>
            <li>React: Redux, Redux Toolkit & Thunk</li>
            <li>PHP: Proficient in PHP</li>
            <li>Laravel: Knowledgeable in Laravel</li>
            <li>TypeScript</li>
            <li>Git(github)</li>
            <li>
              Knowledge of: OOP/SOLID, clean code principles, design patterns
            </li>
            <li>
              Familiar with: Material UI, REST API, Axios, NextJS, MongoDB
              (Mongoose), Node.js
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
