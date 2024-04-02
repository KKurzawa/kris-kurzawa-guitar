import './Shows.css'
import ShowCard from '../../Components/ShowCard/ShowCard';

const Shows = () => {
    return (
        <main className='shows-page-container flex flex-col items-center justify-center mb-4 lg:mb-8'>
            <header className='my-3 text-3xl font-bold'>Upcoming Shows</header>
            <ShowCard />
        </main>
    )
}

export default Shows