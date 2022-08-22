import React, {useState, useEffect} from "react";
import Link from "next/link";

const fetchURL = "http://prokansk.ru/api/v1/shopcategoryes/";
const getItems = () => fetch(fetchURL).then(res => res.json());

function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return items.map(item => {
            return <li className="cat-item" key={item.id}>
                <Link href={`/shop/${item.slug}`}>
                    <a>
                        {item.name}
                    </a>
                </Link>

            </li>;
        });
    }
}

function MobileCategoryes() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (

                    <ul className="category-menu">
                        <List items={items} fallback={" ... "} />
                    </ul>


    );
}

const MobileCategoryes2 = () => (
                <ul className="category-menu">
                    <li className="cat-item has-children">
                        <a href="#">Arts & Photography</a>
                        <ul className="sub-menu">
                            <li><a href="#">Bags & Cases</a></li>
                            <li><a href="#">Binoculars & Scopes</a></li>
                            <li><a href="#">Digital Cameras</a></li>
                            <li><a href="#">Film Photography</a></li>
                            <li><a href="#">Lighting & Studio</a></li>
                        </ul>
                    </li>
                    <li className="cat-item has-children mega-menu"><a href="#">Biographies</a>
                        <ul className="sub-menu">
                            <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                    <li><a href="#">Bags & Cases</a></li>
                                    <li><a href="#">Binoculars & Scopes</a></li>
                                    <li><a href="#">Digital Cameras</a></li>
                                    <li><a href="#">Film Photography</a></li>
                                    <li><a href="#">Lighting & Studio</a></li>
                                </ul>
                            </li>
                            <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                    <li><a href="#">Bags & Cases</a></li>
                                    <li><a href="#">Binoculars & Scopes</a></li>
                                    <li><a href="#">Digital Cameras</a></li>
                                    <li><a href="#">Film Photography</a></li>
                                    <li><a href="#">Lighting & Studio</a></li>
                                </ul>
                            </li>
                            <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                    <li><a href="#">Bags & Cases</a></li>
                                    <li><a href="#">Binoculars & Scopes</a></li>
                                    <li><a href="#">Digital Cameras</a></li>
                                    <li><a href="#">Film Photography</a></li>
                                    <li><a href="#">Lighting & Studio</a></li>
                                </ul>
                            </li>
                            <li className="single-block">
                                <h3 className="title">WHEEL SIMULATORS</h3>
                                <ul>
                                    <li><a href="#">Bags & Cases</a></li>
                                    <li><a href="#">Binoculars & Scopes</a></li>
                                    <li><a href="#">Digital Cameras</a></li>
                                    <li><a href="#">Film Photography</a></li>
                                    <li><a href="#">Lighting & Studio</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="cat-item has-children"><a href="#">Business & Money</a>
                        <ul className="sub-menu">
                            <li><a href="">Brake Tools</a></li>
                            <li><a href="">Driveshafts</a></li>
                            <li><a href="">Emergency Brake</a></li>
                            <li><a href="">Spools</a></li>
                        </ul>
                    </li>
                    <li className="cat-item has-children"><a href="#">Calendars</a>
                        <ul className="sub-menu">
                            <li><a href="">Brake Tools</a></li>
                            <li><a href="">Driveshafts</a></li>
                            <li><a href="">Emergency Brake</a></li>
                            <li><a href="">Spools</a></li>
                        </ul>
                    </li>
                    <li className="cat-item has-children"><a href="#">Children's Books</a>
                        <ul className="sub-menu">
                            <li><a href="">Brake Tools</a></li>
                            <li><a href="">Driveshafts</a></li>
                            <li><a href="">Emergency Brake</a></li>
                            <li><a href="">Spools</a></li>
                        </ul>
                    </li>
                    <li className="cat-item has-children"><a href="#">Comics</a>
                        <ul className="sub-menu">
                            <li><a href="">Brake Tools</a></li>
                            <li><a href="">Driveshafts</a></li>
                            <li><a href="">Emergency Brake</a></li>
                            <li><a href="">Spools</a></li>
                        </ul>
                    </li>
                    <li className="cat-item"><a href="#">Perfomance Filters</a></li>
                    <li className="cat-item has-children"><a href="#">Cookbooks</a>
                        <ul className="sub-menu">
                            <li><a href="">Brake Tools</a></li>
                            <li><a href="">Driveshafts</a></li>
                            <li><a href="">Emergency Brake</a></li>
                            <li><a href="">Spools</a></li>
                        </ul>
                    </li>
                    <li className="cat-item "><a href="#">Accessories</a></li>
                    <li className="cat-item "><a href="#">Education</a></li>
                    <li className="cat-item hidden-menu-item"><a href="#">Indoor Living</a></li>
                    <li className="cat-item"><a href="#" className="js-expand-hidden-menu">More
                        Categories</a></li>
                </ul>
)

export default MobileCategoryes;