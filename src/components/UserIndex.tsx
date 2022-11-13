import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/app/hooks";
import { AppDispatch } from "../redux/app/store";
import { getuser } from "../redux/reducers/reducerUser";
import { userAllAlbum, userAllArtist, userAllSong, userInfo, userMonthAlbum, userMonthArtist, userMonthSong, userWeekAlbum, userWeekArtist, userWeekSong } from "../Api/shared";
function User() {
  const dispatch = useDispatch<AppDispatch>();
  const datosuser = useAppSelector((state) => state.usercheck);
  const params = useParams();
  const [profile, setProfile] = useState("https://res.cloudinary.com/dncxshlgc/image/upload/v1668341303/def_iypeki.jpg");
  const [same, setSame] = useState("false");
  const [lastfm, setLastfm] = useState("");
  const [albumCount, setAlbumcount] = useState(0);
  const [totalCount, setTotalcount] = useState(0);
  const [artistCount, setArtistcount] = useState(0);
  const [albums,setAlbums]=useState(true);
  const [artists,setArtists]=useState(false);
  const [songs,setSongs]=useState(false);
  const [week, setWeek] = useState(true);
  const [month, setMonth] = useState(false);
  const [all, setAll] = useState(false);
  const [weeklyartist1,setWeeklyartist1]=useState("")
  const [weeklyartistplay1,setWeeklyartistplay1]=useState("")
  const [weeklyartist2,setWeeklyartist2]=useState("")
  const [weeklyartistplay2,setWeeklyartistplay2]=useState("")
  const [weeklyartist3,setWeeklyartist3]=useState("")
  const [weeklyartistplay3,setWeeklyartistplay3]=useState("")
  const [weeklyartist4,setWeeklyartist4]=useState("")
  const [weeklyartistplay4,setWeeklyartistplay4]=useState("")
  const [weeklyartist5,setWeeklyartist5]=useState("")
  const [weeklyartistplay5,setWeeklyartistplay5]=useState("")
  const [monthlyartist1,setMonthlyartist1]=useState("")
  const [monthlyartistplay1,setMonthlyartistplay1]=useState("")
  const [monthlyartist2,setMonthlyartist2]=useState("")
  const [monthlyartistplay2,setMonthlyartistplay2]=useState("")
  const [monthlyartist3,setMonthlyartist3]=useState("")
  const [monthlyartistplay3,setMonthlyartistplay3]=useState("")
  const [monthlyartist4,setMonthlyartist4]=useState("")
  const [monthlyartistplay4,setMonthlyartistplay4]=useState("")
  const [monthlyartist5,setMonthlyartist5]=useState("")
  const [monthlyartistplay5,setMonthlyartistplay5]=useState("")
  const [allartist1,setAllartist1]=useState("")
  const [allartistplay1,setAllartistplay1]=useState("")
  const [allartist2,setAllartist2]=useState("")
  const [allartistplay2,setAllartistplay2]=useState("")
  const [allartist3,setAllartist3]=useState("")
  const [allartistplay3,setAllartistplay3]=useState("")
  const [allartist4,setAllartist4]=useState("")
  const [allartistplay4,setAllartistplay4]=useState("")
  const [allartist5,setAllartist5]=useState("")
  const [allartistplay5,setAllartistplay5]=useState("")
  const [weeklyimgalbum1,setWeeklyimgalbum1]=useState("")
  const [weeklyimgalbum2,setWeeklyimgalbum2]=useState("")
  const [weeklyimgalbum3,setWeeklyimgalbum3]=useState("")
  const [weeklyimgalbum4,setWeeklyimgalbum4]=useState("")
  const [weeklyimgalbum5,setWeeklyimgalbum5]=useState("")
  const [weeklytitlealbum1,setWeeklytitlealbum1]=useState("")
  const [weeklytitlealbum2,setWeeklytitlealbum2]=useState("")
  const [weeklytitlealbum3,setWeeklytitlealbum3]=useState("")
  const [weeklytitlealbum4,setWeeklytitlealbum4]=useState("")
  const [weeklytitlealbum5,setWeeklytitlealbum5]=useState("")
  const [monthlyimgalbum1,setMonthlyimgalbum1]=useState("")
  const [monthlyimgalbum2,setMonthlyimgalbum2]=useState("")
  const [monthlyimgalbum3,setMonthlyimgalbum3]=useState("")
  const [monthlyimgalbum4,setMonthlyimgalbum4]=useState("")
  const [monthlyimgalbum5,setMonthlyimgalbum5]=useState("")
  const [monthlytitlealbum1,setMonthlytitlealbum1]=useState("")
  const [monthlytitlealbum2,setMonthlytitlealbum2]=useState("")
  const [monthlytitlealbum3,setMonthlytitlealbum3]=useState("")
  const [monthlytitlealbum4,setMonthlytitlealbum4]=useState("")
  const [monthlytitlealbum5,setMonthlytitlealbum5]=useState("")
  const [allimgalbum1,setAllimgalbum1]=useState("")
  const [allimgalbum2,setAllimgalbum2]=useState("")
  const [allimgalbum3,setAllimgalbum3]=useState("")
  const [allimgalbum4,setAllimgalbum4]=useState("")
  const [allimgalbum5,setAllimgalbum5]=useState("")
  const [alltitlealbum1,setAlltitlealbum1]=useState("")
  const [alltitlealbum2,setAlltitlealbum2]=useState("")
  const [alltitlealbum3,setAlltitlealbum3]=useState("")
  const [alltitlealbum4,setAlltitlealbum4]=useState("")
  const [alltitlealbum5,setAlltitlealbum5]=useState("")
  const [weeksongs1,setWeeksongs1]=useState("")
  const [weeksongs2,setWeeksongs2]=useState("")
  const [weeksongs3,setWeeksongs3]=useState("")
  const [weeksongs4,setWeeksongs4]=useState("")
  const [weeksongs5,setWeeksongs5]=useState("")
  const [monthsongs1,setMonthsongs1]=useState("")
  const [monthsongs2,setMonthsongs2]=useState("")
  const [monthsongs3,setMonthsongs3]=useState("")
  const [monthsongs4,setMonthsongs4]=useState("")
  const [monthsongs5,setMonthsongs5]=useState("")
  const [allsongs1,setAllsongs1]=useState("")
  const [allsongs2,setAllsongs2]=useState("")
  const [allsongs3,setAllsongs3]=useState("")
  const [allsongs4,setAllsongs4]=useState("")
  const [allsongs5,setAllsongs5]=useState("")
  const user = params["user"];
  useEffect(() => {
    dispatch(getuser(user));
  }, []);
  useEffect(() => {
    console.log(datosuser);
    if (datosuser["intStatus"] === 200) {
      setSame(datosuser["userequal"]);
      setLastfm(datosuser["lastfm"]);
    }
  }, [datosuser]);
  useEffect(() => {
    if (lastfm !== "") {
      const usesync = async () => {
        try {
          const result = await userInfo(lastfm);
          setProfile(result["data"]["user"]["image"][3]["#text"]);
          setAlbumcount(result["data"]["user"]["album_count"]);
          setTotalcount(result["data"]["user"]["playcount"]);
          setArtistcount(result["data"]["user"]["artist_count"]);
          const result2=await userWeekArtist(lastfm)  
          setWeeklyartist1(result2["data"]["topartists"]["artist"][0]["name"])
          setWeeklyartistplay1(result2["data"]["topartists"]["artist"][0]["playcount"])
          setWeeklyartist2(result2["data"]["topartists"]["artist"][1]["name"])
          setWeeklyartistplay2(result2["data"]["topartists"]["artist"][1]["playcount"])
          setWeeklyartist3(result2["data"]["topartists"]["artist"][2]["name"])
          setWeeklyartistplay3(result2["data"]["topartists"]["artist"][2]["playcount"])
          setWeeklyartist4(result2["data"]["topartists"]["artist"][3]["name"])
          setWeeklyartistplay4(result2["data"]["topartists"]["artist"][3]["playcount"])
          setWeeklyartist5(result2["data"]["topartists"]["artist"][4]["name"])
          setWeeklyartistplay5(result2["data"]["topartists"]["artist"][4]["playcount"])
          const result3=await userMonthArtist(lastfm)
          setMonthlyartist1(result3["data"]["topartists"]["artist"][0]["name"])
          setMonthlyartistplay1(result3["data"]["topartists"]["artist"][0]["playcount"])
          setMonthlyartist2(result3["data"]["topartists"]["artist"][1]["name"])
          setMonthlyartistplay2(result3["data"]["topartists"]["artist"][1]["playcount"])
          setMonthlyartist3(result3["data"]["topartists"]["artist"][2]["name"])
          setMonthlyartistplay3(result3["data"]["topartists"]["artist"][2]["playcount"])
          setMonthlyartist4(result3["data"]["topartists"]["artist"][3]["name"])
          setMonthlyartistplay4(result3["data"]["topartists"]["artist"][3]["playcount"])
          setMonthlyartist5(result3["data"]["topartists"]["artist"][4]["name"])
          setMonthlyartistplay5(result3["data"]["topartists"]["artist"][4]["playcount"])
          const result4=await userAllArtist(lastfm)
          setAllartist1(result4["data"]["topartists"]["artist"][0]["name"])
          setAllartistplay1(result4["data"]["topartists"]["artist"][0]["playcount"])
          setAllartist2(result4["data"]["topartists"]["artist"][1]["name"])
          setAllartistplay2(result4["data"]["topartists"]["artist"][1]["playcount"])
          setAllartist3(result4["data"]["topartists"]["artist"][2]["name"])
          setAllartistplay3(result4["data"]["topartists"]["artist"][2]["playcount"])
          setAllartist4(result4["data"]["topartists"]["artist"][3]["name"])
          setAllartistplay4(result4["data"]["topartists"]["artist"][3]["playcount"])
          setAllartist5(result4["data"]["topartists"]["artist"][4]["name"])
          setAllartistplay5(result4["data"]["topartists"]["artist"][4]["playcount"])
          const result5=await userWeekAlbum(lastfm)
          setWeeklyimgalbum1(result5["data"]["topalbums"]["album"][0]["image"][3]["#text"])
          setWeeklyimgalbum2(result5["data"]["topalbums"]["album"][1]["image"][3]["#text"])
          setWeeklyimgalbum3(result5["data"]["topalbums"]["album"][2]["image"][3]["#text"])
          setWeeklyimgalbum4(result5["data"]["topalbums"]["album"][3]["image"][3]["#text"])
          setWeeklyimgalbum5(result5["data"]["topalbums"]["album"][4]["image"][3]["#text"])
          setWeeklytitlealbum1(result5["data"]["topalbums"]["album"][0]["artist"]["name"]+"-"+result5["data"]["topalbums"]["album"][0]["name"]+" "+result5["data"]["topalbums"]["album"][0]["playcount"]+" plays")
          setWeeklytitlealbum2(result5["data"]["topalbums"]["album"][1]["artist"]["name"]+"-"+result5["data"]["topalbums"]["album"][1]["name"]+" "+result5["data"]["topalbums"]["album"][1]["playcount"]+" plays")
          setWeeklytitlealbum3(result5["data"]["topalbums"]["album"][2]["artist"]["name"]+"-"+result5["data"]["topalbums"]["album"][2]["name"]+" "+result5["data"]["topalbums"]["album"][2]["playcount"]+" plays")
          setWeeklytitlealbum4(result5["data"]["topalbums"]["album"][3]["artist"]["name"]+"-"+result5["data"]["topalbums"]["album"][3]["name"]+" "+result5["data"]["topalbums"]["album"][3]["playcount"]+" plays")
          setWeeklytitlealbum5(result5["data"]["topalbums"]["album"][4]["artist"]["name"]+"-"+result5["data"]["topalbums"]["album"][4]["name"]+" "+result5["data"]["topalbums"]["album"][4]["playcount"]+" plays")
          const result6=await userMonthAlbum(lastfm)
          setMonthlyimgalbum1(result6["data"]["topalbums"]["album"][0]["image"][3]["#text"])
          setMonthlyimgalbum2(result6["data"]["topalbums"]["album"][1]["image"][3]["#text"])
          setMonthlyimgalbum3(result6["data"]["topalbums"]["album"][2]["image"][3]["#text"])
          setMonthlyimgalbum4(result6["data"]["topalbums"]["album"][3]["image"][3]["#text"])
          setMonthlyimgalbum5(result6["data"]["topalbums"]["album"][4]["image"][3]["#text"])
          setMonthlytitlealbum1(result6["data"]["topalbums"]["album"][0]["artist"]["name"]+"-"+result6["data"]["topalbums"]["album"][0]["name"]+" "+result6["data"]["topalbums"]["album"][0]["playcount"]+" plays")
          setMonthlytitlealbum2(result6["data"]["topalbums"]["album"][1]["artist"]["name"]+"-"+result6["data"]["topalbums"]["album"][1]["name"]+" "+result6["data"]["topalbums"]["album"][1]["playcount"]+" plays")
          setMonthlytitlealbum3(result6["data"]["topalbums"]["album"][2]["artist"]["name"]+"-"+result6["data"]["topalbums"]["album"][2]["name"]+" "+result6["data"]["topalbums"]["album"][2]["playcount"]+" plays")
          setMonthlytitlealbum4(result6["data"]["topalbums"]["album"][3]["artist"]["name"]+"-"+result6["data"]["topalbums"]["album"][3]["name"]+" "+result6["data"]["topalbums"]["album"][3]["playcount"]+" plays")
          setMonthlytitlealbum5(result6["data"]["topalbums"]["album"][4]["artist"]["name"]+"-"+result6["data"]["topalbums"]["album"][4]["name"]+" "+result6["data"]["topalbums"]["album"][4]["playcount"]+" plays")
          const result7=await userAllAlbum(lastfm)
          setAllimgalbum1(result7["data"]["topalbums"]["album"][0]["image"][3]["#text"])
          setAllimgalbum2(result7["data"]["topalbums"]["album"][1]["image"][3]["#text"])
          setAllimgalbum3(result7["data"]["topalbums"]["album"][2]["image"][3]["#text"])
          setAllimgalbum4(result7["data"]["topalbums"]["album"][3]["image"][3]["#text"])
          setAllimgalbum5(result7["data"]["topalbums"]["album"][4]["image"][3]["#text"])
          setAlltitlealbum1(result7["data"]["topalbums"]["album"][0]["artist"]["name"]+"-"+result7["data"]["topalbums"]["album"][0]["name"]+" "+result7["data"]["topalbums"]["album"][0]["playcount"]+" plays")
          setAlltitlealbum2(result7["data"]["topalbums"]["album"][1]["artist"]["name"]+"-"+result7["data"]["topalbums"]["album"][1]["name"]+" "+result7["data"]["topalbums"]["album"][1]["playcount"]+" plays")
          setAlltitlealbum3(result7["data"]["topalbums"]["album"][2]["artist"]["name"]+"-"+result7["data"]["topalbums"]["album"][2]["name"]+" "+result7["data"]["topalbums"]["album"][2]["playcount"]+" plays")
          setAlltitlealbum4(result7["data"]["topalbums"]["album"][3]["artist"]["name"]+"-"+result7["data"]["topalbums"]["album"][3]["name"]+" "+result7["data"]["topalbums"]["album"][3]["playcount"]+" plays")
          setAlltitlealbum5(result7["data"]["topalbums"]["album"][4]["artist"]["name"]+"-"+result7["data"]["topalbums"]["album"][4]["name"]+" "+result7["data"]["topalbums"]["album"][4]["playcount"]+" plays")
          const result8=await userWeekSong(lastfm)
          setWeeksongs1("1.-"+result8["data"]["toptracks"]["track"][0]["artist"]["name"]+"-"+result8["data"]["toptracks"]["track"][0]["name"]+" "+result8["data"]["toptracks"]["track"][0]["playcount"]+" plays")
          setWeeksongs2("2.-"+result8["data"]["toptracks"]["track"][1]["artist"]["name"]+"-"+result8["data"]["toptracks"]["track"][1]["name"]+" "+result8["data"]["toptracks"]["track"][1]["playcount"]+" plays")
          setWeeksongs3("3.-"+result8["data"]["toptracks"]["track"][2]["artist"]["name"]+"-"+result8["data"]["toptracks"]["track"][2]["name"]+" "+result8["data"]["toptracks"]["track"][2]["playcount"]+" plays")
          setWeeksongs4("4.-"+result8["data"]["toptracks"]["track"][3]["artist"]["name"]+"-"+result8["data"]["toptracks"]["track"][3]["name"]+" "+result8["data"]["toptracks"]["track"][3]["playcount"]+" plays")
          setWeeksongs5("5.-"+result8["data"]["toptracks"]["track"][4]["artist"]["name"]+"-"+result8["data"]["toptracks"]["track"][4]["name"]+" "+result8["data"]["toptracks"]["track"][4]["playcount"]+" plays")
          const result9=await userMonthSong(lastfm)
          setMonthsongs1("1.-"+result9["data"]["toptracks"]["track"][0]["artist"]["name"]+"-"+result9["data"]["toptracks"]["track"][0]["name"]+" "+result9["data"]["toptracks"]["track"][0]["playcount"]+" plays")
          setMonthsongs2("2.-"+result9["data"]["toptracks"]["track"][1]["artist"]["name"]+"-"+result9["data"]["toptracks"]["track"][1]["name"]+" "+result9["data"]["toptracks"]["track"][1]["playcount"]+" plays")
          setMonthsongs3("3.-"+result9["data"]["toptracks"]["track"][2]["artist"]["name"]+"-"+result9["data"]["toptracks"]["track"][2]["name"]+" "+result9["data"]["toptracks"]["track"][2]["playcount"]+" plays")
          setMonthsongs4("4.-"+result9["data"]["toptracks"]["track"][3]["artist"]["name"]+"-"+result9["data"]["toptracks"]["track"][3]["name"]+" "+result9["data"]["toptracks"]["track"][3]["playcount"]+" plays")
          setMonthsongs5("5.-"+result9["data"]["toptracks"]["track"][4]["artist"]["name"]+"-"+result9["data"]["toptracks"]["track"][4]["name"]+" "+result9["data"]["toptracks"]["track"][4]["playcount"]+" plays")
          const result10=await userAllSong(lastfm)
          setAllsongs1("1.-"+result10["data"]["toptracks"]["track"][0]["artist"]["name"]+"-"+result10["data"]["toptracks"]["track"][0]["name"]+" "+result10["data"]["toptracks"]["track"][0]["playcount"]+" plays")
          setAllsongs2("2.-"+result10["data"]["toptracks"]["track"][1]["artist"]["name"]+"-"+result10["data"]["toptracks"]["track"][1]["name"]+" "+result10["data"]["toptracks"]["track"][1]["playcount"]+" plays")
          setAllsongs3("3.-"+result10["data"]["toptracks"]["track"][2]["artist"]["name"]+"-"+result10["data"]["toptracks"]["track"][2]["name"]+" "+result10["data"]["toptracks"]["track"][2]["playcount"]+" plays")
          setAllsongs4("4.-"+result10["data"]["toptracks"]["track"][3]["artist"]["name"]+"-"+result10["data"]["toptracks"]["track"][3]["name"]+" "+result10["data"]["toptracks"]["track"][3]["playcount"]+" plays")
          setAllsongs5("5.-"+result10["data"]["toptracks"]["track"][4]["artist"]["name"]+"-"+result10["data"]["toptracks"]["track"][4]["name"]+" "+result10["data"]["toptracks"]["track"][4]["playcount"]+" plays")
        } catch (error) {
          console.log(error);
        }
      };
      usesync().catch((error) => console.log(error));
    }
  }, [lastfm]);
  async function loginlastfm() {
    console.log("lastfm");
    console.log("&api_key=604024e30367d14d43eda34672a72cf2");
    window.open(
      "http://www.last.fm/api/auth/?api_key=604024e30367d14d43eda34672a72cf2&cb=http://localhost:3001/" +
        user +
        "/callback",
      "_self",
      "noopener noreferrer"
    );
  }
  return (
    <>
      <div className="bg-blueGray-200 pt-24 pb-1">
        <div className="flex flex-col break-words pb-10 bg-white w-80% h-auto mx-32 mb-12 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    src={profile}
                    className="shadow-xl rounded-full h-40 align-middle mt-12 mb-0"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mt-4">
                  {user}
                </h3>
              </div>
              <div className="w-full px-4 text-center mt-2">
                <div className="flex justify-center py-4 lg:pt-2 pt-4">
                  <div className="w-36 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {artistCount}
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Artist count
                    </span>
                  </div>
                  <div className="w-36 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {totalCount}
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Total scrobbles
                    </span>
                  </div>
                  <div className="w-36 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      {albumCount}
                    </span>
                    <span className="text-sm text-blueGray-400">
                      Album count
                    </span>
                  </div>
                </div>
              </div>
            </div>
              {same === "true" && lastfm === "" && (
                <div className="text-center mt-2">
                  <p className="">Connect to Last.fm to get stats about the music you listen to</p>
                  <button
                    className="mt-2 rounded-lg text-white bg-dodger-blue px-2 py-1 hover:drop-shadow-2xl"
                    onClick={() => loginlastfm()}
                  >
                    Connect
                  </button>
                </div>
              )}
              {same==="false" && lastfm==="" &&(
                <div className="flex justify-center">
                  <p>User has not connected Last.fm to their account</p>
                </div>
              )}
              {lastfm!=="" &&
              <div>
              <div className="flex justify-center">
              <button
                onClick={()=>{
                  setAlbums(true)
                  setArtists(false)
                  setSongs(false)
                }}
                className={`w-18 px-2 underline decoration-2 underline-offset-8 hover:text-persian-blue ${
                  albums ? "text-persian-blue" : "text-black"
                }`}
              >
                Albums
              </button>
              <button
                onClick={()=>{
                  setAlbums(false)
                  setArtists(false)
                  setSongs(true)
                }}
                className={`w-18 px-2 underline decoration-2 underline-offset-8 hover:text-persian-blue ${
                  songs ? "text-persian-blue" : "text-black"
                }`}
              >
                Songs
              </button>
              <button
                onClick={()=>{
                  setAlbums(false)
                  setArtists(true)
                  setSongs(false)
                }}
                className={`w-18 px-2 underline decoration-2 underline-offset-8 hover:text-persian-blue ${
                  artists ? "text-persian-blue" : "text-black"
                }`}
              >
                Artists
              </button>
            </div>
            <div className="mt-2 flex justify-center">
              <button
                onClick={()=>{
                  setWeek(true)
                  setAll(false)
                  setMonth(false)
                }}
                className={`w-18 px-2 underline decoration-2 underline-offset-8 hover:text-persian-blue ${
                  week ? "text-persian-blue" : "text-black"
                }`}
              >
                Week
              </button>
              <button
                onClick={()=>{
                  setWeek(false)
                  setAll(false)
                  setMonth(true)
                }}
                className={`w-18 px-2 underline decoration-2 underline-offset-8 hover:text-persian-blue ${
                  month ? "text-persian-blue" : "text-black"
                }`}
              >
                Month
              </button>
              <button
                onClick={()=>{
                  setWeek(false)
                  setAll(true)
                  setMonth(false)
                }}
                className={`w-18 px-2 underline decoration-2 underline-offset-8 hover:text-persian-blue ${
                  all ? "text-persian-blue" : "text-black"
                }`}
              >
                AllTime
              </button>
            </div>
            </div>
            }
            <div className="flex justify-center">
              <div>
                {albums===true &&
                <div>
                  {week===true &&
                  <div className="mt-4">
                    <div className="w-96 flex justify-center flex-col">
                      <div className="flex align-center mb-2">
                      <img src={weeklyimgalbum1} width="50px"/>
                      <p className="ml-2">{weeklytitlealbum1}</p>
                      </div>
                      <div className="flex align-center mb-2">
                      <img src={weeklyimgalbum2} width="50px"/>
                      <p className="ml-2">{weeklytitlealbum2}</p>
                      </div>
                      <div className="flex align-center mb-2">
                      <img src={weeklyimgalbum3} width="50px"/>
                      <p className="ml-2">{weeklytitlealbum3}</p>
                      </div>
                      <div className="flex align-center mb-2">
                      <img src={weeklyimgalbum4} width="50px"/>
                      <p className="ml-2">{weeklytitlealbum4}</p>
                      </div>
                      <div className="flex align-center mb-2">
                      <img src={weeklyimgalbum5} width="50px"/>
                      <p className="ml-2">{weeklytitlealbum5}</p>
                      </div>
                    </div>
                  </div>
                  }
                  {month===true &&
                  <div className="mt-4">
                  <div className="w-96 flex justify-center flex-col">
                    <div className="flex align-center mb-2">
                    <img src={monthlyimgalbum1} width="50px"/>
                    <p className="ml-2">{monthlytitlealbum1}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={monthlyimgalbum2} width="50px"/>
                    <p className="ml-2">{monthlytitlealbum2}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={monthlyimgalbum3} width="50px"/>
                    <p className="ml-2">{monthlytitlealbum3}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={monthlyimgalbum4} width="50px"/>
                    <p className="ml-2">{monthlytitlealbum4}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={monthlyimgalbum5} width="50px"/>
                    <p className="ml-2">{monthlytitlealbum5}</p>
                    </div>
                  </div>
                </div>
                  }
                  {all===true &&
                  <div className="mt-4">
                  <div className="w-96 flex justify-center flex-col">
                    <div className="flex align-center mb-2">
                    <img src={allimgalbum1} width="50px"/>
                    <p className="ml-2">{alltitlealbum1}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={allimgalbum2} width="50px"/>
                    <p className="ml-2">{alltitlealbum2}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={allimgalbum3} width="50px"/>
                    <p className="ml-2">{alltitlealbum3}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={allimgalbum4} width="50px"/>
                    <p className="ml-2">{alltitlealbum4}</p>
                    </div>
                    <div className="flex align-center mb-2">
                    <img src={allimgalbum5} width="50px"/>
                    <p className="ml-2">{alltitlealbum5}</p>
                    </div>
                  </div>
                </div>
                  }
                </div>
                }
                {songs===true &&
                <div className="mt-2">
                  {week===true &&
                  <div>
                    <p>{weeksongs1}</p>
                    <p>{weeksongs2}</p>
                    <p>{weeksongs3}</p>
                    <p>{weeksongs4}</p>
                    <p>{weeksongs5}</p>
                  </div>
                  }
                  {month===true &&
                  <div>
                  <p>{monthsongs1}</p>
                  <p>{monthsongs2}</p>
                  <p>{monthsongs3}</p>
                  <p>{monthsongs4}</p>
                  <p>{monthsongs5}</p>
                </div>
                  }
                  {all===true &&
                  <div>
                    <p>{allsongs1}</p>
                    <p>{allsongs2}</p>
                    <p>{allsongs3}</p>
                    <p>{allsongs4}</p>
                    <p>{allsongs5}</p>
                  </div>
                  }
                </div>
                }
                {artists===true &&
                <div className="mt-2">
                {week===true &&
                  <div>
                  <p>
                    1. {weeklyartist1}: {weeklyartistplay1} plays
                  </p>
                  <p>
                    2. {weeklyartist2}: {weeklyartistplay2} plays
                  </p>
                  <p>
                    3. {weeklyartist3}: {weeklyartistplay3} plays
                  </p>
                  <p>
                    4. {weeklyartist4}: {weeklyartistplay4} plays
                  </p>
                  <p>
                    5. {weeklyartist5}: {weeklyartistplay5} plays 
                  </p>
                  </div>
                  }
                  {month===true &&
                  <div>
                  <p>
                    1. {monthlyartist1}: {monthlyartistplay1} plays
                  </p>
                  <p>
                    2. {monthlyartist2}: {monthlyartistplay2} plays
                  </p>
                  <p>
                    3. {monthlyartist3}: {monthlyartistplay3} plays
                  </p>
                  <p>
                    4. {monthlyartist4}: {monthlyartistplay4} plays
                  </p>
                  <p>
                    5. {monthlyartist5}: {monthlyartistplay5} plays
                  </p>
                  </div>
                  }
                  {all===true &&
                  <div>
                  <p>
                    1. {allartist1}: {allartistplay1} plays
                  </p>
                  <p>
                    2. {allartist2}: {allartistplay2} plays
                  </p>
                  <p>
                    3. {allartist3}: {allartistplay3} plays
                  </p>
                  <p>
                    4. {allartist4}: {allartistplay4} plays
                  </p>
                  <p>
                    5. {allartist5}: {allartistplay5} plays
                  </p>
                  </div>
                  }
               </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
