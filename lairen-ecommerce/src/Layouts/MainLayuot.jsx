import { Outlet } from "react-router-dom"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"

export const MainLayout = () => {
    return <section>
        <Header />
        {/* acá podria ir el main y sacarlo de algun otro componente. que quede solo acá*/}
        <div>
            <Outlet />
        </div>
        <Footer />
        
    </section>
}