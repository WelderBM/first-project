import style from "./Header.module.css"

import ignitLogo from "../assets/ignite-logo.svg"

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={ignitLogo} alt="logo ignite" />
        </header>
    )
}