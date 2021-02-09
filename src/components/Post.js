import React from 'react'; 
import PropTypes from 'prop-types'; 
import gooseMan from "./../img/GooseSelfie.jpg"; 

function Post(props) {
  return (
    <React.Fragment>
      <h3 className="postHeader">{props.name} - {props.date}</h3>
      <p><center>{props.content}</center></p>
      <img className="photo" src={props.imgUrl} />
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