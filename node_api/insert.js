const { getChart } = require('billboard-top-100');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://icryeverytime:kC5JEsU4HQifXL2@billboard.fdyddwq.mongodb.net/?retryWrites=true&w=majority";

let date_time = new Date();

// get current date
// adjust 0 before single digit date
let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();
let chartdate='2022-10-29';
// prints date in YYYY-MM-DD format
let currentdate=year + "-" + month + "-" + date;
let yearnumber=parseInt(year);
let monthnumber=parseInt(month);
let daynumber=parseInt(date);
console.log(currentdate);
// date format YYYY-MM-DD
function promesa(fecha){
  //billboard-200
  return new Promise((resolve,reject)=>{
    getChart('hot-100', fecha, (err, chart) => {
      if (err) reject(err);
      resolve(chart);
    });
  }) 
}
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let currentday,currentmonth,currentyear;
async function main()
{
 do{
  try{
    let resultado=await promesa(chartdate);
    MongoClient.connect(uri,async (err,con)=>{
      if(err)
      {
        console.log(err)
      }
      else{
        con.db('music').collection('billboard100').insertOne({chart:resultado},(err,results)=>{
          if(err)
          {
            console.log(err)
          }
          else{
            console.log(results,' Elemento insertado')
          }
        }) 
      }
    })
    chartdate=resultado.nextWeek.date;
    let split=chartdate.split('-');
    currentday=parseInt(split[2]);
    currentyear=parseInt(split[0]);
    currentmonth=parseInt(split[1]);
    console.log(chartdate);
    }catch(err)
    {
      console.log(err);
    }
  }while(currentyear<yearnumber || (currentyear==yearnumber && currentmonth<month) || (currentyear==yearnumber && currentmonth==month && currentday<=date));
}
main();
