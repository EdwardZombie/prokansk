import {useRouter} from "next/router";
import Link from "next/link";
import LeftBlogMenu from "../../component/ui/LeftBlogMenu";

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    var a = new Date(datum);
    var months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = year + ' ' + month + ' ' + date;
    return time;
}

export default function Blog5one({user}) {
    const {query} = useRouter()
    return (
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
                                <li className="breadcrumb-item">
                                    <Link href={'/limontv'}>
                                        <a>Бегущая Лимон ТВ</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">{user.name}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="inner-page-sec-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-lg-2 mb--40 mb-lg--0">
                            <div className="blog-post post-details mb--50">


                                <div className="blog-content mt--30">
                                    <header>
                                        <h3 className="blog-title"> {user.name}</h3>
                                        <div className="post-meta">
										<span className="post-author">
											<i className="fas fa-user" />
											<span className="text-gray">Опубликовал: </span> бот Аня
										</span>
                                            <span className="post-separator">|</span>
                                            <span className="post-date">
											<i className="far fa-calendar-alt" />
											<span className="text-gray">Дата: </span> {toTimestamp(user.created_at.toString())}
										</span>
                                        </div>
                                    </header>
                                    <article>
                                        <h3 className="d-none sr-only">blob-article</h3>
                                        <p dangerouslySetInnerHTML={{ __html: user.content1 }} />
                                        <blockquote>
                                            <p>В нашем магазине вы сможете заказать продукты с доставкой на дом.
                                                Т.е. теперь не нужно ехать в магазин,
                                                магазин приедет к вам и доставит ваши покупки:
                                                <br />
                                                <Link href={'/shop'}>
                                                    <a><h3>Выбрать продукты и товары</h3></a>
                                                </Link>

                                            </p>
                                        </blockquote>

                                    </article>
                                    <footer className="blog-meta">
                                        <div>

                                            <p>Данная страница сгенерирована автоматическим ботом на основе данных собранных в свободных источниках(ВК).</p>
                                            <a href="#">...Анна Хантер</a>

                                        </div>
                                    </footer>
                                </div>








                            </div>





                        </div>

                        <LeftBlogMenu />

                    </div>
                </div>
            </section>

        </>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`http://prokansk.ru/api/v1/limontv/${params.slug}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}

