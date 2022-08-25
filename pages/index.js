import Shiping from "../component/ui/indexpage/Shiping";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const getStaticProps = async () => {
    const responce = await fetch('http://prokansk.ru/api/v1/itemsforindex/');
    const data = await responce.json();

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { tovarsMain: data },
    }
}

const myLoader = ({ src, width, quality }) => {
    return `http://prokansk.ru${src}?w=${width}&q=${quality || 50}`
}

const Home = ({ tovarsMain }) => {
  return (
    <>

            <div className="container">
                <div className="row">


                        {tovarsMain && tovarsMain.map(({id, name, price, image1}) => (
                            <div className="col-lg-2 col-md-4 mb-lg--60 mb--30" key={id}>
                                <div className="blog-card card-style-grid">

                                    <Link href="#">
                                        <a className="promo-image sidebar">
                                            <Image
                                                loader={myLoader}
                                                src={image1}
                                                alt={name}
                                                width={350}
                                                height={250}
                                            />
                                        </a>
                                    </Link>


                                    <div className="card-content">
                                        <h3 className="title">
                                            <Link href="#">
                                                <a>{name}</a>
                                            </Link>
                                        </h3>
                                        <p className="post-meta">
                                            <span>{price} руб.</span>
                                        </p>

                                    </div>

                                </div>
                            </div>
                        ))}



                </div>
            </div>

        
        
        <Shiping/>
    </>
  )
}

export default Home;
