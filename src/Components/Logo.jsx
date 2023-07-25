import React from "react"; 


const Logo = (props) => {
	return (
		<div className = "logo"> 
			<p className = "emojiLogo"> {props.src} </p> 
		</div> 
	)
}; 

export default Logo; 