import React from "react"; 
import ReactDOM from "react-dom"; 

const customStyling = {
	display: "inline-block", 
	height: "30px", 
}; 

const Entry = (props) => {
	return (
	<div>
        <dl className="dictionary">
          <div className="term">
            <dt>
              <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
              </span>
              <span>{props.name}</span>
            </dt>
            <dd>
            	{props.meaning}
            </dd>
          </div>
        </dl>
    </div>
    ); 
}; 

export default Entry; 