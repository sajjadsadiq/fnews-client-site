import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Footer } from "./Componentes/Footer/Footer";
import { Navbar } from "./Componentes/Navbar/Navbar";
import { Posts } from "./Componentes/Posts/Posts";
import { AddPost } from "./Pages/AddPost/AddPost";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Settings } from "./Pages/Settings/Settings";
import { SinglePost } from "./Pages/SinglePost/SinglePost";


function App() {
  const user = false;
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/single/:singlePostId">
            <SinglePost/>
        </Route>
        <Route path="/addPost">
          {user? <AddPost/>:<Login/>}
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/login">
          {user? <Posts/>:<Login/>}
        </Route>
        <Route path="/register">
          {user? <Posts/>:<Register/>}
        </Route>
        <Route expect path="/">
          <Posts/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
