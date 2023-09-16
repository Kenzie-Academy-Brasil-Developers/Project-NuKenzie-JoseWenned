import { Link } from "react-router-dom"
import style from "./style.module.scss"

export const HomePage = () => {
    return(
        <header className={style.containerHeader}>
            <h1 className={style.titleMain}>Nu <span className={style.titleMainSpan}>Kenzie</span></h1>
            <p className={style.paragraphMain}>Centralize control of your finances</p>
            <p className={style.paragraphSecondary}>quickly and safely</p>

            <Link to={"/HomeRegister"}><button className={style.buttonStart} type="submit">Start</button></Link>
        
        </header>
    )
}