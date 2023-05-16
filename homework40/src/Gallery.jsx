
export function Gallery({ data }) {
    if (data) {
        return (
            <ul className="gallery">
                {data.map((item, key) => {
                   return <li className="gallery-item" key={key}><img className="img" src={item.urls.small} alt={item.alt_description} /></li>
                })}
            </ul>
        )
    }

}