import Link from "next/link";

const Footer = () => (
    <footer className="site-footer">
        <div className="container">
            <div className="row justify-content-between  section-padding">
                <div className=" col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-footer pb--40">
                        <div className="brand-footer footer-title">
                            <img src="/image/logo--footer.png" alt="" />
                        </div>
                        <div className="footer-contact">
                            <p><span className="label">Доставка:</span><span className="text">Доставим продукты в Канск и Канский район</span></p>
                            <p><span className="label">Тел:</span><span className="text">+7 (991) 500-27-12</span></p>
                            <p><span className="label">Почта:</span><span className="text">prokanskpetrov@yandex.ru</span></p>
                        </div>
                    </div>
                </div>
                <div className=" col-xl-3 col-lg-2 col-sm-6">
                    <div className="single-footer pb--40">
                        <div className="footer-title">
                            <h3>Часы работы</h3>
                        </div>
                       

                        <ul className="footer-list normal-list">
                            <li>Пн 09:00 - 23:00</li>
                            <li>Вт 09:00 - 23:00</li>
                            <li>Ср 09:00 - 23:00</li>
                            <li>Чт 09:00 - 23:00</li>
                            <li>Пт 09:00 - 23:00</li>
                            <li>Сб 10:00 - 22:00</li>
                            <li>Вс 11:00 - 21:00</li>
                        </ul>

                    </div>
                </div>
                <div className=" col-xl-3 col-lg-2 col-sm-6">
                    <div className="single-footer pb--40">
                        <div className="footer-title">
                            <h3>Информация</h3>
                        </div>
                        <ul className="footer-list normal-list">
                            <li><a href="">Доставка</a></li>
                            <li><a href="">Оплата</a></li>
                            <li><a href="">О нас</a></li>
                            <li>
                                <Link href={'/contact'}>
                                    <a>
                                        Контакты
                                    </a>
                                </Link>
                            </li>
                            <li><a href="">Карта сайта</a></li>
                        </ul>
                    </div>
                </div>
                <div className=" col-xl-3 col-lg-4 col-sm-6">
                    <div className="footer-title">
                        <h3>Newsletter Subscribe</h3>
                    </div>
                    <div className="newsletter-form mb--30">
                        <form action="./php/mail.php">
                            <input type="email" className="form-control" placeholder="Enter Your Email Address Here..." />
                                <button className="btn btn--primary w-100">Subscribe</button>
                        </form>
                    </div>
                    <div className="social-block">
                        <h3 className="title">STAY CONNECTED</h3>
                        <ul className="social-list list-inline">
                            <li className="single-social facebook"><a href=""><i
                                className="ion ion-social-facebook" /></a>
                            </li>
                            <li className="single-social twitter"><a href=""><i className="ion ion-social-twitter" /></a>
                            </li>
                            <li className="single-social google"><a href=""><i
                                className="ion ion-social-googleplus-outline" /></a></li>
                            <li className="single-social youtube"><a href=""><i className="ion ion-social-youtube" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <p className="copyright-heading">Любой вид расчета: наличные, карта, QR-код, перевод и пр.</p>
                <a href="#" className="payment-block">
                    <img src="/image/icon/payment.png" alt="" />
                </a>
                <p className="copyright-text">© 2019 <a target={'_blank'} href="http://zoomcode.ru" className="author">zoomcode.ru</a>. Все права защищены.
                    <br />
                        Разработка zoomcode.ru</p>
            </div>
        </div>

    </footer>
);

export default Footer;