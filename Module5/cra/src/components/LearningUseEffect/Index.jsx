import React, { useState } from "react";
import Contact from './Contact';
import PostList from './PostList';

// useEffect() => thực hiện tại 2 thời điểm khi component được mounted và unmounted khỏi DOM
// Cú pháp:
// useEffect(callBack, [deps])
// Có 3 trương hợp sử dụng
// TH 1: useEffect(callBack)
//  -> callback function sẽ được gọi lại mỗi khi state thay đổi
// TH 2: useEffect(callBack, [])
//  -> callback function chỉ được gọi 1 lần duy nhất khi component được mounted vào DOM
// TH 3: useEffect(callBack, [deps])
//  -> callback function sẽ được gọi lại khi deps thay đổi

// Quy tắc:
// 1. Callback function sẽ được thực thi khi component được mounted DOM

function Index() {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <button className="btn btn-outline-primary btn-sm" onClick={() => setToggle(!toggle)}>Toggle Posts</button>
            {toggle && <PostList />}
        </div>
    )
}

export default Index;