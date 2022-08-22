const Hero = () => (
    <section className="hero-area hero-slider-2">
        <div className="container">
            <div className="row align-items-lg-center">
                <div className="col-12">
                    <div className="sb-slick-slider" data-slick-setting='{
                                                                "autoplay": true,
                                                                "autoplaySpeed": 8000,
                                                                "slidesToShow": 1,
                                                                "dots":true
                                                                }'>
                        <div className="single-slide bg-image" data-bg="image/bg-images/home-2-slider-2.jpg">
                            <div className="home-content pl--30">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <span className="title-mid">Book Mockup</span>
                                        <h2 className="h2-v2">Hardcover.</h2>
                                        <p>Cover up front of book and
                                            <br />leave summary</p>
                                        <a href="shop-grid.html" className="btn btn-outlined--primary">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide bg-image" data-bg="image/bg-images/home-2-slider-1.jpg">
                            <div className="home-content pl--30">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <span className="title-mid">Book Mockup</span>
                                        <h2 className="h2-v2">Hardcover.</h2>
                                        <p>Cover up front of book and
                                            <br />leave summary</p>
                                        <a href="shop-grid.html" className="btn btn-outlined--primary">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero;
