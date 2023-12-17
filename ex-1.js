class EmailNotification {
constructor(notificationId, createdTime, content, receiver){
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
    constructor(notificationId, createdTime, content, phoneNumber){
        this.notificationId = notificationId;
          this.createdTime = createdTime;
          this.content = content;
          this.phoneNumber = phoneNumber;
 }
 send() {
console.log(`Notification has been sent to ${this.phoneNumber}`);
}  
}

let email = new EmailNotification (1, new Date(), 'Your email has notifications.', 'pangton@gmail.com');
let phoneNumber = new SMSNotification (1, new Date(), 'Your SMS has notifications.', '0912345678');

email.send()
phoneNumber.send()