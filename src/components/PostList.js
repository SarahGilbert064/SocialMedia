import React from 'react'; 
import Post from './Post'; 

const masterPostList = [
  {
    name: "Joe",
    date: "2/8/2021", 
    content: "I don't want to go to the career services meeting today.",
    imgUrl: require("./../img/GooseSelfie.jpg")
  },
  {
    name: "Alfred",
    date: "1/22/2021",
    content: "Will be feeding the ducks at the pond in an hour.",
    imgUrl: require("./../img/manBird.png")
  },
  {
    name: "Penny",
    date: "12/25/2021",
    content: "Got the movie Fly Away Home for Xmas #blessed",
    imgUrl: require("./../img/goose.webp")
  }
]

function PostList() {
  return (
    <React.Fragment>
      <hr/>
      {masterPostList.map((post, index) =>
        <Post name={post.name}
          date={post.date}
          content={post.content}
          imgUrl={post.imgUrl}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;