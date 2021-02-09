import React from "react";
import Header from "./Header.js"; 
import PostList from "./PostList.js"

function App() {
  return (
    <React.Fragment>
    <div className='row'>
      <div className ='col-4'>
        <div className='box1'>
          <Header />
        </div>
      </div>
      <div className='col-4'>
        <PostList />
      </div>
    </div>
    </React.Fragment>

  );
}


export default App;
