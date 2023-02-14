import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieDetail from './pages/MovieDetail';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    <Route exact path="/"><Home /></Route>
    <Route exact path="/Details/:id"><MovieDetail /></Route>
 
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
