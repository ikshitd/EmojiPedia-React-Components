import './App.css';
import emojipedia from "./emojipedia";
import Card from "./Components/Card"; 
import Header from "./Components/Header"; 
import SearchForm from "./Components/SearchForm"; 

const createTag = (entry) => {
  return (
    <Card 
      key = {entry.id}
      logo = {entry.emoji}
      name = {entry.name}
      meaning = {entry.meaning}
    />
  );
}; 


function App() {
  return (
    <div>
      <Header />  
      <div style = {{position: "relative", marginLeft: "360px"}}> <SearchForm /> </div> 
      <div style = {{position: "relative", marginLeft: "500px"}}> {emojipedia.map(createTag)}  </div>
    </div>  
  );
}
export default App;
