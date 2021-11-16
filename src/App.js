import News from './components/News';
import Navbar from './components/Navbar';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar-app">
          <Navbar />
        </div>
        <div className="news-app">
          <Routes>         
            <Route exact path="/business" element={<News key="business" categories="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" categories="entertainment" />}></Route>
            <Route exact path="/" element={<News key="general" categories="general" />}></Route>
            <Route exact path="/health" element={<News key="health" categories="health" />}></Route>
            <Route exact path="/science" element={<News key="science" categories="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" categories="sports" />}></Route>
            <Route exact path="/technology" element={<News key="technology" categories="technology" />}></Route>
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

