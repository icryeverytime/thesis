import React from "react";
import documentation from "../Assets/img/documentation.png";
import headphones from "../Assets/img/headphones.jpg";
import pattern from "../Assets/img/home.jpg";
import img_crown from "../Assets/img/crown.jpg";
import img_emerald from "../Assets/img/gem.jpg";
import img_disc from "../Assets/img/disc.jpg";
import img_note from "../Assets/img/note.png";
import img_chart from "../Assets/img/chart_line.png";
import img_one from "../Assets/img/gold1.jpg";
import img_charts from "../Assets/img/charts.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Stathome from "./homecomponent/stathome";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Music Background - A place to find out what is everyone
                listening to.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Discover trough easy-to-read graphs the historical background of
                your favorite genre, for how long it has been on billboard’s top
                100 and more.{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                >
                  Find out more...
                </a>
              </p>
              <div className="mt-12">
                <NavLink
                  to="/thesis/stat"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hidden lg:block absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={pattern}
          alt="..."
        />
      </section>
      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={headphones}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                  <h4 className="text-xl font-bold text-white">
                    See whats everyone talking about
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Discover different stats from  lovers of music like you and
                    find patterns and secrets behind the music our users
                    listen to.{" "}
                    <NavLink to="/thesis/stat" className="underline-offset-8 ">
                      Go read them...{" "}
                    </NavLink>
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="text-gray text-xl leading-lg">
                          <FontAwesomeIcon icon={faHeadphones} />
                        </i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Listen new genres
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Expand your music taste listening to the very best of
                        all time
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="text-gray text-xl leading-lg">
                          <FontAwesomeIcon icon={faMusic} />
                        </i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Discover more styles
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Why that song has managed to reach the top 100 so many
                        times
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="text-gray text-xl leading-lg">
                          <FontAwesomeIcon icon={faChartLine} />
                        </i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        learn from statistics
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Carefully crafted code for each chart, so you can
                        consult them on the way
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="text-gray text-xl leading-lg">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Explore decades of data
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Find out what year of data tell us about your favorite artists
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stathome />
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="text-gray text-2xl leading-lg">
                  <FontAwesomeIcon icon={faChartPie} />
                </i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Charts of all shapes and sizes
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Find a chart that suits your needs and filter them by
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Most viewed
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  author
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  genre
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  lyrics
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  theme
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Top 100
                </span>
              </div>
              <NavLink
                to="/thesis/stat"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View All {" >>"}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </NavLink>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={img_charts}
                  className="w-full align-middle rounded absolute shadow-2xl max-w-100-px z-3 left-145-px -top-29-px"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index">
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-5 bg-white"
                        src={img_note}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Songs with most weeks
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index">
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-3 bg-white"
                        src={img_chart}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Longest charting songs
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index">
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto bg-white"
                        src={img_disc}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Longest charting albums
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index">
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={img_crown}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Most played of all time
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index">
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-3 bg-white"
                        src={img_one}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        one hitters
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index">
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto bg-white p-2"
                        src={img_emerald}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        hidden gems
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">Charts for everyone</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Charts will help you summarize very large data in a very crisp
                  and easy manner. They make the data more presentable and
                  easier to understand. By looking at the chart itself one can
                  draw certain inferences or analysis in order to compare the
                  data in a better way.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Analysts for Analysts
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={documentation}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;