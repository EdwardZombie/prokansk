import React from "react";
import Link from "next/link";

const LeftBlogMenu = () => (
    <div className="col-lg-3">
        <div className="inner-page-sidebar">


            <div className="single-block ">
                <h2 className="sidebar-title mb--30">Быстрое меню</h2>
                <ul className="sidebar-list">
                    <li>
                        <Link href={'/shop'}>
                            <a>
                                Онлайн продукты
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href={'/fivekanal'}>
                            <a>
                                Объявления 5-го канала
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/limontv'}>
                            <a>
                                Объявления Лимон ТВ
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>


            <div className="single-block">
                <Link href={'/vacancy'}>
                    <a className="promo-image sidebar">
                        <img src="/image/deliveryerMain.png" alt="Вакансии нашей компании в Канске" />
                    </a>
                </Link>
            </div>
        </div>
    </div>
)

export default LeftBlogMenu;