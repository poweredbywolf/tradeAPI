function myFunction() {

   //http call for Luno and JSON parse
 var url="https://api.mybitx.com/api/1/ticker?pair=XBTZAR";
 var response=UrlFetchApp.fetch(url);
  var json=response.getContentText();
  var data=JSON.parse(json);



  //getting the number of the last row
  //and placing it in an integer variable

  var lastRow = SpreadsheetApp.getActiveSheet().getLastRow();
  var nextRow = lastRow + 1;
  var cellB = "B"+ nextRow;
  var cellC = "C"+ nextRow;
  var cellD = "D"+ nextRow;
  var cellE = "E"+ nextRow;
  var cellF = "F"+ nextRow;
  var cellG = "G"+ nextRow;
  var cellH = "H"+ nextRow;
  var cellI = "I"+ nextRow;

 //Cell J is used for the exchange rate
 //this API is called at different intervals
 //so is on a seperate script

  //cells for Bitfinex
  var cellK = "K"+ nextRow;

  var cellL = "L"+ nextRow;
  var cellM = "M"+ nextRow;
  var cellN = "N"+ nextRow;
  var cellO = "O"+ nextRow;

  /*
  var cellP = "P"+ nextRow;
  var cellQ = "Q"+ nextRow;

    */




  var now = new Date();
  var currentTime = now.toLocaleTimeString();
  var currentDate = now;

  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellI)
  .setValue(currentDate);

  //Arbitrage Display
   SpreadsheetApp
  .getActiveSheet()
  .getRange('L1')
  .setValue(currentDate);

  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellB)
  .setValue(currentTime);

  //Arbitrage Display
    SpreadsheetApp
  .getActiveSheet()
  .getRange('L2')
  .setValue(currentTime);

  //Luno last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange(cellC)
  .setValue(data.last_trade);

    //Luno last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange('C4')
  .setValue(data.last_trade);

     //Luno last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange('C2')
  .setValue(data.last_trade);


  //pair
   SpreadsheetApp
  .getActiveSheet()
  .getRange(cellD)
  .setValue(data.pair);

  //timestamp
  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellE)
  .setValue(data.timestamp);

  //bid
  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellF)
  .setValue(data.bid);

    //ask
  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellG)
  .setValue(data.ask);

  //rolling_24_hour_volume
    SpreadsheetApp
  .getActiveSheet()
  .getRange(cellH)
  .setValue(data.rolling_24_hour_volume);

//BITFINEX

   /*
  Bitfinex ticker
 {"mid":"7303.85","bid":"7303.8","ask":"7303.9","last_price":"7303.9","low":"7211.1","high":"7609.5","volume":"17962.404719659997","timestamp":"1527419760.3104272"}
  */
 var urlBitF="https://api.bitfinex.com/v1/pubticker/btcusd";
 var response=UrlFetchApp.fetch(urlBitF);
  var jsonBitF =response.getContentText();
  var dataBitF=JSON.parse(jsonBitF);




  //Bitfinex last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange(cellK)
  .setValue(dataBitF.last_price);


    //last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange('K4')
  .setValue(dataBitF.last_price);

     //last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange('D2')
  .setValue(dataBitF.last_price);

  //timestamp
  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellL)
  .setValue(dataBitF.timestamp);

  //bid
  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellM)
  .setValue(dataBitF.bid);

    //ask
  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellN)
  .setValue(dataBitF.ask);

  //rolling_24_hour_volume
   SpreadsheetApp
  .getActiveSheet()
  .getRange(cellO)
  .setValue(dataBitF.volume);

   /* API from Fixer.io calling for USD to Rand canversion


  https://data.fixer.io/api/convert?access_key=[insert you own hey here]&from=USD&to=ZAR&amount=1
  responds:
  {"success":true,"query":{"from":"USD","to":"ZAR","amount":1},"info":{"timestamp":1527512649,"rate":12.451198},"date":"2018-05-28","result":12.451198}

  */

  //API key for fixer.io for rand dollar conversion

 var urlRandDol="https://data.fixer.io/api/convert?access_key=[insert you own key here]from=USD&to=ZAR&amount=1";
 var responseRandDol=UrlFetchApp.fetch(urlRandDol);
 var jsonRandDol=responseRandDol.getContentText();
 var dataRandDol=JSON.parse(jsonRandDol);

   //var jsonRandDol2=dataRandDol.getContentText();
// var dataRandDolParse2=JSON.parse(dataRandDol);
  Logger.log(dataRandDol);
  //[18-05-29 15:17:03:911 SAST] {date=2018-05-29, result=12.597603, success=true, query={amount=1, from=USD, to=ZAR}, info={rate=12.597603, timestamp=1527598450}}


  //getting the number of the last row
  //and placing it in an integer variable
  var lastRow = SpreadsheetApp.getActiveSheet().getLastRow();
  var nextRow = lastRow;

  //cell for exchange rate
  var cellJ = "J" + nextRow;

  //Exchange rate display

 SpreadsheetApp
  .getActiveSheet()
  .getRange('J4')
  .setValue(dataRandDol.result);


   SpreadsheetApp
  .getActiveSheet()
  .getRange('E2')
  .setValue(dataRandDol.result);

  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellJ)
  .setValue(dataRandDol.result);
}
