import React from 'react'; 
import PropTypes from 'prop-types'; 
import gooseMan from "./../img/GooseSelfie.jpg"; 

function Post(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.date}</h3>
      <p><center>{props.content}</center></p>
      <img src={props.imgUrl} />
      <hr/>
    </React.Fragment> 
  );
}

Post.propTypes = { 
  name: PropTypes.string, 
  date: PropTypes.string, 
  content: PropTypes.string, 
  imgUrl: PropTypes.string, 
}

export default Post; 