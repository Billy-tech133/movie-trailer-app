import "./App.css";
import "./App.css";
import Row from "./Row";
import request from "./request";
function App() {
  return (
    <div className="App">
      <h1>Lets build netflix</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
    </div>
  );
}

export default App;