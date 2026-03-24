import Layout from "../Layout"
import Overview from "../pages/Overview"
import Tickets from "../pages/Tickets"

export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Overview /> },
            { path: "tickets", element: <Tickets /> }
        ]
    }
]