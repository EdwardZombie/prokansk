import Link from "next/link";

const BreadCrump = () => (
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
                        <li className="breadcrumb-item active">Магазин</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
)

export default BreadCrump;