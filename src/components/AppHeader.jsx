import { NavLink } from "react-router-dom"
import menu from "../data/Menu"

export default function AppHeader() {

    return (
        <header>
            {menu.map(navItem => (
                <NavLink key={navItem.id} to={navItem.path}>{navItem.text}</NavLink>
            ))}
        </header>
    )
}