import React, { useState, useEffect } from "react";
import Spinner from './Spinner';
import { Link } from "react-router-dom";

function PostList() {
    const [postList, setPostList] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
            .then((response) => response.json())
            .then((payload) => {
                let totalRow = Number(payload.pagination._totalRows);
                let pageSize = Number(payload.pagination._limit);
                setTotalPage(Math.ceil(totalRow / pageSize));
                setPostList(payload.data);
                setLoading(false)
            })
    }, [page])
    const handlePreviousClick = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNextClick = () => {
        if (page < totalPage) {
            setPage(page + 1)
        }
    }
    console.log(totalPage);
    return (
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    <li className="page-item me-2">
                        <button className="btn btn-warning btn-sm" disabled={page == 1}
                            onClick={handlePreviousClick}
                        >
                            <i className="fa fa-chevron-left me-2"></i>
                            Previous
                        </button>
                    </li>
                    <li className="page-item" >
                        <button className="btn btn-warning btn-sm" disabled={page == totalPage}
                            onClick={handleNextClick}
                        >
                            Next
                            <i className="fa fa-chevron-right ms-2"></i>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="row">
                {
                    loading ? <Spinner /> :
                        (postList.map((post) => (
                            <div key={post.id} className="col-sm-6 mb-4">
                                <div className="card">
                                    <img src={post.imageUrl} alt="" />
                                    <div className="card-body">
                                        <Link to={`/post-detail/${post.id}`}>
                                            <h5 className="card-title">{post.title}</h5>
                                        </Link>
                                        <p className="card-text fst-italic">{post.description}</p>
                                        <p className="card-text fw-bold">Author: {post.author}</p>
                                        <p className="card-text fst-italic">Date: {(new Date(post.createAt)).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>
                        )))
                }

            </div>
        </div>
    )
}
export default PostList;