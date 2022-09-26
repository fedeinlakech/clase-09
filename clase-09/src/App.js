import "./App.css";
import Header from "./Components/Header/Header.js";
import List from "./Components/List/List.js";
import Button from "./Components/Button/Button.js";
import Video from "./Components/Video/Video";
import Audio from "./Components/Audio/Audio";


function App() {
  return (
    <div className="App">
      <Button />
      <Header />
      <List />
      <Video />
      <Audio />
    </div>
  );
}

export default App;
