export default function Photo({ photos, albumId }) {
    if (!photos || photos.length === 0) {
        return <div>No photos available</div>;
    }


    const albumsPhotos = photos.filter(photo => photo.albumId === parseInt(albumId));

    if (albumsPhotos.length === 0) {
        return <div>No photos found for the specified album</div>;
    }

    const albumsFirstPhoto = albumsPhotos[0];
   

    return (
            <img src={albumsFirstPhoto.thumbnailUrl} alt={albumsFirstPhoto.title} />
    );
}
