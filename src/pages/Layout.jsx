import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
    return (
        <>
            <Navbar />{/** This Navbar is the shared ui we want to across pages*/}
            <Outlet /> {/** The actual page which will be renderd along with navbar*/}
        </>

    )

}
export default MainLayout;

