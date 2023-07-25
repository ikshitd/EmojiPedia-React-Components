import React from "react"; 
import NewOption from "./NewOption"; 

const Header = () => {
	return (
		<div className = "header">
			<div className = "emojipedia-heading"> <strong> EMOJIPEDIA </strong> </div> 
			<div id = "options"> 
				<h2 className = "options-heading"> <strong> CATEGORIES </strong> </h2> 
				<NewOption option = "🥰 Emoticons and People"/> 
				<NewOption option = "🐱 Animals and Nature"/>
				<NewOption option = "🥭 Food and drink"/> 
				<NewOption option = "🥭 Activities"/> 
				<NewOption option = "🚕 Travel and Places"/> 
				<NewOption option = "📺 Objects"/> 
				<NewOption option = "💓 Symbols"/>
			</div> 
		</div> 
	); 
}; 


export default Header; 