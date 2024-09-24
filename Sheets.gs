// *****主要提供Google Sheet相關作業*****
// (1).訊息紀錄表
function SheetSaveLog(spreadsheet, line) {
  var result = false;
  var _eventType = line.getEventType();
  var _replyToken = line.getReplyToken();
  var _userId = line.getUserId();
  var _userType = line.getUserType();
  var _timestamp = line.getTimestamp();
  var _messageType = line.getMessageType();
  var _messageId = line.getMessageId();
  var _messageText = line.getMessageText();
  // 紀錄收到的訊息
  var sheet = spreadsheet.getSheetByName('LineRecord');
  sheet.insertRowAfter(1);
  var _valueForLog = [[getNowDateTime(), 
                      _eventType, 
                      _replyToken, 
                      _userId, 
                      _userType, 
                      _timestamp, 
                      _messageType, 
                      _messageId, 
                      _messageText]];
  sheet.getRange("A2:I2").setValues(_valueForLog);
  sheet.getRange("A2:I2").setBackgroundRGB(255, 255, 255);
  result = true;
  return result;
}
// (2).儲存記帳本(AccountingBook)
function SheetSaveAccountingBook(spreadsheet, msg) {  
  var result = "";
  result += "\n依序為[AB],分類,項目,收支金額,備註";
  result += "\n[AB]: 固定開頭，指記帳本(AccountingBook)";
  result += "\n分類: 食衣住行育樂";
  result += "\n項目: 費用自行描述";
  result += "\n收支金額: 填寫數字，需有+/-區分";
  result += "\n備註: 可以空白";
  let _typeText = ["食","衣","住","行","育","樂"];
  // 解析訊息
  let splitText = msg.split(",");
  if(splitText.length !== 5) {
    result = "NG|$ 資料長度不對要有5欄資料 $ $" + result;
    return result;
  }
  if (!_typeText.includes(splitText[1])) {
    result = "NG|$ 分類錯誤 $ $" + result;
    return result;
  }
  if (!isFloat(splitText[3])) {
    result = "NG|$ 收支金額錯誤 $ $" + result;
    return result;
  }  
  var _cost = stringToFloat(splitText[3]);
  // 紀錄到 記帳本(AccountingBook)
  var sheet = spreadsheet.getSheetByName('AccountingBook');
  sheet.insertRowAfter(1);
  var _date = getNowDate();
  var _time = getNowTime();
  var _abType = splitText[1];
  var _abItem = splitText[2];
  var _abCost = _cost;
  var _abDesc = splitText[4];
  var _valueForAb = [[_date, _time, _abType, _abItem, _abCost, _abDesc]];
  sheet.getRange("A2:F2").setValues(_valueForAb);
  sheet.getRange("A2:F2").setBackgroundRGB(255, 255, 255);
  sheet.getRange("E2").setNumberFormat('[$$]#,##0');
  if(_cost > 0) {
    sheet.getRange("E2").setFontColor('#0000ff');
  } else {
    sheet.getRange("E2").setFontColor('#ff0000');
  }
  result = "OK|$ 已記錄至記帳本(AccountingBook) $ $";
  return result;
}
