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
                    <a href="#">Объявления</a>
                </li>
                <li className="menu-item-has-children">
                    <a href="#">Объявления 5 канал</a>
                </li>
                <li className="menu-item-has-children">
                    <a href="#">Объявления Лимон ТВ</a>
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