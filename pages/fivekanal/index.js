import React, {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import BreadCrumt5k from "../../component/ui/BreadCrumt5k";
import LeftBlogMenu from "../../component/ui/LeftBlogMenu";
import Blogs5k from "../../component/blogs/Blogs5k";


const Fivekanal = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [currrentPage, setCurrrentPage] = useState(1)
    const [blogsPerPage] = useState(9)

    useEffect(() => {
        const getBlogs = async () => {
            setLoading(true)
            const res = await axios.get('http://prokansk.ru/api/v1/5tv/')
            setBlogs(res.data)
            setLoading(false)
        }
        getBlogs()
    }, [])

    const lastBlogIndex = currrentPage * blogsPerPage
    const firstBlogIndex = lastBlogIndex - blogsPerPage
    const currentBlog = blogs.slice(firstBlogIndex, lastBlogIndex)

    const paginate = pageNumber => setCurrrentPage(pageNumber)
    const nextPage = () => setCurrrentPage(prev => prev+1)
    const prevPage = () => setCurrrentPage(prev => prev-1)

    return (
    <>
        <BreadCrumt5k />

        <section className="inner-page-sec-padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 order-lg-2 mb--40 mb-lg--0">
                        <div className="row space-db-lg--60 space-db--30">

                                    <Blogs5k blogs={currentBlog} loading={loading} />

                        </div>
                    </div>

                    <LeftBlogMenu />
                </div>
            </div>
        </section>

    </>
    )
}

export default Fivekanal;