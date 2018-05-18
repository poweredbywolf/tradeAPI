
//I have a manual trigger function running this code every minute

function myFunction() {

 var url="https://api.mybitx.com/api/1/ticker?pair=XBTZAR";
 var response=UrlFetchApp.fetch(url);
  var json=response.getContentText();
  var data=JSON.parse(json);


  var lastRow = SpreadsheetApp.getActiveSheet().getLastRow();
  var nextRow = lastRow + 1;
  var cellC = "C"+ nextRow;


  //increment number
  SpreadsheetApp
  .getActiveSheet()
  .getRange("A1")
  .setValue(loopNumber)

  //last trade
 SpreadsheetApp
  .getActiveSheet()
  .getRange(cellC)
  .setValue(data.last_trade);


  //pair
   SpreadsheetApp
  .getActiveSheet()
  .getRange("D2")
  .setValue(data.pair);

  //timestamp
  SpreadsheetApp
  .getActiveSheet()
  .getRange("E2")
  .setValue(data.timestamp);

  //bid
  SpreadsheetApp
  .getActiveSheet()
  .getRange("F2")
  .setValue(data.bid);

    //ask
  SpreadsheetApp
  .getActiveSheet()
  .getRange("G2")
  .setValue(data.ask);

  //rolling_24_hour_volume
    SpreadsheetApp
  .getActiveSheet()
  .getRange("H2")
  .setValue(data.rolling_24_hour_volume);

  loopNumber++
   Logger.log(loopNumber)
   Logger.log(cellNumber)
   Logger.log(cellC)
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
