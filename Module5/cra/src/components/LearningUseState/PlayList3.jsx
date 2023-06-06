import React, { useState } from "react";

function PlayList3() {
    const [state, setState] = useState({
        playlist: [
            "Vì mẹ anh bắt chia tay",
            "Waiting for you",
            "Nắng ấm xa dần"
        ],
        songname: ''
    })

    const handleAddToPlaylist = (e) => {
        e.preventDefault();
        setState((prev) => {
            let newList = [...prev.playlist, songname];

            return {
                ...prev,
                playlist: newList,
                songname: ''
            }
        })
    }

    const handleRemove = (song) => {
        let confirm = window.confirm(`Are you sure to remove ${song} from playlist?`)
        if (confirm) {
            setState((prev) => {
                let newList = prev.playlist.filter((item) => item != song)
                return {
                    ...prev,
                    playlist: newList
                };
            })
        }
    }

    const { playlist, songname } = state;
    return (
        <div>
            <h1 className="display-5 text-warning fw-bolder">My Favourite Songs</h1>
            <form onSubmit={handleAddToPlaylist} className="d-flex align-items-center">
                <label className="text-success">Song name</label>
                <input type="text" className="form-control w-25 mx-2"
                    value={songname}
                    onInput={(e) => setState({...state, songname: e.target.value})}
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

export default PlayList3;