class Notification {
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

class EmailNotification extends Notification {}

class SMSNotification extends Notification {}

let email = new EmailNotification (1, new Date(), 'Your email has notifications.', 'pangton@gmail.com');
let phoneNumber = new SMSNotification (1, new Date(), 'Your SMS has notifications.', '0912345678');

email.send()
phoneNumber.send()