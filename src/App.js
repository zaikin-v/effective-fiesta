import './App.css';
import {Cart, Discipline, Disciplines, Home, Students, WorkPage} from "./pages";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Outlet,
    Navigate
} from "react-router-dom";
import {Header} from "./components";
import LoginForm from "./components/LoginForm";
import {useSelector} from "react-redux";
import Profile from "./components/Profile";


function RequireAuth() {
    const { isLoggedIn } = useSelector((state) => state.auth);
    let location = useLocation();

    if (!isLoggedIn) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Students />} />
                    {/* <Route path="/dis" key="disc" element={<Dis />} /> */}
                <Route path="/groups" key="groups" element={<Students />} />
                <Route path="/disciplines" key="disciplines" element={<Disciplines />} />
                <Route path="/profile" element={<Disciplines />} />
                <Route path="/disciplines/:id" element={<Discipline />} />
                <Route path="/student/:studentId/work/:workId" element={<WorkPage />} />
                <Route path="/login" element={<LoginForm />} />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
