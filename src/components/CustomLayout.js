import { Outlet } from "react-router-dom"

const CustomLayout = () => {
    return (
        <main className="App">
            <Outlet />
        </main>
    )
}

export default CustomLayout;