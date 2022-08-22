import React from 'react'

const Pagination = ({ blogsPerPage, totalBlogs, paginate, currentBlog }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className="row pt--30">
                <div className="col-md-12">
                    <div className="pagination-block">
                <ul className="pagination-btns flex-center">
                    {
                        pageNumbers.map(number => (
                            <li className={number === currentBlog ? "active" : ""} key={number}>
                                <a href="#" className={'single-btn'} onClick={() => paginate(number)}>
                                    {number}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Pagination