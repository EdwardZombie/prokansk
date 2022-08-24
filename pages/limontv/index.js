import React, {useState, useEffect} from "react";
import axios from "axios";
import BreadCrumtLimon from "../../component/ui/BreadCrumtLimon";
import LeftBlogMenu from "../../component/ui/LeftBlogMenu";
import BlogsLimon from "../../component/blogs/BlogsLimon";
import Pagination from "../../component/Pagination";

const Limontv = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [currrentPage, setCurrrentPage] = useState(1)
    const [blogsPerPage] = useState(36)

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true)
            const res = await axios.get('http://prokansk.ru/api/v1/limontv/')
            setBlogs(res.data)
            setLoading(false)
        }
        getBlogs()
    }, [])

    const lastBlogIndex = currrentPage * blogsPerPage
    const firstBlogIndex = lastBlogIndex - blogsPerPage
    const currentBlog = blogs.slice(firstBlogIndex, lastBlogIndex)

    const paginate = pageNumber => setCurrrentPage(pageNumber)
    const nextPage = () => setCurrrentPage(prev => prev + 1)
    const prevPage = () => setCurrrentPage(prev => prev - 1)

    return (
        <>
            <BreadCrumtLimon/>

            <section className="inner-page-sec-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-lg-2 mb--40 mb-lg--0">
                            <div className="row space-db-lg--60 space-db--30">

                                <BlogsLimon blogs={currentBlog} loading={loading}/>

                            </div>
                            <div className="shop-product-wrap grid row">
                                <Pagination
                                    blogsPerPage={blogsPerPage}
                                    totalBlogs={blogs.length}
                                    paginate={paginate}
                                    currentBlog={currrentPage}
                                />
                            </div>
                        </div>

                        <LeftBlogMenu/>

                    </div>

                </div>
            </section>



        </>
    )
}

export default Limontv;