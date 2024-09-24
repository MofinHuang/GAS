const LINE_CHANNEL_ACCESS_TOKEN = 'GXMcQVZp6p+J8nWNTZGSzRUOQdi5XSqjtd4+RsaB0ffpTpc+9HsD8WH/JY2cWdn4zmN3P2Tgsp5mMrQTf+iqA5bJXETcYS1QVbPKIYvsCnf5C0Igdo53w6GRZSneZEIAkxGULWstjcJkInwDzzVOeAdB04t89/1O/w1cDnyilFU=';
const GOOGLE_SHEET_ID = '1s66PrpkHCcXc1FxAu3_4AkK3TC817kOR5OmREanRyh4';

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
