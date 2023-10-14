import { Outlet, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./Navbar"
import { Team } from "./pages/Team"
import { TeamMember } from "./pages/TeamMember"
import { TeamNav } from "./TeamNav"

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        errorElement: <h1>Error</h1>,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/store",
                errorElement: <h1>Error</h1>,
                element: <Store />,
            },
            { path: "/about", element: <About /> },
            {
                path: "/team",
                element: <TeamNavLayout />,
                children: [
                    { index: true, element: <Team /> },
                    { path: "joe", element: <TeamMember name="joe" /> },
                    { path: "sally", element: <TeamMember name="sally" /> },
                ],
            },
        ],
    },
])

function NavLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

function TeamNavLayout() {
    return (
        <>
            <TeamNav />
            <Outlet context="Hi from Outlet" />
        </>
    )
}
