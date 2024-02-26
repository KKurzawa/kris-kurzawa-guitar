import './SingleShowCard.css'
import { ShowsList } from '../../assets/data/showsList'

const SingleShowCard = () => {
    function notYetAvailable() {
        alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
    }

    function noCover() {
        alert("This is a free show!")
    }

    function reservations() {
        alert("You must contact the venue directly for reservations.")
    }

    const date = ShowsList[0].date;
    const time = ShowsList[0].time;
    const band = ShowsList[0].band;
    const venue = ShowsList[0].venue;
    const venueLink = ShowsList[0].venueLink;
    const ticketLink = ShowsList[0].ticketLink;

    return (
        <main>
            <header className='text-center text-[whitesmoke] text-3xl font-bold'>Next Show</header>
            <ol className='single-show-container flex flex-col items-center justify-center text-[whitesmoke] text-base lg:text-2xl '>
                <section className='flex flex-row py-0 lg:py-[.1rem]'>
                    <li className='pr-1'>{date}</li>
                    <li className='pl-1'>{time}</li>
                </section>

                <li className='py-0 lg:py-[.1rem]'>{band}</li>
                <button onClick={() => setTimeout(() =>
                    window.open(venueLink, '_blank')
                    , 500)}><li className='single-venue py-0 lg:py-[.1rem]'>{venue}</li></button>

                <li>
                    {ticketLink === false ? (
                        <button onClick={notYetAvailable} className='single-ticket-btn '>Tickets</button>
                    ) :
                        ticketLink === 1 ? (
                            <button onClick={noCover}
                                className='single-ticket-btn'>Tickets</button>
                        ) :
                            ticketLink === 2 ? (
                                <button onClick={reservations} className='single-ticket-btn'>Tickets</button>
                            ) :
                                (
                                    <a href={ticketLink} target="_blank" rel="noreferrer" ><button className='single-ticket-btn'>Tickets</button></a>
                                )}
                </li>
            </ol>
        </main>
    )
}

export default SingleShowCard