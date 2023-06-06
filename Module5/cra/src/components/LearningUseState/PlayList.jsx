import React, { useState, useRef } from "react";

function PlayList() {
    const [playlist, setPlaylist] = useState([
        "Vì mẹ anh bắt chia tay",
        "Waiting for you",
        "Nắng ấm xa dần"
    ])

    const [songname, setSongname] = useState()

    const songnameRef = useRef();

    const handleAddToPlaylist = () => {
        // let newList = playlist.concat(songname);
        // let newList = [...playlist, songname]
        // setPlaylist(newList)
        setPlaylist((prev) => {
            let newList = [...prev, songname]
            return newList
        })
        setSongname('');
        songnameRef.current.focus()
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
            <div className="d-flex align-items-center">
                <label className="text-success">Song name</label>
                <input type="text" className="form-control w-25 mx-2"
                    value={songname}
                    onInput={(e) => setSongname(e.target.value)}
                    ref={songnameRef}
                />
                <button className="btn btn-sm btn-success"
                    onClick={handleAddToPlaylist}
                >
                    <i className="fa fa-plus me-2"></i>
                    Add
                </button>
            </div>
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

export default PlayList;