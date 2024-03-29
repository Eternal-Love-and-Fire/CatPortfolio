import StickyBox from "react-sticky-box";

import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact, IoLogoVue } from "react-icons/io5";
import { MdPhp } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";

export const About = () => {
  return (
    <div className="p-0 sm:p-4 pt-2 flex flex-wrap items-start">
      <article className="min-w-80 mx-6 flex-1 flex flex-col items-center gap-4">
        <h3>Experience:</h3>
        <ul className="self-start flex flex-col gap-4">
          <li>
            <h4 className="mb-2 font-bold tracking-widest text-xl">1.IT:</h4>
            <ul className="pl-8 py-2 flex flex-col gap-3 list-disc">
              <li className="p-2 border border-white rounded-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold">Front-End Dev</h3>
                  <div className="flex gap-2 justify-between">
                    <p>Cool Orca</p>
                    <p>May 2023 - March 2023, Ivano-Frankivsk</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2">
                    <p>
                      • I specialize in crafting pixel-perfect frontend
                      experiences that seamlessly blend innovation and
                      functionality, navigating design trends with precision and
                      creativity.
                    </p>

                    <p>
                      • As a frontend maestro, I excel in creating user-centric
                      interfaces that captivate and inspire, collaborating
                      seamlessly with design and backend teams to ensure
                      delightful digital journeys.
                    </p>

                    <p>
                      • My expertise lies in pushing frontend boundaries, from
                      crafting responsive layouts to optimizing performance for
                      lightning-fast experiences, all while embracing new
                      challenges and shaping memorable digital landscapes.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="mb-2 font-bold tracking-widest text-xl">
              1.Non-It:
            </h4>
            <ul className="pl-8 py-2 flex flex-col gap-3 list-disc">
              <li className="p-2 border border-white rounded-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold">Math Tutor</h3>
                  <div className="flex gap-2 justify-between">
                    <p>Buki.com</p>
                    <p>January 2021 - October 2023, Ivano-Frankivsk</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2">
                    <p>
                      • Strengthened communication skills and assumed
                      responsibility for diverse learning styles, refining the
                      ability to effectively convey complex concepts.
                    </p>
                    <p>
                      • Adapted teaching strategies through a continual learning
                      process, fostering an environment of professional growth
                      and collaboration with peers.
                    </p>
                    <p>
                      • Implemented creative teaching methods and educational
                      tools to enhance the learning experience, fostering a more
                      engaging and effective tutoring environmen
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-2 border border-white rounded-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold">Sales Manager</h3>
                  <div className="flex gap-2 justify-between">
                    <p>Krynta</p>
                    <p>January 2019 - December 2019, Ivano-Frankivsk</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2">
                    <p>
                      • Enhanced soft skills vital for the role by excelling in
                      high-pressure situations, showcasing unparalleled stress
                      resilience.
                    </p>
                    <p>
                      • Cultivated enduring client relationships through the
                      embodiment of patience in interactions, establishing a
                      hallmark of reliability.
                    </p>
                    <p>
                      • Facilitated a positive team and client environment by
                      prioritizing effective communication as a central tenet.
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-2 border border-white rounded-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold">Accountant</h3>
                  <div className="flex gap-2 justify-between">
                    <p>MHP Perspective</p>
                    <p>August 2023 - March 2024, Ivano-Frankivsk</p>
                  </div>
                  <div className="p-2 flex flex-col gap-2">
                    <p>
                      • Navigated the numerical landscapes with precision,
                      turning financial complexities into strategic assets,
                      enhancing the fiscal integrity and growth of MHP
                      Perspective.
                    </p>
                    <p>
                      • Cultured a rapport of trust and meticulous accuracy,
                      becoming the cornerstone of financial decision-making
                      through unparalleled analytical excellence.
                    </p>
                    <p>
                      • Championed collaborative synergy and innovative
                      problem-solving, elevating the finance department's role
                      as strategic partners in the company's journey towards
                      fiscal resilience and prosperity.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </article>
      <StickyBox
        className="sticky-container flex-[2_2_0%] flex flex-wrap"
        style={{ minWidth: "200px", top: "50px" }}
        offsetBottom={20}
        offsetTop={20}
      >
        <article className="mx-6 flex-1 flex flex-col items-center gap-4">
          <h3>Education & Coursework:</h3>
          <ul className="self-start flex flex-col gap-4 list-disc">
            <li>
              <h4 className="mb-2 font-bold tracking-widest text-xl">
                Kottans
              </h4>
            </li>
            <li>
              <h4 className="mb-2 font-bold tracking-widest text-xl">
                Full stack open
              </h4>
            </li>
            <li>
              <h4 className="mb-2 font-bold tracking-widest text-xl">
                Laracasts
              </h4>
            </li>
            <li>
              <h4 className="mb-2 font-bold tracking-widest text-xl">
                Other(Youtube: FrontendMasters, Ulbi, Codeholic etc)
              </h4>
            </li>
          </ul>
        </article>
        <article className="mx-6 flex-1 flex flex-col items-center gap-4">
          <h3>Skills:</h3>
          <ul className="self-start flex gap-4 flex-wrap text-5xl">
            <li>
              <IoLogoJavascript className="p-2 hover:opacity-50 duration-300 border border-white rounded-full" />
            </li>
            <li>
              <IoLogoReact className="p-2 hover:opacity-50 duration-300 border border-white rounded-full" />
            </li>
            <li>
              <MdPhp className="p-2 hover:opacity-50 duration-300 border border-white rounded-full" />
            </li>
            <li>
              <FaLaravel className="p-2 hover:opacity-50 duration-300 border border-white rounded-full" />
            </li>
            <li>
              <GrMysql className="p-2 hover:opacity-50 duration-300 border border-white rounded-full" />
            </li>
            <li>
              <IoLogoVue className="p-2 hover:opacity-50 duration-300 border border-white rounded-full" />
            </li>
            <li>
              <SiTailwindcss className="p-2 hover:opacity-50 duration-300 border border-white rounded-full" />
            </li>
          </ul>
        </article>
      </StickyBox>
    </div>
  );
};
