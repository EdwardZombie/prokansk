import Link from "next/link";
import LeftBlogMenu from "../../component/ui/LeftBlogMenu";

export const getStaticProps = async () => {
    const responce = await fetch('http://prokansk.ru/api/v1/vacancyes/');
    const data = await responce.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { vacancy: data },
    }
}

const About = ({ vacancy }) => {
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
                                <li className="breadcrumb-item active">Вакансии нашей компании</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section className="inner-page-sec-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-lg-2 mb--40 mb-lg--0">
                            <div className="blog-list-cards">
                    {vacancy && vacancy.map(({id, title, decscription, place, salaty, image}) => (
                        <div className="blog-card card-style-list" key={id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <a className="image d-block">
                                        <img src="image/deliveryer.png" alt="" />
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-content">
                                        <h3 className="title"><a href="blog-details.html">{title}</a></h3>
                                        <p className="post-meta"><span>{place}</span> | <a>{salaty}</a></p>
                                        <article>
                                            <h2 className="sr-only">
                                                Vacancy
                                            </h2>
                                            <p dangerouslySetInnerHTML={{ __html: decscription }} />
                                            <Link href={'#'}>
                                                <a className="blog-link">Подать заявку</a>
                                            </Link>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                            </div>
                        </div>


                        <LeftBlogMenu />





                    </div>
                </div>
            </section>

        </>
    )
}

export default About;