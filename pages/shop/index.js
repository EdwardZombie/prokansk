import BrandSlider from "../../component/ui/products/BrandSlider";
import BreadCrump from "../../component/ui/BreadCrump";
import ProductList from "../../component/ui/products/ProductList";
import CategoryLeft from "../../component/ui/products/CategoryLeft";

const Shop = () => (

    <>
        <BreadCrump/>
        <main className="inner-page-sec-padding-bottom">
            <div className="container">
                <div className="row">
                    <ProductList/>
                    <CategoryLeft/>
                </div>
            </div>
        </main>

    </>
)

export default Shop;