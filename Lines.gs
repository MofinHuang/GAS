// *****主要提供Line相關作業*****
// (1).回覆訊息(Reply)
function LineReply(replyToken, msg) {
  var positions = [];
  var regex = /\$/g;
  var match;
  while ((match = regex.exec(msg)) !== null) {
      positions.push(match.index);
  }
  //msg += " " + positions[0] + " " + positions[1] + " " + positions[2];
  var payload = {
      "replyToken": replyToken,
      "messages": [{
        "type": "text",
        "text": msg,
        "emojis": [{
          "index": positions[0],
          "productId": "5ac21a18040ab15980c9b43e",
          "emojiId": "063"
        },
        {
          "index": positions[1],
          "productId": "5ac21ae3040ab15980c9b440",
          "emojiId": "067"
        },
        {
          "index": positions[2],
          "productId": "5ac21ae3040ab15980c9b440",
          "emojiId": "067"
        }]        
      }]
    };

    var options = {
      "method": "post",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + LINE_CHANNEL_ACCESS_TOKEN
      },
      "payload": JSON.stringify(payload)
    };

    UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", options);
}
// (2).推播訊息(Push)
function LinePush(userId, msg) {
  var positions = [];
  var regex = /\$/g;
  var match;
  while ((match = regex.exec(msg)) !== null) {
      positions.push(match.index);
  }
  //msg += " " + positions[0] + " " + positions[1] + " " + positions[2];  
  var payload = {
      "to": userId,
      "messages": [{
        "type": "text",
        "text": msg,
        "emojis": [{
          "index": positions[0],
          "productId": "5ac21a18040ab15980c9b43e",
          "emojiId": "064"
        },
        {
          "index": positions[1],
          "productId": "5ac21ae3040ab15980c9b440",
          "emojiId": "067"
        },
        {
          "index": positions[2],
          "productId": "5ac21ae3040ab15980c9b440",
          "emojiId": "067"
        }]   
      }]
    };

    var options = {
      "method": "post",
      "headers": {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + LINE_CHANNEL_ACCESS_TOKEN
      },
      "payload": JSON.stringify(payload)
    };

    UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", options);  
}
