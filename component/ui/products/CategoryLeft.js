import React, {useState, useEffect} from "react";
import Link from "next/link";

const fetchURL = "http://prokansk.ru/api/v1/shopcategoryes/";
const getItems = () => fetch(fetchURL).then(res => res.json());

function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return items.map(item => {
            return <li key={item.id}>
                <Link href={`/shop/${item.slug}`}>
                    <a>
                        {item.name}
                    </a>
                </Link>
                <ul className="inner-cat-items">
                    {item.children.map(sub =>
                        <li>
                            <Link href={`/shop/${item.slug}/${sub.slug}`} key={sub.id}>
                                <a>
                                    {sub.name}
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>
            </li>;
        });
    }
}


function CategoryLeft() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (
        <div className="col-lg-3  mt--40 mt-lg--0">
            <div className="inner-page-sidebar">
                <div className="single-block">
                    <h3 className="sidebar-title">Категории магазина</h3>
                    <ul className="sidebar-menu--shop">
            <List items={items} fallback={" Загружаю меню... "} />
                    </ul>

                </div>
            </div>
        </div>
    );
}


// const CategoryLeft = () => (
//     <div className="col-lg-3  mt--40 mt-lg--0">
//         <div className="inner-page-sidebar">
//
//             <div className="single-block">
//                 <h3 className="sidebar-title">Categories22</h3>
//                 <ul className="sidebar-menu--shop">
//                     <li><a href="">Accessories (5)</a></li>
//                     <li><a href="">Arts & Photography (10)</a></li>
//                     <li><a href="">Biographies (16)</a></li>
//                     <li><a href="">Business & Money (0)</a></li>
//                     <li><a href="">Calendars (6)</a></li>
//                     <li><a href="">Children's Books (9)</a></li>
//                     <li><a href="">Comics (16)</a></li>
//                     <li><a href="">Cookbooks (7)</a></li>
//                     <li><a href="">Education (3)</a></li>
//                     <li><a href="">House Plants (6)</a></li>
//                     <li><a href="">Indoor Living (9)</a></li>
//                     <li><a href="">Perfomance Filters (5)</a></li>
//                     <li><a href="">Shop (16)</a>
//                         <ul className="inner-cat-items">
//                             <li><a href="">Saws (0)</a></li>
//                             <li><a href="">Concrete Tools (7)</a></li>
//                             <li><a href="">Drills (2)</a></li>
//                             <li><a href="">Sanders (1)</a></li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//
//             <div className="single-block">
//                 <h3 className="sidebar-title">Fillter By Price</h3>
//                 <div className="range-slider pt--30">
//                     <div className="sb-range-slider" />
//                     <div className="slider-price">
//                         <p>
//                             <input type="text" id="amount" readOnly="" />
//                         </p>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="single-block">
//                 <h3 className="sidebar-title">Manufacturer</h3>
//                 <ul className="sidebar-menu--shop menu-type-2">
//                     <li><a href="">Christian Dior <span>(5)</span></a></li>
//                     <li><a href="">Diesel <span>(8)</span></a></li>
//                     <li><a href="">Ferragamo <span>(11)</span></a></li>
//                     <li><a href="">Hermes <span>(14)</span></a></li>
//                     <li><a href="">Louis Vuitton <span>(12)</span></a></li>
//                     <li><a href="">Tommy Hilfiger <span>(0)</span></a></li>
//                     <li><a href="">Versace <span>(0)</span></a></li>
//                 </ul>
//             </div>
//
//             <div className="single-block">
//                 <h3 className="sidebar-title">Select By Color</h3>
//                 <ul className="sidebar-menu--shop menu-type-2">
//                     <li><a href="">Black <span>(5)</span></a></li>
//                     <li><a href="">Blue <span>(6)</span></a></li>
//                     <li><a href="">Brown <span>(4)</span></a></li>
//                     <li><a href="">Green <span>(7)</span></a></li>
//                     <li><a href="">Pink <span>(6)</span></a></li>
//                     <li><a href="">Red <span>(5)</span></a></li>
//                     <li><a href="">White <span>(8)</span></a></li>
//                     <li><a href="">Yellow <span>(11)</span> </a></li>
//                 </ul>
//             </div>
//
//             <div className="single-block">
//                 <a href="" className="promo-image sidebar">
//                     <img src="image/others/home-side-promo.jpg" alt="" />
//                 </a>
//             </div>
//         </div>
//     </div>
// )
export default CategoryLeft;