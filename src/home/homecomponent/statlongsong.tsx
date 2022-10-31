import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/app/hooks";
import { AppDispatch } from "../../redux/app/store";
import { longSong } from "../../redux/reducers/reducerLong";
function Statlong() {
    const dispatch = useDispatch<AppDispatch>();
    const datoslong=useAppSelector((state) => state.longSong);
    const [artistAl1, setArtistAl1] = useState("");
    const [titleAl1, setTitleAl1] = useState("");
    const [srcAl1, setSrcAl1] = useState("");
    const [artistAl2, setArtistAl2] = useState("");
    const [titleAl2, setTitleAl2] = useState("");
    const [srcAl2, setSrcAl2] = useState("");
    const [artistAl3, setArtistAl3] = useState("");
    const [titleAl3, setTitleAl3] = useState("");
    const [srcAl3, setSrcAl3] = useState("");
    const [artistAl4, setArtistAl4] = useState("");
    const [titleAl4, setTitleAl4] = useState("");
    const [srcAl4, setSrcAl4] = useState("");
    const [artistAl5, setArtistAl5] = useState("");
    const [titleAl5, setTitleAl5] = useState("");
    const [srcAl5, setSrcAl5] = useState("");
    const [count1,setCount1]=useState("")
    const [count2,setCount2]=useState("")
    const [count3,setCount3]=useState("")
    const [count4,setCount4]=useState("")
    const [count5,setCount5]=useState("")
    if(datoslong["intStatuschartingsongs"]===0){
        dispatch(longSong());
    }
    useEffect(() => {
        console.log(datoslong)
        if (datoslong["intStatuschartingsongs"] === 200) {
          setArtistAl1(
            datoslong["Resultchartingsongsartist1"]
          );
          setTitleAl1(
            datoslong["Resultchartingsongstitle1"]
          );
          setSrcAl1(
            datoslong["Resultchartingsongssrc1"]
          );
          setArtistAl2(
            datoslong["Resultchartingsongsartist2"]
          );
          setTitleAl2(
            datoslong["Resultchartingsongstitle2"]
          );
          setSrcAl2(
            datoslong["Resultchartingsongssrc2"]
          );
          setArtistAl3(
            datoslong["Resultchartingsongsartist3"]
          );
          setTitleAl3(
            datoslong["Resultchartingsongstitle3"]
          );
          setSrcAl3(
            datoslong["Resultchartingsongssrc3"]
          );
          setArtistAl4(
            datoslong["Resultchartingsongsartist4"]
          );
          setTitleAl4(
            datoslong["Resultchartingsongstitle4"]
          );
          setSrcAl4(
            datoslong["Resultchartingsongssrc4"]
          );
          setArtistAl5(
            datoslong["Resultchartingsongsartist5"]
          );
          setTitleAl5(
            datoslong["Resultchartingsongstitle5"]
          );
          setSrcAl5(
            datoslong["Resultchartingsongssrc5"]
          );
          setCount1(datoslong["Resultcount1"])
          setCount2(datoslong["Resultcount2"])
          setCount3(datoslong["Resultcount3"])
          setCount4(datoslong["Resultcount4"])
          setCount5(datoslong["Resultcount5"])
        }
      }, [datoslong]);
    return(
        <div className="w-full lg:w-4/12 px-4">
        <h5 className="text-xl font-semibold pb-4 text-center">
          Songs with most weeks on Billboard 100
        </h5>
        <Link to="/auth/login">
          <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
          <div className="flex">
              <img className="h-24" src={srcAl1}></img>
              <div className="flex flex-col ml-6">
                <p>
                  {artistAl1}-{titleAl1}
                </p>
                <p>
                  Count:
                  <span className="text-red-600">{count1}</span>
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="h-20" src={srcAl2}></img>
              <div className="flex flex-col ml-6">
                <p>
                  {artistAl2}-{titleAl2}
                </p>
                <p>
                  Count:
                  <span className="text-red-600">{count2}</span>
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="h-20" src={srcAl3}></img>
              <div className="flex flex-col ml-6">
                <p>
                  {artistAl3}-{titleAl3}
                </p>
                <p>
                  Count:
                  <span className="text-red-600">{count3}</span>
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="h-20" src={srcAl4}></img>
              <div className="flex flex-col ml-6">
                <p>
                  {artistAl4}-{titleAl4}
                </p>
                <p>
                  Count:
                  <span className="text-red-600">{count4} </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="h-20" src={srcAl5}></img>
              <div className="flex flex-col ml-6">
                <p>
                  {artistAl5}-{titleAl5}
                </p>
                <p>
                  Count:
                  <span className="text-red-600">{count5} </span>
                </p>
              </div>
            </div>

          </div>
        </Link>
      </div>
    );
}
export default Statlong;