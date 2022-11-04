import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Link to="/"> Home </Link>
                    <Link to="/login"> Login </Link>
                    <Link to="/contact"> Contact </Link>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;