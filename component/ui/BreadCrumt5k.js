import React from "react";
import Link from "next/link";

const BreadCrumt5k = () => (
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
                            <a>Бегущая 5 канал</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
)

export default BreadCrumt5k;