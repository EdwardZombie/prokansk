const Deal = () => (
    <section className="section-margin">
        <div className="container">
            <div className="promo-section-heading">
                <h2>Deal of the day up to 20% off Special offer</h2>
            </div>
            <div className="product-slider with-countdown  slider-border-single-row sb-slick-slider"
                 data-slick-setting='{
                "autoplay": true,
                "autoplaySpeed": 8000,
                "slidesToShow": 4,
                "dots":true
                }' data-slick-responsive='[
                    {"breakpoint":1400, "settings": {"slidesToShow": 4} },
                    {"breakpoint":992, "settings": {"slidesToShow": 3} },
                    {"breakpoint":768, "settings": {"slidesToShow": 2} },
                    {"breakpoint":575, "settings": {"slidesToShow": 2} },
                    {"breakpoint":490, "settings": {"slidesToShow": 1} }
                ]'>
                <div className="single-slide">
                    <div className="product-card">
                        <div className="product-header">
                            <a href="" className="author">
                                Ypple
                            </a>
                            <h3><a href="product-details.html">Do You Really Need It? This Will Help You
                            </a>
                            </h3>
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
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="01/05/2020" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="product-card">
                        <div className="product-header">
                            <a href="#" className="author">
                                Upple
                            </a>
                            <h3><a href="product-details.html">Here Is A Quick Cure For Book with pdf</a></h3>
                        </div>
                        <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-1.jpg" alt="" />
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
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="01/05/2020" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="product-card">
                        <div className="product-header">
                            <a href="#" className="author">
                                Ypple
                            </a>
                            <h3><a href="product-details.html">a Half Very Simple Things You To Save</a></h3>
                        </div>
                        <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-3.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="image/products/product-2.jpg" alt="" />
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
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="01/05/2020" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="product-card">
                        <div className="product-header">
                            <a href="#" className="author">
                                Epple
                            </a>
                            <h3><a href="product-details.html">What You Can Learn From Bill Gates</a>
                            </h3>
                        </div>
                        <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-5.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="image/products/product-4.jpg" alt="" />
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
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="01/05/2020" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="product-card">
                        <div className="product-header">
                            <a href="#" className="author">
                                Rpple
                            </a>
                            <h3><a href="product-details.html">Create Better BOOK With The Help Of Your</a></h3>
                        </div>
                        <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-6.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="image/products/product-4.jpg" alt="" />
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
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="01/05/2020" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="product-card">
                        <div className="product-header">
                            <a href="#" className="author">
                                Tpple
                            </a>
                            <h3><a href="product-details.html">Turn Your BOOK Into High Machine</a>
                            </h3>
                        </div>
                        <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-8.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="image/products/product-7.jpg" alt="" />
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
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="01/05/2020" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="product-card">
                        <div className="product-header">
                            <a href="#" className="author">
                                Mpple
                            </a>
                            <h3><a href="product-details.html">Revolutionize Your BOOK With These Easy
                            </a></h3>
                        </div>
                        <div className="product-card--body">
                            <div className="card-image">
                                <img src="image/products/product-13.jpg" alt="" />
                                    <div className="hover-contents">
                                        <a href="product-details.html" className="hover-image">
                                            <img src="image/products/product-11.jpg" alt="" />
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
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="01/05/2020" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Deal;