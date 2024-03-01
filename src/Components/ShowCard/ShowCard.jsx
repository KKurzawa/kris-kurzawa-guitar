import './ShowCard.css'
import { ShowsList } from '../../assets/data/showsList'

const ShowCard = () => {
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

    return (
        <>
            {ShowsList.map((item) => (
                <ol key={item.index} className='show-container flex flex-col items-center justify-center text-[whitesmoke] text-base lg:text-2xl '>
                    <section className='flex flex-row py-0 lg:py-[.1rem]'>
                        <li className='pr-1'>{item.date}</li>
                        <li className='pl-1'>{item.time}</li>
                    </section>

                    <li className='py-0 lg:py-[.1rem]'>{item.band}</li>
                    <button onClick={() => setTimeout(() =>
                        window.open(item.venueLink, '_blank')
                        , 500)}><li className='venue py-0 lg:py-[.1rem]'>{item.venue}</li></button>

                    <li>
                        {item.ticketLink === false ? (
                            <button onClick={notYetAvailable} className='ticket-btn '>Tickets</button>
                        ) :
                            item.ticketLink === 1 ? (
                                <button onClick={noCover}
                                    className='ticket-btn'>Tickets</button>
                            ) :
                                item.ticketLink === 2 ? (
                                    <button onClick={reservations} className='ticket-btn'>Tickets</button>
                                ) :
                                    (
                                        <button onClick={() => setTimeout(() => window.open(item.ticketLink, '_blank'), 500)} className='ticket-btn'>Tickets</button>
                                    )}
                    </li>
                </ol>
            ))}
        </>
    )
}

export default ShowCard