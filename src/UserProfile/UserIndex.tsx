import React from 'react';
import profilePic from '../Assets/img/pic2.jpg';
import profileBG from '../Assets/img/profileBG.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Home(){
     return(

      <>
      <div className='bg-blueGray-200 pt-40 pb-1'>
      <img
          className="absolute top-14 w-full align-middle"  
          src={profileBG}
          alt="..."
        />
      <div className="relative flex flex-col min-w-0 break-words bg-white w-80% mx-32 mb-12 shadow-xl rounded-lg -mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
              <img
                  alt="..."
                  src={profilePic}
                  className="shadow-xl rounded-full h-40 align-middle mt-12 -mb-16"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    4
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    83
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Articles</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 -mt-8">
            
              I Cry Every Time
            </h3>
            <div className="text-sm leading-normal mt-10 -mb-8 text-blueGray-400 font-bold uppercase">
              
              <i className="mr-2 text-lg text-blueGray-400"><FontAwesomeIcon icon={faLocationDot} /></i>
              Aguascalientes, México
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
            <i className="mr-2 text-lg text-blueGray-400"><FontAwesomeIcon icon={faUser} /></i>
              Christian Viramontes
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="mr-2 text-lg text-blueGray-400"><FontAwesomeIcon icon={faEnvelope} /></i>
              christianantonio12322@gmail.com
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700 hidden md:block">
                  An artist of considerable range, the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm, intimate
                  feel with a solid groove structure. An artist of considerable
                  range.
                  
                </p>
                <a
                  href="#pablo"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>

        




        

     );
}
export default Home;