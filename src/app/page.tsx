import Image from "next/image";
import Link from "next/link";
import EAFooter from "./components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ealibre from "@/app/assets/ealibre-mini.png";
import lootbox from "@/app/assets/lootbox-mini.png";

export default function Home() {
  return (
    <section className=" md:snap-y md:snap-mandatory md:overflow-y-scroll h-screen">
      <div className=" max-w-screen-lg m-auto">
        <article
          className=" h-[100vh] grid items-center text-center md:border-0 border-b-2 border-red-600 snap-center"
          id="top1"
        >
          <div>
            <h1 className="text-7xl text-red-600 my-4">Enrique A.</h1>
            <p className="text-xl">Yo, smite.</p>
          </div>
        </article>
        <article
          className=" h-screen grid text-center items-center md:border-0 border-b-2 border-red-600 snap-center"
          id="about"
        >
          <div>
            <h1 className="text-5xl md:text-7xl">
              About <span className="text-red-600">me</span>
            </h1>
            <div className="mt-8 grid grid-cols-3 text-lg items-center m-auto md:grid-cols-4">
              <div className="text-right mr-4 md:col-span-2">
                <p className="text-red-600">Fullname:</p>
                <p className="text-red-600">Birthdate:</p>
                <p className="text-red-600">Nationality:</p>
                <p className="text-red-600">Living:</p>
                <p className="text-red-600">Language:</p>
              </div>
              <div className=" col-span-2 text-left">
                <p>Enrique Alejandro Itriago Escorihuela</p>
                <p className="">October 27th, 1995</p>
                <p>Venezuelan</p>
                <p className="">Spain</p>
                <p>Spanish & English</p>
              </div>
            </div>
          </div>
        </article>
        <article
          className=" h-screen text-center grid items-center md:border-0 border-b-2 border-red-600 snap-center"
          id="projects"
        >
          <div>
            <h1 className="text-5xl md:text-7xl text-red-600 mb-12">
              Projects
            </h1>
            <div className="md:flex justify-center">
              <Link
                href={"https://lootbox-nextjs.vercel.app"}
                target="_blank"
                className="border-2 border-red-600 flex m-6 hover:scale-105 md:w-[40%] rounded-xl transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={lootbox}
                  alt="Lootbox Simulator"
                  width={256}
                  height={256}
                  className="rounded-xl"
                ></Image>
                <div className="m-auto">
                  <p>Lootbox Simulator</p>
                  <p className="text-red-600">Next.JS</p>
                  <p className=" text-xs">Feb 2024</p>
                </div>
              </Link>
              <Link
                href={"https://ealibre-ar.vercel.app"}
                target="_blank"
                className="border-2 border-red-600 flex m-6 hover:scale-105 md:w-[40%] rounded-xl transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={ealibre}
                  alt="EAlibre-AR"
                  width={256}
                  height={256}
                  className="rounded-xl"
                ></Image>
                <div className="m-auto">
                  <p>EAlibre-AR</p>
                  <p className="text-red-600">Next.JS</p>
                  <p className=" text-xs">Feb 2024</p>
                </div>
              </Link>
            </div>
            <Link
              href={"https://github.com/eaisdead"}
              target="_blank"
              className="bg-red-600 p-4 mt-8 w-24 inline-block rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              More
            </Link>
          </div>
        </article>
        <article
          className=" h-[75vh] grid items-center text-center md:border-0 snap-center"
          id="contact"
        >
          <div>
            <h1 className="text-5xl md:text-7xl">
              <span className="text-red-600">Contact</span> me at
            </h1>
            <div className="my-8">
              <a href="mailto:enriquealejandro2227@gmail.com" target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-125 hover:translate-y-4"
                ></FontAwesomeIcon>
              </a>
              <Link href={"https://github.com/eaisdead"} target="_blank">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl mx-8 hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-125 hover:translate-y-4"
                ></FontAwesomeIcon>
              </Link>
              <Link href={"https://github.com/eaisdead"} target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-2xl hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-125 hover:translate-y-4"
                ></FontAwesomeIcon>
              </Link>
              <Link href={"https://github.com/eaisdead"} target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl mx-8 hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-125 hover:translate-y-4"
                ></FontAwesomeIcon>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/enriquealejandro27/"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl hover:text-red-600 transition-all duration-300 ease-in-out hover:scale-125 hover:translate-y-3"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </div>
        </article>
      </div>
      <EAFooter />
    </section>
  );
}
