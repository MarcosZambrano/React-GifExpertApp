import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                ? ( <h4>Cargando...</h4> )
                : null
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            {...image}
                        />
                    ))
                }
                <li>título</li>
            </div>
        </>
    )
}