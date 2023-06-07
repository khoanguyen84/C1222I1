import React, { useState } from "react";

function ListItem(props) {
    const { song, index, handleRemove, handleEdit } = props;
    const [edit, setEdit] = useState(false);
    const [songName, setSongName] = useState();
    const handleClickEdit = () => {
        setEdit(false);
        handleEdit(songName, index);
    }
    const handleClickCancel = () => {
        setEdit(false);
        setSongName();
    }
    return (
        <li className="list-group-item bg-info text-white d-flex justify-content-between">
            {edit ? <input type='text' className='form-control w-75' defaultValue={songName || song}
                onInput={(e) => setSongName(e.target.value)}
            /> : songName || song}
            <div className="d-flex align-items-center justify-content-between">
                {
                    edit ? (
                        <div className="d-flex align-items-center justify-content-between">
                            <i role="button"
                                onClick={handleClickEdit}
                                className=" text-warning fw-bolder me-2 fa fa-save">
                            </i>
                            <i className="text-dark fw-bolder me-2 fa fa-cancel"
                                role="button"
                                onClick={handleClickCancel}
                            ></i>
                        </div>
                    ) :
                        (
                            <i role="button"
                                className="text-primary fw-bolder me-2 fa fa-edit"
                                onClick={() => setEdit(true)}
                            ></i>
                        )
                }
                <i role="button" className="text-danger fw-bolder fa fa-times"
                    onClick={() => handleRemove(song)}
                ></i>
            </div >
        </li >
    )
}
export default ListItem;