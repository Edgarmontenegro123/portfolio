import {Route, Routes} from "react-router-dom";
import Layout from './Views/Layout/Layout.jsx';
import Home from "./Views/Home/Home.jsx";
import Projects from "./Views/Projects/Projects.jsx";
import Skills from "./Views/Skills/Skills.jsx";
import Contact from "./Views/Contact/Contact.jsx";
import Const_Routes from "./Constants/Const_Routes.jsx";

function NotFound() {
    return(
        // ¡Cambiar por un gif!
        <h1>Not found!</h1>
    );
}
const App = () => {
    return (
        <>
            <Layout/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={Const_Routes.projects} element={<Projects/>}/>
                <Route path={Const_Routes.skills} element={<Skills/>}/>
                <Route path={Const_Routes.contact} element={<Contact/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </>
    );
}
export default App