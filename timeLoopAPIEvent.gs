
function myFunction() {

 var url="https://api.mybitx.com/api/1/ticker?pair=XBTZAR";
 var response=UrlFetchApp.fetch(url);
  var json=response.getContentText();
  var data=JSON.parse(json);





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

  SpreadsheetApp
  .getActiveSheet()
  .getRange(cellB)
  .setValue(currentTime);


  //Luno last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange(cellC)
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
  .getRange('K2')
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
}

/*"pair":"XBTZAR","timestamp":1526507382674,"bid":"108373.00","ask":"108374.00","last_trade":"108373.00","rolling_24_hour_volume":"472.792099"*/

/* function createTimeDrivenTriggers() {
  // Trigger every 1 min
  ScriptApp.newTrigger('myFunction')
      .timeBased()
      .everyHours()
  .everyMinutes(1)
      .create();
}

/* https://developers.google.com/apps-script/guides/triggers/installable

function createTimeDrivenTriggers() {
  // Trigger every 1 min
  ScriptApp.newTrigger('myFunction')
      .timeBased()
      .everyHours()
  .everyMinutes(1)
      .create();
}

*/
