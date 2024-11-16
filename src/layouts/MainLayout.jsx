import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const MainLayout = () => {
    return (
        <div className="">
            <div className="">
                <header className="absolute z-10 w-full py-5">
                    <nav>
                    <Navbar></Navbar>
                    </nav>
                </header>
                <main>
                    <section>
                        <Outlet></Outlet>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default MainLayout