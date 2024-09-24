class LineClass {
  constructor(event) {
    this.eventType = event.type;
    this.replyToken = event.replyToken;
    this.userId = event.source.userId;
    this.userType = event.source.type;
    this.timestamp = event.timestamp;
    this.messageType = event.message.type;
    this.messageId = event.message.id;
    this.messageText = event.message.text;
  }
  getArray() {
    return [[getNowDateTime(), 
            this._eventType, 
            this._replyToken, 
            this._userId, 
            this._userType, 
            this._timestamp, 
            this._messageType, 
            this._messageId, 
            this._messageText]];
  }  
  getEventType() {
    return this.eventType;
  }
  getReplyToken() {
    return this.replyToken;
  }
  getUserId() {
    return this.userId;
  }
  getUserType() {
    return this.userType;
  }  
  getTimestamp() {
    return this.timestamp;
  }
  getMessageType() {
    return this.messageType;
  }
  getMessageId() {
    return this.messageId;
  }
  getMessageText() {
    return this.messageText;
  }  
}
