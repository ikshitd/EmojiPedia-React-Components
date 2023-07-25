import React from "react"; 
import Banner from "./Banner"; 
import Logo from "./Logo"; 
import CardBody from "./CardBody"; 
import Footer from "./Footer"; 



const Card = (props) => {
	return (
	<div className = "Card">
		<Banner /> 
		<Logo src = {props.logo} />
		<header className = "card-body-header"> {props.logo} {props.name} </header>
		<CardBody text = {props.meaning} /> 
		<Footer logo = {props.logo}/>
	</div>); 
}; 

export default Card; 