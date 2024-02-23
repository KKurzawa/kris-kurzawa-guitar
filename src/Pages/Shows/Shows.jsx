import './Shows.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import ShowCard from '../../Components/ShowCard/ShowCard';

const Shows = () => {

    return (
        <main className='shows-container flex flex-col items-center justify-center mb-8'>
            <ShowCard />
        </main>
    )
}

export default Shows