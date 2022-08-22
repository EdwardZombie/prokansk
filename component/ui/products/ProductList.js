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
                            <a>
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




const ProductList2 = () => (
    <div className="col-lg-9 order-lg-2">
        <div className="shop-toolbar with-sidebar mb--30">
            <div className="row align-items-center">
                <div className="col-lg-2 col-md-2 col-sm-6">

                    <div className="product-view-mode">
                        <a href="#" className="sorting-btn active" data-target="grid"><i
                            className="fas fa-th" /></a>
                        <a href="#" className="sorting-btn" data-target="grid-four">
											<span className="grid-four-icon">
												<i className="fas fa-grip-vertical" /><i
                                                className="fas fa-grip-vertical" />
											</span>
                        </a>
                        <a href="#" className="sorting-btn" data-target="list "><i
                            className="fas fa-list" /></a>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6  mt--10 mt-sm--0">
									<span className="toolbar-status">
										Showing 1 to 9 of 14 (2 Pages)
									</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
                    <div className="sorting-selection">
                        <span>Show:</span>
                        <select className="form-control nice-select sort-select">
                            <option value="" selected="selected">3</option>
                            <option value="">9</option>
                            <option value="">5</option>
                            <option value="">10</option>
                            <option value="">12</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
                    <div className="sorting-selection">
                        <span>Sort:</span>
                        <select className="form-control nice-select sort-select mr-0">
                            <option defaultValue="" selected="selected">Default Sorting</option>
                            <option value="">Sort
                                By:Name (A - Z)
                            </option>
                            <option value="">Sort
                                By:Name (Z - A)
                            </option>
                            <option value="">Sort
                                By:Price (Low &gt; High)
                            </option>
                            <option value="">Sort
                                By:Price (High &gt; Low)
                            </option>
                            <option value="">Sort
                                By:Rating (Highest)
                            </option>
                            <option value="">Sort
                                By:Rating (Lowest)
                            </option>
                            <option value="">Sort
                                By:Model (A - Z)
                            </option>
                            <option value="">Sort
                                By:Model (Z - A)
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="shop-toolbar d-none">
            <div className="row align-items-center">
                <div className="col-lg-2 col-md-2 col-sm-6">

                    <div className="product-view-mode">
                        <a href="#" className="sorting-btn active" data-target="grid"><i
                            className="fas fa-th" /></a>
                        <a href="#" className="sorting-btn" data-target="grid-four">
											<span className="grid-four-icon">
												<i className="fas fa-grip-vertical" /><i
                                                className="fas fa-grip-vertical" />
											</span>
                        </a>
                        <a href="#" className="sorting-btn" data-target="list "><i
                            className="fas fa-list" /></a>
                    </div>
                </div>
                <div className="col-xl-5 col-md-4 col-sm-6  mt--10 mt-sm--0">
									<span className="toolbar-status">
										Showing 1 to 9 of 14 (2 Pages)
									</span>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6  mt--10 mt-md--0">
                    <div className="sorting-selection">
                        <span>Show:</span>
                        <select className="form-control nice-select sort-select">
                            <option value="" selected="selected">3</option>
                            <option value="">9</option>
                            <option value="">5</option>
                            <option value="">10</option>
                            <option value="">12</option>
                        </select>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mt--10 mt-md--0 ">
                    <div className="sorting-selection">
                        <span>Sort By:</span>
                        <select className="form-control nice-select sort-select mr-0">
                            <option value="" selected="selected">Default Sorting</option>
                            <option value="">Sort
                                By:Name (A - Z)
                            </option>
                            <option value="">Sort
                                By:Name (Z - A)
                            </option>
                            <option value="">Sort
                                By:Price (Low &gt; High)
                            </option>
                            <option value="">Sort
                                By:Price (High &gt; Low)
                            </option>
                            <option value="">Sort
                                By:Rating (Highest)
                            </option>
                            <option value="">Sort
                                By:Rating (Lowest)
                            </option>
                            <option value="">Sort
                                By:Model (A - Z)
                            </option>
                            <option value="">Sort
                                By:Model (Z - A)
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div className="shop-product-wrap grid with-pagination row space-db--30 shop-border">


            <div className="col-lg-4 col-sm-6">
                <div className="product-card">
                    <div className="product-grid-content">
                        <div className="product-header">
                            <a href="" className="author">
                                Epple
                            </a>
                            <h3><a href="product-details.html">Here Is A Quick Cure For Book</a></h3>
                        </div>
                        <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-2.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="image/products/product-1.jpg" alt="" />
                                        </a>
                                        <div className="hover-btns">
                                            <a href="cart.html" className="single-btn">
                                                <i className="fas fa-shopping-basket" />
                                            </a>
                                            <a href="wishlist.html" className="single-btn">
                                                <i className="fas fa-heart" />
                                            </a>
                                            <a href="compare.html" className="single-btn">
                                                <i className="fas fa-random" />
                                            </a>
                                            <a href="#" data-toggle="modal" data-target="#quickModal"
                                               className="single-btn">
                                                <i className="fas fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                            </div>
                            <div className="price-block">
                                <span className="price">£51.20</span>
                                <del className="price-old">£51.20</del>
                                <span className="price-discount">20%</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-list-content">
                        <div className="card-image">
                            <img src="image/products/product-3.jpg" alt="" />
                        </div>
                        <div className="product-card--body">
                            <div className="product-header">
                                <a href="" className="author">
                                    Gpple
                                </a>
                                <h3><a href="product-details.html" tabIndex="0">Qpple cPad with Retina
                                    Display MD510LL/A</a></h3>
                            </div>
                            <article>
                                <h2 className="sr-only">Card List Article</h2>
                                <p>More room to move. With 80GB or 160GB of storage and up to 40 hours
                                    of battery life, the new iPod classic lets you enjoy
                                    up to 40,000 songs or..</p>
                            </article>
                            <div className="price-block">
                                <span className="price">£51.20</span>
                                <del className="price-old">£51.20</del>
                                <span className="price-discount">20%</span>
                            </div>
                            <div className="rating-block">
                                <span className="fas fa-star star_on" />
                                <span className="fas fa-star star_on" />
                                <span className="fas fa-star star_on" />
                                <span className="fas fa-star star_on" />
                                <span className="fas fa-star " />
                            </div>
                            <div className="btn-block">
                                <a href="" className="btn btn-outlined">Add To Cart</a>
                                <a href="" className="card-link"><i className="fas fa-heart" /> Add To
                                    Wishlist</a>
                                <a href="" className="card-link"><i className="fas fa-random" /> Add To
                                    Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <div className="row pt--30">
            <div className="col-md-12">
                <div className="pagination-block">
                    <ul className="pagination-btns flex-center">
                        <li><a href="" className="single-btn prev-btn ">|<i
                            className="zmdi zmdi-chevron-left" /> </a></li>
                        <li><a href="" className="single-btn prev-btn "><i
                            className="zmdi zmdi-chevron-left" /> </a></li>
                        <li className="active"><a href="" className="single-btn">1</a></li>
                        <li><a href="" className="single-btn">2</a></li>
                        <li><a href="" className="single-btn">3</a></li>
                        <li><a href="" className="single-btn">4</a></li>
                        <li><a href="" className="single-btn next-btn"><i
                            className="zmdi zmdi-chevron-right" /></a></li>
                        <li><a href="" className="single-btn next-btn"><i
                            className="zmdi zmdi-chevron-right" />|</a></li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
)
export default ProductList;