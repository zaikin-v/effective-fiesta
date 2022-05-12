import './App.css';
import {Home, Products} from "./pages";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Header} from "./components";
import LoginForm from "./components/LoginForm";


function App() {
  return (
    <div className="App">
      {/*<Products/>*/}
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} exact>
                </Route>
                <Route path="/cats" element={<Products />} exact/>
                <Route path="/dogs" element={<Products />} exact/>
                <Route path="/bird" element={<Products />} exact/>
                <Route path="/rodents" element={<Products />} exact/>
                <Route path="/login" element={<LoginForm />} exact/>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
