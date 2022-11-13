/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/app/hooks";
import { AppDispatch } from "../../redux/app/store";
import {chartingalbums} from "../../redux/reducers/reducerHomealbums";
import { order } from "../../Api/shared";
function Statalbum() { 
    const dispatch = useDispatch<AppDispatch>();
    const datosalbums=useAppSelector((state) => state.statAlbums);
    const [artistAl1, setArtistAl1] = useState("");
    const [titleAl1, setTitleAl1] = useState("");
    const [srcAl1, setSrcAl1] = useState("");
    const [postionAl1, setPositionAl1] = useState("");
    const [artistAl2, setArtistAl2] = useState("");
    const [titleAl2, setTitleAl2] = useState("");
    const [srcAl2, setSrcAl2] = useState("");
    const [postionAl2, setPositionAl2] = useState("");
    const [artistAl3, setArtistAl3] = useState("");
    const [titleAl3, setTitleAl3] = useState("");
    const [srcAl3, setSrcAl3] = useState("");
    const [postionAl3, setPositionAl3] = useState("");
    const [artistAl4, setArtistAl4] = useState("");
    const [titleAl4, setTitleAl4] = useState("");
    const [srcAl4, setSrcAl4] = useState("");
    const [postionAl4, setPositionAl4] = useState("");
    const [artistAl5, setArtistAl5] = useState("");
    const [titleAl5, setTitleAl5] = useState("");
    const [srcAl5, setSrcAl5] = useState("");
    const [postionAl5, setPositionAl5] = useState("");
    if(datosalbums["intStatuschartingsongs"]===0){
        dispatch(chartingalbums());
    }
    useEffect(() => {
        if (datosalbums["intStatuschartingsongs"] === 200) {
          setArtistAl1(
            datosalbums["Resultchartingsongsartist1"]
          );
          setTitleAl1(
            datosalbums["Resultchartingsongstitle1"]
          );
          setSrcAl1(
            datosalbums["Resultchartingsongssrc1"]
          );
          setPositionAl1(
            datosalbums["Resultchartingposition1"]
          );
          setArtistAl2(
            datosalbums["Resultchartingsongsartist2"]
          );
          setTitleAl2(
            datosalbums["Resultchartingsongstitle2"]
          );
          setSrcAl2(
            datosalbums["Resultchartingsongssrc2"]
          );
          setPositionAl2(
            datosalbums["Resultchartingposition2"]
          );
          setArtistAl3(
            datosalbums["Resultchartingsongsartist3"]
          );
          setTitleAl3(
            datosalbums["Resultchartingsongstitle3"]
          );
          setSrcAl3(
            datosalbums["Resultchartingsongssrc3"]
          );
          setPositionAl3(
            datosalbums["Resultchartingposition3"]
          );
          setArtistAl4(
            datosalbums["Resultchartingsongsartist4"]
          );
          setTitleAl4(
            datosalbums["Resultchartingsongstitle4"]
          );
          setSrcAl4(
            datosalbums["Resultchartingsongssrc4"]
          );
          setPositionAl4(
            datosalbums["Resultchartingposition4"]
          );
          setArtistAl5(
            datosalbums["Resultchartingsongsartist5"]
          );
          setTitleAl5(
            datosalbums["Resultchartingsongstitle5"]
          );
          setSrcAl5(
            datosalbums["Resultchartingsongssrc5"]
          );
          setPositionAl5(
            datosalbums["Resultchartingposition5"]
          );
        }
      }, [datosalbums]);
    return(
        <div className="w-full lg:w-4/12 px-4">
        <h5 className="text-xl font-semibold pb-4 text-center">
          Longest charting albums on Billboard 200
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
                  Weeks on charts:
                  <span className="text-red-600"> {postionAl1}</span>
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
                  Weeks on charts:
                  <span className="text-red-600"> {postionAl2}</span>
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
                  Weeks on charts:
                  <span className="text-red-600"> {postionAl3}</span>
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
                  Weeks on charts:
                  <span className="text-red-600"> {postionAl4}</span>
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
                  Weeks on charts:
                  <span className="text-red-600"> {postionAl5}</span>
                </p>
              </div>
            </div>

          </div>
        </Link>
      </div>
    );
}
export default Statalbum;