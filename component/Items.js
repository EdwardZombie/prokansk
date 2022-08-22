import React from 'react';
import Link from "next/link";
import Image from "next/image";


const myLoader = ({ src, width, quality }) => {
    return `http://prokansk.ru${src}?w=${width}&q=${quality || 75}`
}


const Items = ({ items, loading }) => {

    if(loading) {
        return <h3>Подгружаю товары магазина...</h3>
    }

    return (
        <>

            {items.map(item =>

                <div className="col-lg-4 col-sm-6" key={item.id}>
                    <div className="product-card">
                        <div className="product-grid-content">
                            <div className="product-header">
                                <Link href={item.slug}>
                                <a className="author">
                                    {item.category}
                                </a>
                                </Link>
                                <h3>
                                    <Link href={item.slug}>
                                    <a>{item.name}</a>
                                    </Link>
                                    </h3>
                            </div>
                            <div className="product-card--body">

                            <div className="card-image">

                            <Image
                                loader={myLoader}
                                src={item.image1}
                                alt={item.name}
                                width={388}
                                height={294}
                            />

                                <div className="hover-contents">
                                <div className="hover-btns">
                                    <a href="cart.html" className="single-btn">
                                        <i className="fas fa-shopping-basket"></i>
                                    </a>
                                    <a href="wishlist.html" className="single-btn">
                                        <i className="fas fa-heart"></i>
                                    </a>
                                    <a href="compare.html" className="single-btn">
                                        <i className="fas fa-random"></i>
                                    </a>
                                    <a href="#" data-toggle="modal" data-target="#quickModal"
                                       className="single-btn">
                                        <i className="fas fa-eye"></i>
                                    </a>
                                </div>
                                </div>
                            </div>

                                <div className="price-block">
                                    <span className="price">{item.price} руб.</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            )}

        </>
    );
};

export default Items;