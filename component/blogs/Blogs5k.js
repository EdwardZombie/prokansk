import React from 'react';
import Link from "next/link";

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
        return <h3>Подгружаю бегущую строку 5-го канала...</h3>
    }
    return (
        <>
            {blogs.map(blog5k =>
                <div className="col-lg-4 col-md-6 mb-lg--60 mb--30" key={blog5k.id}>
                    <div className="blog-card card-style-grid">

                        <Link href={`/fivekanal/${blog5k.slug}`}>
                        <a className="promo-image sidebar">
                            <img src="/image/5kanalGreen.jpg" alt={blog5k.name} />
                        </a>
                        </Link>


                        <div className="card-content">
                            <h3 className="title">
                                <Link href={`/fivekanal/${blog5k.slug}`}>
                                <a>{blog5k.name}</a>
                                </Link>
                            </h3>
                            <p className="post-meta"><span>{toTimestamp(blog5k.created_at.toString())} </span> | <a href="#">5 Канал</a>
                            </p>
                            <article>
                                <h2 className="sr-only">
                                    Blog Article
                                </h2>
                                <p>
                                    {blog5k.content1}
                                </p>
                                <Link href={`/fivekanal/${blog5k.slug}`}>
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