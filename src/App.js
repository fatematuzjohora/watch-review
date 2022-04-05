import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./component/Blogs/Blogs"
import Dashboard from "./component/Dashboard/Dashboard"
import Error from "./component/Error/Error"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"
import Reviews from "./component/Reviews/Reviews"

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;