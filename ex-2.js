class Notification {
  constructor(notificationId, createdTime, content, reciever) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.reciever = reciever;
  }
  send() {
    console.log(`Notification has been sent to ${this.reciever}`);
  }
}

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, reciever) {
    super(notificationId, createdTime, content, reciever);
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, reciever) {
    super(notificationId, createdTime, content, reciever);
  }
}

const emailNotification = new EmailNotification(
  "1",
  "00.00",
  "Hello",
  "techup@example.com"
);
const smsNotification = new SMSNotification(
  "2",
  "00.00",
  "Hello",
  "999999999"
);
emailNotification.send();
smsNotification.send();
