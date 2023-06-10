import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUrl, getUsersData } from "../App";
import { Routes, Route } from "react-router-dom";
import Photo from "./Photo";

export default function Albums({ userId, isPhotos }) {
    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getUsersData(`/albums`, setAlbums);
    }, [])

    useEffect(() => {
        getUsersData('/photos', setPhotos)
        
    }, [])


    return (
        <>
            <h2>Список альбомів</h2>
            <ul className="list-group overflow-hidden d-flex align-items-center justify-content-center">
                {albums.filter(album => album.userId === userId).map(alb => {
                    return (
                        <li key={alb.id} className="list-group-item item-width">
                            <span className="album-title">{alb.title}</span>
                            {isPhotos ? <Photo photos={photos} albumId={alb.id} /> : null}
                        </li>
                    )
                })}

            </ul>
        </>
    )

}
