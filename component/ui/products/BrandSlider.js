const BrandSlider = () => (
    <section className="section-margin">
        <h2 className="sr-only">Brand Slider</h2>
        <div className="container">
            <div className="brand-slider sb-slick-slider border-top border-bottom" data-slick-setting='{
                                            "autoplay": true,
                                            "autoplaySpeed": 8000,
                                            "slidesToShow": 6
                                            }' data-slick-responsive='[
                {"breakpoint":992, "settings": {"slidesToShow": 4} },
                {"breakpoint":768, "settings": {"slidesToShow": 3} },
                {"breakpoint":575, "settings": {"slidesToShow": 3} },
                {"breakpoint":480, "settings": {"slidesToShow": 2} },
                {"breakpoint":320, "settings": {"slidesToShow": 1} }
            ]'>
                <div className="single-slide">
                    <img src="image/others/brand-1.jpg" alt="" />
                </div>
                <div className="single-slide">
                    <img src="image/others/brand-2.jpg" alt="" />
                </div>
                <div className="single-slide">
                    <img src="image/others/brand-3.jpg" alt="" />
                </div>
                <div className="single-slide">
                    <img src="image/others/brand-4.jpg" alt="" />
                </div>
                <div className="single-slide">
                    <img src="image/others/brand-5.jpg" alt="" />
                </div>
                <div className="single-slide">
                    <img src="image/others/brand-6.jpg" alt="" />
                </div>
                <div className="single-slide">
                    <img src="image/others/brand-1.jpg" alt="" />
                </div>
                <div className="single-slide">
                    <img src="image/others/brand-2.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
)
export default BrandSlider;