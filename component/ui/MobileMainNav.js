import Link from "next/link";

const MobileMainNav = () => (
    <>
        <li className="menu-item-has-children">
            <Link href={'/'}>
            <a>Главная</a>
            </Link>
        </li>
        <li className="menu-item-has-children">
            <Link href={'/shop/'}>
            <a>Магазин</a>
            </Link>
        </li>
        <li className="menu-item-has-children">
            <a href="#">Блог</a>
            <ul className="sub-menu">
                <li className="menu-item-has-children">
                    <Link href={'blog'}>
                        <a>Объявления</a>
                    </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href={'/fivekanal'}>
                    <a>Объявления 5 канал</a>
                    </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href={'/limontv'}>
                        <a>Объявления Лимон ТВ</a>
                    </Link>
                </li>

            </ul>
        </li>

        <li>
            <Link href={'/contact/'}>
            <a href="contact.html">Контакты</a>
            </Link>
        </li>
    </>
)

export default MobileMainNav;