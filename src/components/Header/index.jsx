import style from "./style.module.scss"

export const Header = () => {
    return(
        <header className={style.constainerHeader}>

            <div className={style.container}>
                <div className={style.containerDivHeader}>
                    <h1 className={style.titleMain}> <span className={style.titleSpan}>Nu</span> Kenzie</h1>
                </div>
            </div>

        </header>
    )
}