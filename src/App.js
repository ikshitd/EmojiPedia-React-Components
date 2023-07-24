import logo from './logo.svg';
import './App.css';
import Entry from "./Components/Entry"; 
import Heading from "./Components/Heading"; 
import emojipedia from "./emojipedia";

const createEntry = (entry) => {
  return (
    <Entry 
      key = {entry.key}
      name = {entry.name}
      emoji = {entry.emoji}
      meaning = {entry.meaning}
    />
  ); 
}; 

function App() {
  return (
    <div>
    <Heading /> 
    {emojipedia.map(createEntry)}
   </div>
  );
}

export default App;
