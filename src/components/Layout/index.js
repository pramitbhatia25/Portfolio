import { Outlet } from "react-router";
import SideBar from "../SideBar";
import "./index.scss";

const Layout = () => {
    return <div className="App">
        <SideBar />
        <div className="page">
            <span className="tags top-tags">
                <span className="top-tag-html">
                    &lt;html&gt; 
                </span>
                <br /> 
                &lt;body&gt;
            </span>
            <Outlet />
            <span className="tags bottom-tags">
            &lt;/body&gt;
            <br /> 
                <span className="bottom-tag-html">
                    &lt;/html&gt; 
                </span>
                <br />
            </span>
        </div>
    </div>
}

export default Layout;