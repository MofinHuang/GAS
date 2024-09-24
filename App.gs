function doPost(e) {
  var json = JSON.parse(e.postData.contents);
  var events = json.events;
  var event = events[0];
  var _line = new LineClass(event);
    // 取得Google試算表
  var spreadsheet = SpreadsheetApp.openById(GOOGLE_SHEET_ID);
  SheetSaveLog(spreadsheet, _line);
  var _replyToken = _line.getReplyToken();
  var _userId = _line.getUserId();
  var _msg = _line.getMessageText();
  let splitText = _msg.split(",");
  if(splitText[0] === "[AB]") {
    var _result = SheetSaveAccountingBook(spreadsheet, _msg);
    let _resultSplit = _result.split("|");
    if(_resultSplit[0] === "OK") {
      LinePush(_userId, _resultSplit[1]);
    } else {
      LineReply(_replyToken, _resultSplit[1]);
    }
  }
}
