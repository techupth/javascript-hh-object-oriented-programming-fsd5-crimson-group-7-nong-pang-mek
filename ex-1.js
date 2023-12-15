class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const paranaiEmail = new EmailNotification(
  "001",
  new Date(),
  "This is email notification message",
  "papapaparrrranaiiii@gmail.com"
);
const paranaiSMS = new SMSNotification(
  "001",
  new Date(),
  "This is SMS notification message",
  "0987654321"
);

paranaiEmail.send();
paranaiSMS.send();
