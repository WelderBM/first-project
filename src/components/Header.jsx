import style from "./Header.module.css"

import ignitLogo from "../assets/ign=nite-logo.svg"

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={igniteLogo} alt="logo ignite" />
        </header>
    )
}