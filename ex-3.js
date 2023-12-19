//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
class PostList {
  constructor() {
    this.posts = [];
  }
  addpost(post) {
    this.posts.push({
      id: this.posts.length + 1,
      title: post.title,
      content: post.content,
      comment: post.comment,
    });
  }
  sharePost(postId) {
    console.log(
      `You shared post "${this.posts[postId - 1].title}" to your friend.`
    );
  }
}
class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = [];
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}
class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike() {
    this.like += 1;
  }
}
class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
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
  send(comment, post) {
    console.log(
      `Notification: ${comment.createdBy.name} has just commented on this post-${post.title} `
    );
  }
}
const mek = new User(1, "Mek", "mek@example.com");

const postList = new PostList();
console.log(postList);

const firstPost = new Post(1, "My first post", "This post content");
console.log(firstPost);

const firstComment = new Comment(1, "First comment", mek);
console.log(firstComment);

firstComment.addLike();
firstComment.addLike();
console.log(firstComment.like);

postList.addpost(firstPost);
console.log(postList.posts);

firstPost.addComment(firstComment);
console.log(firstPost.comments);

postList.sharePost(1);

const facebook = new Facebook();

const facebookPage = new FacebookPage("My first page");

const facebookGroup = new FacebookGroup("My first group");

facebook.addPage(facebookPage);
facebook.addGroup(facebookGroup);

console.log(facebook.pageList);
console.log(facebook.groupList);

const notification = new Notification();
notification.send(firstComment, firstPost);
