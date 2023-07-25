import React from "react"; 

const Footer = (props) => {
	return (
		<footer className = "footer">
			<button className = "meaning-button"> {props.logo} Add Meaning </button>  
		</footer> 
	)
}; 

export default Footer; 