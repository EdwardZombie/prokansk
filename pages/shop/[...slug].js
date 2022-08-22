import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import Items from "/component/Items";
import Pagination from "../../component/Pagination";
import TitleCategory from "../../component/TitleCategory"
import TitleSubCategory from "../../component/TitleSubCategory"
import CategoryLeft from "../../component/ui/products/CategoryLeft";
import BreadCrump from "../../component/ui/BreadCrump";

const ItemsPage = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [currrentPage, setCurrrentPage] = useState(1)
    const [itemsPerPage] = useState(21)
    const router = useRouter()
    const { slug } = router.query
    const slugarr = slug || []
    useEffect(() => {

        const getItems = async () => {
            setLoading(true)
            const res = await axios.get(`http://prokansk.ru/api/v1/shop/${slugarr[0]}/${slugarr[1]}`)
            setItems(res.data)
            setLoading(false)
        }
        getItems()
    }, [slug])

    const lastItemIndex = currrentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItem = items.slice(firstItemIndex, lastItemIndex)

    const paginate = pageNumber => setCurrrentPage(pageNumber)
    const nextPage = () => setCurrrentPage(prev => prev+1)
    const prevPage = () => setCurrrentPage(prev => prev-1)

    return (
        <>
            <BreadCrump/>
            <main className="inner-page-sec-padding-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-9 order-lg-2">
                            <div className="shop-toolbar with-sidebar mb--30">
                                <div className="row align-items-center">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3><TitleCategory items={currentItem} loading={loading} />/<TitleSubCategory items={currentItem} loading={loading} /></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-product-wrap grid with-pagination row space-db--30 shop-border">
                                <Items items={currentItem} loading={loading} />
                            </div>
                            <div className="shop-product-wrap grid row">
                                <Pagination
                                    blogsPerPage={itemsPerPage}
                                    totalBlogs={items.length}
                                    paginate={paginate}
                                    currentBlog={currrentPage}
                                />
                            </div>
                        </div>
                        <CategoryLeft/>
                    </div>
                </div>
            </main>

        </>
    )
}

export default ItemsPage;