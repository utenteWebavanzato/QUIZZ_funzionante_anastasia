import {Outlet} from "react-router-dom";

export default function Layout() {
    return<>
    <p>Wrapping intorno al resto della pagina, esclusa la navbar</p>
    <br></br>
    <Outlet/>
 </>
 }
