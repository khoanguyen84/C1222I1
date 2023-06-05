import React, { useState } from "react";
// ý nghĩa (chức năng): quản lý trạng thái
// cú pháp useState
// const [state, setState] = useState(initState)
// const [gender, setGender] = useState(initState)
// Cách thức hoạt động:
// + initState: trạng thái khởi tạo, nó có thể là:
//      - các KDL nguyên thủy: number, string, boolean, null, underfined 
//      - các KDL: array, object, function (callback function)
// + state đầu tiên = initState
//      - ví dụ: const [count, setCount] = useState(10) => initState = 10; count = 10
//      - Từ lần thứ 2 trở đi (nếu có), hàm setCount sẽ cập nhật lại giá trị của count
// + Mỗi khi state được cập nhật thì component sẽ được re-render
function UseState() {

    // const handleIncreament = () => {
    //     document.getElementById("h_1").innerText = Number(document.getElementById('h_1').innerText) + 1
    // }

    // return (
    //     <div style={{ paddingLeft: "100px" }}>
    //         <h1 id="h_1">0</h1>
    //         <button onClick={handleIncreament}>Increament</button>
    //     </div>
    // )
    const [count, setCount] = useState(1)
    const [disabledIncreament, setDisableIncreament] = useState(false)

    const handleIncreament = () => {
        if (count < 10) {
            setCount(count + 1)
        }
        setDisableIncreament(count >= 10)
    }

    const handleDescrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
        setDisableIncreament(count <= 0)
    }
    return (
        <div style={{ paddingLeft: "100px" }}>
            <h1>{count}</h1>
            <button disabled = {disabledIncreament} onClick={handleIncreament}>Increament</button>
            <button disabled = {count <= 0} onClick={handleDescrement}>Descreament</button>
        </div>
    )
}

export default UseState;