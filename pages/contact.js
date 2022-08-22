import Link from "next/link";

const Contact = () => (
    <>
        <section className="breadcrumb-section">
            <h2 className="sr-only">Site Breadcrumb</h2>
            <div className="container">
                <div className="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href={'/'}>
                                <a>Главная</a>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">Контакты</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>

        <main className="contact_area inner-page-sec-padding-bottom">
            <div className="container">

                <div className="row mt--60 ">
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="contact_adress">
                            <div className="ct_address">
                                <h3 className="ct_title">Адреса, контакты</h3>
                                <p>Мы работем на территории г. Канска и канского района.</p>
                            </div>
                            <div className="address_wrapper">
                                <div className="address">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="contact-info-text">
                                        <p><span>Адреса:</span> 663600, г. Канск <br /> Канский район</p>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="icon">
                                        <i className="far fa-envelope" />
                                    </div>
                                    <div className="contact-info-text">
                                        <p><span>Email: </span> prokanskpetrov@yandex.ru </p>
                                    </div>
                                </div>
                                <div className="address">
                                    <div className="icon">
                                        <i className="fas fa-mobile-alt" />
                                    </div>
                                    <div className="contact-info-text">
                                        <p><span>Тел:</span> +7(991)500-27-12 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-12 mt--30 mt-md--0">
                        <div className="contact_form">
                            <h3 className="ct_title">Форма для сообщений</h3>
                            <form id="contact-form" method="post" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Введите имя <span className="required">*</span></label>
                                            <input type="text" id="con_name" name="con_name" className="form-control"
                                                   required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Введите Email <span className="required">*</span></label>
                                            <input type="email" id="con_email" name="con_email" className="form-control"
                                                   required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Введите номер телефона*</label>
                                            <input type="text" id="con_phone" name="con_phone" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Напечатайте сообщение</label>
                                            <textarea id="con_message" name="con_message"
                                                      className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-btn">
                                            <button type="submit" value="submit" id="submit" className="btn btn-black"
                                                    name="submit">Отправить
                                            </button>
                                        </div>
                                        <div className="form__output" />
                                    </div>
                                </div>
                            </form>
                            <div className="form-output">
                                <p className="form-messege" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
)
export default Contact;