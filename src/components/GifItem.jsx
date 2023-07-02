export const GifItem = ({title, url, id}) => {
    return (
        <div classname="card">
            <img src={url} alt={title} />
            ´<p>{title}</p>
        </div>
    )
}