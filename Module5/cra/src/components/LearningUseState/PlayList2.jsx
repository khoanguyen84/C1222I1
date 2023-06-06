import React, { useState } from "react";

function PlayList2() {
    const [playlist, setPlaylist] = useState([
        "Vì mẹ anh bắt chia tay",
        "Waiting for you",
        "Nắng ấm xa dần"
    ])

    const [songname, setSongname] = useState()

    const handleAddToPlaylist = (e) => {
        e.preventDefault();
        setPlaylist((prev) => {
            let newList = [...prev, songname]
            return newList
        })
        setSongname('');
    }

    const handleRemove = (song) => {
        let confirm = window.confirm(`Are you sure to remove ${song} from playlist?`)
        if (confirm) {
            setPlaylist((prev) => {
                let newList = prev.filter((item) => item != song)
                return newList;
            })
        }
    }
    return (
        <div>
            <h1 className="display-5 text-warning fw-bolder">My Favourite Songs</h1>
            <form onSubmit={handleAddToPlaylist} className="d-flex align-items-center">
                <label className="text-success">Song name</label>
                <input type="text" className="form-control w-25 mx-2"
                    value={songname}
                    onInput={(e) => setSongname(e.target.value)}
                />
                <button className="btn btn-sm btn-success" type="submit">
                    <i className="fa fa-plus me-2"></i>
                    Add
                </button>
            </form>
            <h1 className="display-5 text-primary">Playlist</h1>
            <ul className="list-group w-50">
                {
                    playlist.map(function (song, index) {
                        return (
                            <li key={song} className="list-group-item bg-info text-white d-flex justify-content-between">
                                {song}
                                <span role="button" className="text-dark fw-bolder"
                                    onClick={() => handleRemove(song)}
                                >
                                    <i className="fa fa-times"></i>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PlayList2;