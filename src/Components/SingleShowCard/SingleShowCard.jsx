import './SingleShowCard.css'
import { ShowsList } from '../../assets/data/showsList'

const SingleShowCard = () => {
    function notYetAvailable() {
        setTimeout(() =>
            alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
            , 500)
    }

    function noCover() {
        setTimeout(() =>
            alert("This is a free show!")
            , 500)
    }

    function reservations() {
        setTimeout(() =>
            alert("You must contact the venue directly for reservations.")
            , 500)
    }

    const date = ShowsList[0].date;
    const time = ShowsList[0].time;
    const band = ShowsList[0].band;
    const bandLink = ShowsList[0].bandLink;
    const venue = ShowsList[0].venue;
    const city = ShowsList[0].city;
    const venueLink = ShowsList[0].venueLink;
    const ticketLink = ShowsList[0].ticketLink;

    return (
        <main>
            <header className='text-center text-3xl font-bold'>Next Show</header>
            <ol className='single-show-container flex flex-col items-center justify-center text-base lg:text-2xl '>
                <section className='flex flex-row py-0 lg:py-[.1rem]'>
                    <li className='pr-1'>{date}</li>
                    <li className='pl-1'>{time}</li>
                </section>
                <li className='single-band py-0 lg:py-[.1rem]'>
                    {bandLink === false ? (
                        <li>{band}</li>
                    ) : (
                        <button className='single-band-btn' onClick={() => setTimeout(() =>
                            window.open(bandLink, '_blank')
                            , 500)}>{band}</button>
                    )}
                </li>
                <button onClick={() => setTimeout(() =>
                    window.open(venueLink, '_blank')
                    , 500)}><li className='single-venue py-0 lg:py-[.1rem]'>{venue}</li></button>
                <li className='text-center py-0 lg:py-[.1rem]'>{city}</li>
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
                                    <button onClick={() => setTimeout(() => window.open(ticketLink, '_blank'), 500)} className='single-ticket-btn'>Tickets</button>
                                )}
                </li>
            </ol>
        </main>
    )
}

export default SingleShowCard