import Link from "next/link";
import React, { useState } from "react";
import MobileCategoryes from "./MobileCategoryes";
import MobileMainNav from "./MobileMainNav";

const HeaderFile = () => {

   // off-canvas-wrapper
   const [menumob, setMenumob] = useState("off-canvas-wrapper");
   const menumobShow = () => {
      if (menumob === 'off-canvas-wrapper'){
         setMenumob("off-canvas-wrapper open");
      }
      else {
         setMenumob("off-canvas-wrapper");
      }
   };

   const [style, setStyle] = useState("category-nav white-nav");

   const showMenu = () => {
      if (style === 'category-nav white-nav show'){

         setStyle("category-nav white-nav");
      }
      else {
         setStyle("category-nav white-nav show");
      }
   };


   // showMobMenu  category-nav
   const [stylemob, setStylemob] = useState("category-nav");

   const showMobMenu = () => {
      if (stylemob === 'category-nav show'){
         setStylemob("category-nav");
      }
      else {
         setStylemob("category-nav show");
      }
   };


return(
   <div className="site-wrapper" id="top">
      <div className="site-header header-2 mb--20 d-none d-lg-block">
         <div className="header-middle pt--10 pb--10">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-3">
                     <Link href={'/'}>
                     <a className="site-brand">
                        <img src="/image/logo.png" alt=""/>
                     </a>
                     </Link>
                  </div>
                  <div className="col-lg-5">
                     <div className="header-search-block">
                        <input type="text" placeholder="Поиск..."/>
                        <button>Поиск</button>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="main-navigation flex-lg-right">
                        <div className="cart-widget">
                           <div className="login-block">
                              <a href="login-register.html" className="font-weight-bold">Вход</a> <br/>
                              <span>или</span><a href="login-register.html">Регистрация</a>
                           </div>
                           <div className="cart-block">
                              <div className="cart-total">
                                            <span className="text-number">
                                                1
                                            </span>
                                 <span className="text-item">
                                                Shopping Cart
                                            </span>
                                 <span className="price">
                                                £0.00
                                                <i className="fas fa-chevron-down"/>
                                            </span>
                              </div>
                              <div className="cart-dropdown-block">
                                 <div className=" single-cart-block ">
                                    <div className="cart-product">
                                       <a href="product-details.html" className="image">
                                          <img src="/image/products/cart-product-1.jpg" alt=""/>
                                       </a>
                                       <div className="content">
                                          <h3 className="title"><a href="product-details.html">Kodak PIXPRO
                                             Astro Zoom AZ421 16 MP</a>
                                          </h3>
                                          <p className="price"><span className="qty">1 ×</span> £87.34</p>
                                          <button className="cross-btn"><i className="fas fa-times"/></button>
                                       </div>
                                    </div>
                                 </div>
                                 <div className=" single-cart-block ">
                                    <div className="btn-block">
                                       <a href="cart.html" className="btn">View Cart <i
                                           className="fas fa-chevron-right"/></a>
                                       <a href="checkout.html" className="btn btn--primary">Check Out <i
                                           className="fas fa-chevron-right"/></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="header-bottom bg-primary">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-3">
                     <nav className={style}>
                        <div>
                           <a href={'#'}
                              className="category-trigger"
                              onClick={showMenu}
                           >
                              <i className="fa fa-bars"/>
                              Категории
                           </a>
                           <MobileCategoryes/>
                        </div>
                     </nav>
                  </div>
                  <div className="col-lg-3">
                     <div className="header-phone color-white">
                        <div className="icon">
                           <i className="fas fa-headphones-alt"/>
                        </div>
                        <div className="text">
                           <p>Оператор 24/7</p>
                           <p className="font-weight-bold number">+7 (991) 500-27-12</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="main-navigation flex-lg-right">
                        <ul className="main-menu menu-right main-menu--white li-last-0">
                           <li className="menu-item">
                              <Link href={'/'}>
                                 <a>Главная</a>
                              </Link>
                           </li>

                           <li className="menu-item mega-menu">
                              <Link href={'/shop'}>
                                 <a>Магазин</a>
                              </Link>
                           </li>

                           <li className="menu-item has-children mega-menu">
                              <a href="#">Блог
                                 <i className="fas fa-chevron-down dropdown-arrow"/>
                              </a>
                              <ul className="sub-menu three-column">
                                 <li className="cus-col-33">
                                    <h3 className="menu-title">
                                       <a href="#">Объявления</a>
                                    </h3>
                                    <ul className="mega-single-block">
                                       <li>
                                          <Link href={'blog'}>
                                             <a>Все объявления</a>
                                          </Link>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="cus-col-33">
                                    <h3 className="menu-title">
                                       <a href="#">Канск 5 канал </a>
                                    </h3>
                                    <ul className="mega-single-block">
                                       <li>
                                          <Link href={'/fivekanal'}>
                                             <a>Бегущая строка</a>
                                          </Link>
                                       </li>
                                    </ul>
                                 </li>
                                 <li className="cus-col-33">
                                    <h3 className="menu-title"><a>Лимон ТВ</a>
                                    </h3>
                                    <ul className="mega-single-block">
                                       <li>
                                          <Link href={'/limontv'}>
                                             <a>Бегущая строка</a>
                                          </Link>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                           <li className="menu-item active">
                              <Link href={'contact'}>
                                 <a>Контакты</a>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="site-mobile-menu">
         <header className="mobile-header d-block d-lg-none pt--10 pb-md--10">
            <div className="container">
               <div className="row align-items-sm-end align-items-center">
                  <div className="col-md-4 col-7">
                     <Link href={'/'}>
                     <a className="site-brand">
                        <img src="/image/logo.png" alt=""/>
                     </a>
                     </Link>
                  </div>
                  {/*Категории для мобильников*/}
                  <div className="col-md-5 order-3 order-md-2">
                     <nav className={stylemob}>
                        <div>
                           <a href="#"
                              className="category-trigger"
                              onClick={showMobMenu}
                           ><i className="fa fa-bars"/>Категории</a>
                  <MobileCategoryes />
                        </div>
                     </nav>
                  </div>

                  <div className="col-md-3 col-5  order-md-3 text-right">
                     <div className="mobile-header-btns header-top-widget">
                        <ul className="header-links">
                           <li className="sin-link">
                              <a href="cart.html" className="cart-link link-icon"><i className="ion-bag"/></a>
                           </li>
                           <li className="sin-link">
                              <a href="#"
                                 className="link-icon hamburgur-icon off-canvas-btn"
                                 onClick={menumobShow}
                              ><i
                                  className="ion-navicon"/></a>
                           </li>
                        </ul>
                     </div>
                  </div>

               </div>
            </div>
         </header>

         <aside className={menumob}>
            <div className="btn-close-off-canvas">
               <i
                   className="ion-android-close"
                   onClick={menumobShow}
               />
            </div>
            <div className="off-canvas-inner">

               <div className="search-box offcanvas">

                     <input type="text" placeholder="Search Here"/>
                     <button className="search-btn">
                        <i className="ion-ios-search-strong"/>
                     </button>

               </div>

               <div className="mobile-navigation">

                  <nav className="off-canvas-nav">
                     <ul className="mobile-menu main-mobile-menu">
                        <MobileMainNav />
                     </ul>
                  </nav>

               </div>

               <div className="off-canvas-bottom">
                  <div className="contact-list mb--10">
                     <a href="" className="sin-contact"><i className="fas fa-mobile-alt"/>(12345) 78790220</a>
                     <a href="" className="sin-contact"><i className="fas fa-envelope"/>examle@handart.com</a>
                  </div>
                  <div className="off-canvas-social">
                     <a href="#" className="single-icon"><i className="fab fa-facebook-f"/></a>
                     <a href="#" className="single-icon"><i className="fab fa-twitter"/></a>
                     <a href="#" className="single-icon"><i className="fas fa-rss"/></a>
                     <a href="#" className="single-icon"><i className="fab fa-youtube"/></a>
                     <a href="#" className="single-icon"><i className="fab fa-google-plus-g"/></a>
                     <a href="#" className="single-icon"><i className="fab fa-instagram"/></a>
                  </div>
               </div>
            </div>
         </aside>

      </div>


   </div>
)
};

export default HeaderFile;