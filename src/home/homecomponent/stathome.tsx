import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/app/hooks";
import { AppDispatch } from "../../redux/app/store";
import { charting } from "../../redux/reducers/reducerHomestats";
import {chartingalbums} from "../../redux/reducers/reducerHomealbums";
import Statalbum from "./statalbum";
import Statlong from "./statlongsong";
function Stathome() {
  const dispatch = useDispatch<AppDispatch>();
  const datoshome = useAppSelector((state) => state.stathome);
  const [artist1, setArtist1] = useState("");
  const [title1, setTitle1] = useState("");
  const [src1, setSrc1] = useState("");
  const [postion1, setPosition1] = useState("");
  const [artist2, setArtist2] = useState("");
  const [title2, setTitle2] = useState("");
  const [src2, setSrc2] = useState("");
  const [postion2, setPosition2] = useState("");
  const [artist3, setArtist3] = useState("");
  const [title3, setTitle3] = useState("");
  const [src3, setSrc3] = useState("");
  const [postion3, setPosition3] = useState("");
  const [artist4, setArtist4] = useState("");
  const [title4, setTitle4] = useState("");
  const [src4, setSrc4] = useState("");
  const [postion4, setPosition4] = useState("");
  const [artist5, setArtist5] = useState("");
  const [title5, setTitle5] = useState("");
  const [src5, setSrc5] = useState("");
  const [postion5, setPosition5] = useState("");


  if (datoshome["intStatuschartingsongs"] === 0) {
    dispatch(charting());
  }
  useEffect(() => {
    if (datoshome["intStatuschartingsongs"] === 200) {
      setArtist1(
        datoshome["Resultchartingsongsartist1"]
      );
      setTitle1(
        datoshome["Resultchartingsongstitle1"]
      );
      setSrc1(
        datoshome["Resultchartingsongssrc1"]
      );
      setPosition1(
        datoshome["Resultchartingposition1"]
      );
      setArtist2(
        datoshome["Resultchartingsongsartist2"]
      );
      setTitle2(
        datoshome["Resultchartingsongstitle2"]
      );
      setSrc2(
        datoshome["Resultchartingsongssrc2"]
      );
      setPosition2(
        datoshome["Resultchartingposition2"]
      );
      setArtist3(
        datoshome["Resultchartingsongsartist3"]
      );
      setTitle3(
        datoshome["Resultchartingsongstitle3"]
      );
      setSrc3(
        datoshome["Resultchartingsongssrc3"]
      );
      setPosition3(
        datoshome["Resultchartingposition3"]
      );
      setArtist4(
        datoshome["Resultchartingsongsartist4"]
      );
      setTitle4(
        datoshome["Resultchartingsongstitle4"]
      );
      setSrc4(
        datoshome["Resultchartingsongssrc4"]
      );
      setPosition4(
        datoshome["Resultchartingposition4"]
      );
      setArtist5(
        datoshome["Resultchartingsongsartist5"]
      );
      setTitle5(
        datoshome["Resultchartingsongstitle5"]
      );
      setSrc5(
        datoshome["Resultchartingsongssrc5"]
      );
      setPosition5(
        datoshome["Resultchartingposition5"]
      );
    }
  }, [datoshome]);
  return (
    <div>
      <div className="justify-center text-center flex flex-wrap mt-24">
        <div className="w-full md:w-6/12 px-12 md:px-4">
          <h2 className="font-semibold text-4xl">Learn Statistics from your favorite music</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            We combine data from Last.fm and Billboard charts to bring you the
            best data about music known to man.
          </p>
        </div>
      </div>

      <section className="block relative z-1 bg-blueGray-600 mt-36">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
               <Statalbum />

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Longest charting songs on Billboard 100
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <div className="flex">
                        <img className="h-24" src={src1}></img>
                        <div className="flex flex-col ml-6">
                          <p>
                            {artist1}-{title1}
                          </p>
                          <p>
                            Weeks on charts:
                            <span className="text-red-600"> {postion1}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <img className="h-20" src={src2}></img>
                        <div className="flex flex-col ml-10">
                          <p>
                            {artist2}-{title2}
                          </p>
                          <p>
                            Weeks on charts:
                            <span className="text-red-600"> {postion2}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <img className="h-20" src={src3}></img>
                        <div className="flex flex-col ml-10">
                          <p>
                            {artist3}-{title3}
                          </p>
                          <p>
                            Weeks on charts:
                            <span className="text-red-600"> {postion3}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <img className="h-20" src={src4}></img>
                        <div className="flex flex-col ml-10">
                          <p>
                            {artist4}-{title4}
                          </p>
                          <p>
                            Weeks on charts:
                            <span className="text-red-600"> {postion4}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <img className="h-20" src={src5}></img>
                        <div className="flex flex-col ml-10">
                          <p>
                            {artist5}-{title5}
                          </p>
                          <p>
                            Weeks on charts:
                            <span className="text-red-600"> {postion5}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <Statlong />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Stathome;
