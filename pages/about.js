import Link from "next/link";

export const getStaticProps = async () => {
    const responce = await fetch('http://prokansk.ru/api/v1/about/');
    const data = await responce.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { about: data },
    }
}

const About = ({ about }) => {
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
                                <li className="breadcrumb-item active">Страница про нас</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

        <div className="faq-area inner-page-sec-padding-bottom">
            <div className="container">
                {about && about.map(({id, title, block1, photo1, metadescr, metakey}) => (
                <div className="row" key={id}>
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <p dangerouslySetInnerHTML={{ __html: block1 }} />
                    </div>
                </div>
                    ))}
            </div>
        </div>

        </>
    )
}

export default About;