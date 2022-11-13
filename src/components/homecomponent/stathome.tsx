import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/app/hooks";
import { AppDispatch } from "../../redux/app/store";
import { charting } from "../../redux/reducers/reducerHomestats";
import {chartingalbums} from "../../redux/reducers/reducerHomealbums";
import Statalbum from "./statalbum";
import Statalbum2 from "./statalbum2";
import Statlong from "./statlongsong";
function Stathome() {
  
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

              <Statalbum2></Statalbum2>                

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
