const LINE_CHANNEL_ACCESS_TOKEN = '輸入Line_channel_access_token';
const GOOGLE_SHEET_ID = '輸入Google試算表Id';

function getNowDateTime() {
  var now = new Date();
  var formattedDate = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss.SSS');
  return formattedDate;
}

function getNowDate() {
  var now = new Date();
  var formattedDate = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  return formattedDate;
}

function getNowTime() {
  var now = new Date();
  var formattedDate = Utilities.formatDate(now, Session.getScriptTimeZone(), 'HH:mm:ss');
  return formattedDate;
}

function isEmpty(str) {
  return (!str || str.length === 0);
}

function isFloat(str) {
  // 將文字轉換為數字
  let number = parseFloat(str);
  // 檢查是否為數字
  return !isNaN(number);
}

function stringToFloat(str) {
  return parseFloat(str);
}
