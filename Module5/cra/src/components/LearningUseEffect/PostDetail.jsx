import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function PostDetail() {
    const { postid } = useParams();
    const [postdetail, setPostDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://js-post-api.herokuapp.com/api/posts/${postid}`)
            .then(async (response) => {
                let post = await response.json();
                if(Object.keys(post).length == 0){
                    navigate('/not-found', {replace: true})
                }
                setLoading(false);
                setPostDetail(post);
            })
    }, [])

    return (
        <div className="container">
            {
                loading ? <Spinner /> : (
                    <div key={postdetail.id} className="mb-4">
                        <div className="card">
                            <img src={postdetail.imageUrl} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{postdetail.title}</h5>
                                <p className="card-text fst-italic">{postdetail.description}</p>
                                <p className="card-text fw-bold">Author: {postdetail.author}</p>
                                <p className="card-text fst-italic">Date: {(new Date(postdetail.createAt)).toLocaleDateString()}</p>
                                <Link to={'/post-list'}>
                                    <i className="fa fa-arrow-left me-2"> Back</i>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PostDetail;