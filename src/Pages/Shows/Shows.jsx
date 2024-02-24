import './Shows.css'
import ShowCard from '../../Components/ShowCard/ShowCard';

const Shows = () => {
    return (
        <main className='flex flex-col items-center justify-center mb-4 lg:mb-8'>
            <header className='text-3xl font-bold text-[whitesmoke] my-3'>Upcoming Shows</header>
            <ShowCard />
        </main>
    )
}

export default Shows