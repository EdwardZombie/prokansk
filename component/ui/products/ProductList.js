import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const fetchURL = "http://prokansk.ru/api/v1/shopcategoryes/";
const getItems = () => fetch(fetchURL).then(res => res.json());

const myLoader = ({ src, width, quality }) => {
    return `http://prokansk.ru${src}?w=${width}&q=${quality || 75}`
}

function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return items.map(item => {

                return <>

            <div className="col-lg-12 col-sm-12" key={item.id}>
                    <div className="product-card">

                        <div className="price-block">

                            <h1>
                                <Link href={`/shop/${item.slug}`}>
                                    <a>
                                                {item.name}
                                    </a>
                                </Link>
                            </h1>

                        </div>

                    </div>
                </div>

            {item.children.map(sub =>
            <div className="col-lg-3 col-sm-4" key={sub.id}>
                <div className="product-card">

                    <div className="product-card--body">

                        <Link href={`/shop/${item.slug}/${sub.slug}`}>
                            <a className="promo-image sidebar">
                                <Image
                                    loader={myLoader}
                                    src={sub.img_categoryProduct}
                                    alt={sub.name}
                                    width={388}
                                    height={294}
                                />
                            </a>
                        </Link>


                    </div>
                    <div className="price-block">

                        <h5>
                            <Link href={`/shop/${item.slug}/${sub.slug}`}>
                                <a>
                                            <span className="price">
                                                {sub.name}
                                            </span>
                                </a>
                            </Link>
                        </h5>

                    </div>

                </div>
            </div>
            )}

                </>


        });
    }
}

const ProductList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (
        <div className="col-lg-9 order-lg-2">
            <div className="shop-toolbar with-sidebar mb--30">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">

                        <h3>Категории магазина</h3>
                    </div>
                </div>
            </div>

            <div className="shop-product-wrap grid with-pagination row space-db--30 shop-border">

                            <List items={items} fallback={" ... "} />

            </div>
        </div>
    );
};

export default ProductList;