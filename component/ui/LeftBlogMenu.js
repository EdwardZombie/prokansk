import React from "react";

const LeftBlogMenu = () => (
    <div className="col-lg-3">
        <div className="inner-page-sidebar">
            <div className="single-block">
                <h2 className="sidebar-title mb--30">Search</h2>
                <div className="site-mini-search">
                    <form action="">
                        <input type="text" placeholder="Search"/>
                        <button>
                            <i className="fas fa-search"/>
                        </button>
                    </form>
                </div>
            </div>
            <div className="single-block">
                <h2 className="sidebar-title mb--30">BLOG ARCHIVES</h2>
                <ul className="sidebar-list mb--30">
                    <li><a href="#"> March 2015 (1)</a></li>
                    <li><a href="#">December 2014 (3)</a></li>
                    <li><a href="#">November 2014 (4)</a></li>
                    <li><a href="#">September 2014 (1)</a></li>
                    <li><a href="#">August 2014 (1)</a></li>
                </ul>
            </div>
            <div className="single-block ">
                <h2 className="sidebar-title mb--30">RECENT POSTS</h2>
                <ul className="sidebar-list">
                    <li><a href="#"> Blog image post</a></li>
                    <li><a href="#">Post with Gallery</a></li>
                    <li><a href="#">Post with Audio</a></li>
                    <li><a href="#">Post with Video</a></li>
                    <li><a href="#">Maecenas ultricies</a></li>
                </ul>
            </div>
            <div className="single-block ">
                <h2 className="sidebar-title mb--30">Tags</h2>
                <ul className="sidebar-tag-list">
                    <li><a href="#"> Chilled</a></li>
                    <li><a href="#">Dark</a></li>
                    <li><a href="#">Euro</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Hardware</a></li>
                    <li><a href="#">Hat</a></li>
                    <li><a href="#">Hipster</a></li>
                    <li><a href="#">Holidays</a></li>
                    <li><a href="#">Light</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">Place</a></li>
                    <li><a href="#">T-Shirt</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Video-2</a></li>
                    <li><a href="#">White</a></li>
                </ul>
            </div>

            <div className="single-block">
                <a href="" className="promo-image sidebar">
                    <img src="/image/others/home-side-promo.jpg" alt=""/>
                </a>
            </div>
        </div>
    </div>
)

export default LeftBlogMenu;