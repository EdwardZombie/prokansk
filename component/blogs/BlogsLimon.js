import React from 'react';
import Link from "next/link";
import Pagination from "../Pagination";

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

const Blogs5K = ({ blogs, loading }) => {
    if(loading) {
        return <div className="col-lg-12 col-md-12 mb-lg--60 mb--30">
            <h3>Подгружаю бегущую строку Лимон ТВ ...</h3>
        </div>
    }
    return (
        <>
            {blogs.map(blog5k =>
                <div className="col-lg-4 col-md-6 mb-lg--60 mb--30" key={blog5k.id}>
                    <div className="blog-card card-style-grid">

                        <Link href={`/limontv/${blog5k.slug}`}>
                            <a className="promo-image sidebar">
                                <img src="/image/limonGreen.png" alt={blog5k.name} />
                            </a>
                        </Link>


                        <div className="card-content">
                            <h3 className="title">
                                <Link href={`/limontv/${blog5k.slug}`}>
                                    <a>{blog5k.name}</a>
                                </Link>
                            </h3>
                            <p className="post-meta"><span>{toTimestamp(blog5k.created_at.toString())} </span> | <a href="#">Лимон ТВ</a>
                            </p>
                            <article>
                                <h2 className="sr-only">
                                    Blog Article
                                </h2>

                                <Link href={`/limontv/${blog5k.slug}`}>
                                    <a className="blog-link">
                                        Читать...
                                    </a>
                                </Link>
                            </article>
                        </div>

                    </div>
                </div>
            )}

        </>

    );
};

export default Blogs5K