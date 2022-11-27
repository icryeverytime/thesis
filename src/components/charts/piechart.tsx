import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Commentform from "../comments/commentform";
import { getcomment } from "../../Api/shared";
import { Comment } from "../comments/commentsection";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { checklogin, randomarticle, userget2, usersalbums, usersartists, userssongs, usertopalbum, usertopartist, usertopsong } from "../../Api/shared";
import Article from "../statcomponent/articles";
ChartJS.register(ArcElement);
function Piedata() {
  const params = useParams();
  const chart = params["chart"];
  const [result, setResult] = useState("");
  const [lastfm, setLastfm] = useState("");
  const [comments,setComments]=useState([])
  const [article,setArticle]=useState<any>([])
  const [band,setBand]=useState(false)
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "# of Plays",
        data: [],
        backgroundColor: [
          "rgba(245,245,220,0.5)",
          "rgba(127,255,0,0.5)",
          "rgba(240,128,128,0.5)",
          "rgba(139,0,139,0.5)",
          "rgba(221,160,221,0.5)",
          "rgba(255,105,180,0.5)",
          "rgba(210,180,140,0.5)",
          "rgba(154,205,50,0.5)",
          "rgba(148,0,211,0.5)",
          "rgba(176,224,230,0.5)",
          "rgba(0,250,154,0.5)",
          "rgba(127,255,212,0.5)",
          "rgba(147,112,219,0.5)",
          "rgba(138,43,226,0.5)",
          "rgba(112,128,144,0.5)",
          "rgba(169,169,169,0.5)",
          "rgba(119,136,153,0.5)",
          "rgba(220,20,60,0.5)",
          "rgba(192,192,192,0.5)",
          "rgba(0,0,128,0.5)",
          "rgba(245,245,220,0.5)",
          "rgba(255,0,255,0.5)",
          "rgba(0,0,205,0.5)",
          "rgba(135,206,235,0.5)",
          "rgba(189,183,107,0.5)",
          "rgba(238,232,170,0.5)",
          "rgba(255,140,0,0.5)",
          "rgba(230,230,250,0.5)",
          "rgba(255,250,250,0.5)",
          "rgba(255,215,0,0.5)",
          "rgba(173,255,47,0.5)",
          "rgba(240,255,255,0.5)",
          "rgba(255,255,255,0.5)",
          "rgba(240,255,240,0.5)",
          "rgba(0,128,0,0.5)",
          "rgba(186,85,211,0.5)",
          "rgba(250,235,215,0.5)",
          "rgba(255,228,196,0.5)",
          "rgba(255,0,255,0.5)",
          "rgba(218,112,214,0.5)",
          "rgba(123,104,238,0.5)",
          "rgba(100,149,237,0.5)",
          "rgba(255,228,225,0.5)",
          "rgba(250,128,114,0.5)",
          "rgba(0,255,127,0.5)",
          "rgba(128,0,0,0.5)",
          "rgba(210,105,30,0.5)",
          "rgba(173,216,230,0.5)",
          "rgba(0,255,255,0.5)",
          "rgba(216,191,216,0.5)",
          "rgba(184,134,11,0.5)",
        ],
        borderColor: ["rgba(0, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  });
  useEffect(() => {
    const sync = async () => {
      console.log(chart);
      let data3
      let name:any=[]
      let play: any = [];
      
        let data = await checklogin();
        setResult(data["data"]["data"]);
        let data2 = await userget2(result);
        console.log(data2["data"]["data"]["lastfm"]);
     if (chart === "Pie chart of your top artists") {
        data3 = await usertopartist(data2["data"]["data"]["lastfm"]);
        for (let i = 0; i < data3["data"]["topartists"]["artist"].length; i++) {
            name.push(data3["data"]["topartists"]["artist"][i]["name"]);
            play.push(data3["data"]["topartists"]["artist"][i]["playcount"]);
            }
      }
      else if(chart==="Pie chart of your top songs")
      {
        data3 = await usertopsong(data2["data"]["data"]["lastfm"]);
        console.log(data3)
        for (let i = 0; i < data3["data"]["toptracks"]["track"].length; i++) {
            name.push(data3["data"]["toptracks"]["track"][i]["artist"]["name"]+"-"+data3["data"]["toptracks"]["track"][i]["name"]);
            play.push(data3["data"]["toptracks"]["track"][i]["playcount"]);
            }
      }else if(chart==="Pie chart of your top albums")
      {
        data3=await usertopalbum(data2["data"]["data"]["lastfm"])
        console.log(data3)
        for (let i = 0; i < data3["data"]["topalbums"]["album"].length; i++) {
            name.push(data3["data"]["topalbums"]["album"][i]["artist"]["name"]+"-"+data3["data"]["topalbums"]["album"][i]["name"]);
            play.push(data3["data"]["topalbums"]["album"][i]["playcount"]);
            }
      }else if(chart==="Our users most listened to albums of all time")
      {
        console.log("tres")
        data3=await usersalbums()
        console.log(data3)
        for(let i=0;i<50;i++)
        {
            name.push(data3["data"][i]["artist"]+"-"+data3["data"][i]["name"])
            play.push(data3["data"][i]["playcount"])
        }
      }
      else if(chart==="Our users most listened to songs of all time")
      {
        data3=await userssongs()
        for(let i=0;i<50;i++)
        {
            name.push(data3["data"][i]["artist"]+"-"+data3["data"][i]["name"])
            play.push(data3["data"][i]["playcount"])
        }
      }
      else if(chart==="Our users most listened to artists of all time")
      {
        data3=await usersartists()
        for(let i=0;i<50;i++)
        {
            name.push(data3["data"][i]["name"])
            play.push(data3["data"][i]["playcount"])
        }
      }
      setData({
        labels: name,
        datasets: [
          {
            label: "# of Plays",
            data: play,
            backgroundColor: [
              "rgba(245,245,220,0.5)",
              "rgba(127,255,0,0.5)",
              "rgba(240,128,128,0.5)",
              "rgba(139,0,139,0.5)",
              "rgba(221,160,221,0.5)",
              "rgba(255,105,180,0.5)",
              "rgba(210,180,140,0.5)",
              "rgba(154,205,50,0.5)",
              "rgba(148,0,211,0.5)",
              "rgba(176,224,230,0.5)",
              "rgba(0,250,154,0.5)",
              "rgba(127,255,212,0.5)",
              "rgba(147,112,219,0.5)",
              "rgba(138,43,226,0.5)",
              "rgba(112,128,144,0.5)",
              "rgba(169,169,169,0.5)",
              "rgba(119,136,153,0.5)",
              "rgba(220,20,60,0.5)",
              "rgba(192,192,192,0.5)",
              "rgba(0,0,128,0.5)",
              "rgba(245,245,220,0.5)",
              "rgba(255,0,255,0.5)",
              "rgba(0,0,205,0.5)",
              "rgba(135,206,235,0.5)",
              "rgba(189,183,107,0.5)",
              "rgba(238,232,170,0.5)",
              "rgba(255,140,0,0.5)",
              "rgba(230,230,250,0.5)",
              "rgba(255,250,250,0.5)",
              "rgba(255,215,0,0.5)",
              "rgba(173,255,47,0.5)",
              "rgba(240,255,255,0.5)",
              "rgba(255,255,255,0.5)",
              "rgba(240,255,240,0.5)",
              "rgba(0,128,0,0.5)",
              "rgba(186,85,211,0.5)",
              "rgba(250,235,215,0.5)",
              "rgba(255,228,196,0.5)",
              "rgba(255,0,255,0.5)",
              "rgba(218,112,214,0.5)",
              "rgba(123,104,238,0.5)",
              "rgba(100,149,237,0.5)",
              "rgba(255,228,225,0.5)",
              "rgba(250,128,114,0.5)",
              "rgba(0,255,127,0.5)",
              "rgba(128,0,0,0.5)",
              "rgba(210,105,30,0.5)",
              "rgba(173,216,230,0.5)",
              "rgba(0,255,255,0.5)",
              "rgba(216,191,216,0.5)",
              "rgba(184,134,11,0.5)",
            ],
            borderColor: ["rgba(0, 0, 0, 1)"],
            borderWidth: 1,
          },
        ],
      });
      const result4=await randomarticle(chart)
      console.log(result4)
      for(let x=0;x<result4["data"].length;x++)
      {
        article.push(result4["data"][x])
      }
      console.log(article)
      setBand(true);
      const result5= await getcomment(chart)
      setComments(result5["data"]["comments"])
    };
    sync();
  }, []);
  return (
    <div className="bg-blueGray-200 py-10">
      <div className="bg-white w-80% mx-32 mb-12 shadow-xl rounded-lg py-2">
      <div className="flex justify-center">
      <h1 className="mt-5 text-2xl font-bold">{chart}</h1>
      </div>
      {band===false &&
          <div className="flex justify-center mt-4">

          <FontAwesomeIcon icon={faSpinner} className="w-52 h-52 animate-spin white-500"/>
          </div>
          }
      <div className="my-6 mx-6 flex justify-center">
        <div className="w-2/4 h-3/4 flex justify-center">
        {band===true &&
           <Pie color="red" data={data} redraw={true} />
        }
        </div>
      </div>
      </div>
      <div className="bg-white w-80% mx-32 mb-12 pb-10 shadow-xl rounded-lg py-2 flex justify-center">
        <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Other interesting stats</h1>
        {band===true &&
        <Article article={article}/>
        }
    </div>
    </div> 
    <div className="bg-white w-80% mx-32 mb-12 pb-10 shadow-xl rounded-lg py-2 flex flex-col justify-center">
        <div className="flex flex-col mx-auto">
        <h1 className="text-2xl font-bold">Comment Section</h1>
        {comments.length==0&&
      <div>
        <h1 className="text-xl">Be the first to comment</h1>
        </div>
      }
      </div>
      {comments.map(function(object,i){
        return(
          <Comment comment={object} key={i} />
        )
      })}
      <Commentform title={chart}/>
    </div> 
    </div>
  );
}
export default Piedata;
