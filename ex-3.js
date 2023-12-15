//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(post) {
    this.post = post || [];
  }
  addPost(textPost) {
    return this.post.push(textPost);
  }
  sharePost(postTitleShared) {
    console.log(`You've shared post ${postTitleShared} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment || [];
  }
  addComment(textComment) {
    return this.comment.push(textComment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like || 0;
  }
  addLike() {
    return (this.like += 1);
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList || [];
    this.pageList = pageList || [];
  }
  addGroup(groupName) {
    return this.groupList.push(groupName);
  }
  addList(groupList) {
    return this.pageList.push(groupList);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(commentCreateBy, postCommentTitle) {
    console.log(
      `Notification: ${commentCreateBy} has just commented on this post—"${postCommentTitle}"`
    );
  }
}

let newUser = new User("001", "Paranai", "papapaparrrranaiiii@gmail.com");
console.log(newUser);

let newPostList = new PostList();
newPostList.addPost("henlo my fren");
newPostList.addPost("It's nice to see ya");
console.log(newPostList);
newPostList.sharePost(2);

let newPost = new Post("001", "Henlo", "Nice to meet yuu");
newPost.addComment("It's nice to see ya");
console.log(newPost);

let newComment = new Comment("001", "Henlo my little fren", "Nong");
newComment.addLike();
newComment.addLike(5);
console.log(newComment);

let newGroupAndPage = new Facebook();
newGroupAndPage.addGroup("TechUp");
newGroupAndPage.addList("Tech");
console.log(newGroupAndPage);

let newFacebookPage = new FacebookPage("TechUp & Friends");
console.log(newFacebookPage);

let newFacebookGroup = new FacebookGroup("Friends & TechUp");
console.log(newFacebookGroup);

let NewNotification = new Notification("001");
NewNotification.send("Banana Cat", "How to Dance Happy happy happy dance");
