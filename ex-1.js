class EmailNotification {
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

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumbmer) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumbmer = phoneNumbmer;
  }
  send() {
    console.log(`Notification had been sent to sent to ${this.phoneNumbmer}`);
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
