import React from "react";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Commentform from "../comments/commentform";
import { Comment } from "../comments/commentsection";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  albumtitle,
  biggestdrop100,
  biggestdrop200,
  biggestjump100,
  biggestjump200,
  chartingAlbumsfull,
  chartingalbumssalltime,
  chartingSongsalltime,
  chartingSongssfull,
  entry100,
  entry200,
  getcomment,
  randomarticle,
  songtitle,
} from "../../Api/shared";
import { useParams } from "react-router-dom";
import Article from "../statcomponent/articles";

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, Tooltip);
function Barchartindex() {
  const params = useParams();
  const chart = params["chart"];
  const [label, setLabel] = useState("");
  const [comments,setComments]=useState([])
  const [band, setBand] = useState(false);
  const [article,setArticle]=useState<any>([])
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Weeks on chart",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
  const options = {};
  useEffect(() => {
    const sync = async () => {
      console.log(chart);
      let result: any;
      if (chart === "Longest Charting albums") {
        result = await chartingAlbumsfull();
      } else if (chart === "Longest charting songs") {
        result = await chartingSongssfull();
      } else if (chart === "Longest Charting songs of all time") {
        result = await chartingSongsalltime();
      } else if (chart === "Longest charting albums of all time") {
        result = await chartingalbumssalltime();
      } else if (chart === "Biggest drops of all time") {
        result = await biggestdrop100();
        console.log(result);
      } else if (chart === "Biggest drop of positions all time") {
        result = await biggestdrop200();
      } else if (chart === "Songs biggest jumps") {
        result = await biggestjump100();
      } else if (chart === "Albums biggest jumps") {
        result = await biggestjump200();
      }else if(chart==="Most common song titles on Billboard")
      {
        result = await songtitle()

      }else if(chart==="Most common album titles on Billboard")
      {
        result= await albumtitle()
      }else if(chart==="Most song entries by artist")
      {
        result=await entry100()
      }else if(chart==="Most album entries by artist")
      {
        result=await entry200()
      }

      let etiquetas: any = [];
      let datat: any = [];
      for (let i = 0; i < result["data"].length; i++) {
        if (
          chart === "Longest Charting albums" ||
          chart === "Longest charting songs"
        ) {
          let str =
            result["data"][i]["chart"]["songs"]["artist"] +
            "-" +
            result["data"][i]["chart"]["songs"]["title"];
          etiquetas.push(str);
          datat.push(
            result["data"][i]["chart"]["songs"]["position"]["weeksOnChart"]
          );
        } else if (
          chart === "Longest Charting songs of all time" ||
          chart === "Longest charting albums of all time"
        ) {
          let str =
            result["data"][i]["_id"]["artist"] +
            "-" +
            result["data"][i]["_id"]["title"];
          etiquetas.push(str);
          datat.push(result["data"][i]["count"]);
        } else if (
          chart === "Biggest drops of all time" ||
          chart === "Biggest drop of positions all time" ||
          chart === "Songs biggest jumps" ||
          chart === "Albums biggest jumps"
        ) {
          etiquetas.push(
            result["data"][i]["_id"]["artist"] +
              "-" +
              result["data"][i]["_id"]["title"]
          );
          datat.push(result["data"][i]["totalAmountDue"]);
        }else if(chart==="Most common song titles on Billboard" ||chart==="Most common album titles on Billboard"){
          datat.push(result["data"][i]["playcount"])
          let str=result["data"][i]["title"]+" ("
          for(let z=0;z<3;z++)
          {
            str+=result["data"][i]["artist"][z]+", "
          }
          str+="etc.)"
          etiquetas.push(str)
        }else if(chart==="Most song entries by artist"||chart==="Most album entries by artist")
        {
          datat.push(result["data"][i]["playcount"])
          etiquetas.push(result["data"][i]["artist"])
        }
      }
      if (chart === "Biggest drops of all time") {
        setLabel("Number of positions dropped");
      } else {
        setLabel("Weeks on chart");
      }
      console.log(label);
      setData({
        labels: etiquetas,
        datasets: [
          {
            label: label,
            data: datat,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
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
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="bg-blueGray-200 py-10">
      <div className="bg-white w-80% mx-32 mb-12 pb-10 shadow-xl rounded-lg py-2 flex justify-center">
        <div className="w-3/4 h-3/4 flex flex-col justify-center">
          <div className="flex justify-center">
            <h1 className="mt-5 text-2xl font-bold">{chart}</h1>
          </div>
          {band===false &&
          <div className="flex justify-center mt-4">

          <FontAwesomeIcon icon={faSpinner} className="w-52 h-52 animate-spin white-500"/>
          </div>
          }
          {band===true &&
             <Bar
             className="w-3/4 h-3/4"
             options={{
               scales: {
                 x: {
                   display: false,
                   title: {
                     display: true,
                     text: "Date",
                   },
                 },
                 y: {
                   display: true,
                   title: {
                     display: true,
                     text: "Semanas",
                   },
                 },
               },
             }}
             data={data}
             redraw={true}
           />
          }
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
export default Barchartindex;
