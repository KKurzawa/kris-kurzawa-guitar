import './Shows.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ShowsList } from '../../assets/data/showsList';

const Shows = () => {
    function notYetAvailable() {
        alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
    }

    function noCover() {
        alert("This is a free show!")
    }

    function reservations() {
        alert("You must contact the venue directly for reservations.")
    }

    return (
        <main>
            {ShowsList.map((item) => (
                <ol key={item.index} className='flex flex-col items-center text-[whitesmoke] text-2xl'>
                    <section className='flex flex-row'>
                        <li className=''>{item.date}</li>
                        <li className=''>{item.time}</li>
                    </section>
                    <section className='flex flex-row'>
                        <li className=''>{item.band}</li>
                        <li>@</li>
                        <a href={item.venueLink} target="_blank" rel="noreferrer"><li className=''>{item.venue}</li></a>
                    </section>
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
                                        <a href={item.ticketLink} target="_blank" rel="noreferrer" ><button className='ticket-btn'>Tickets</button></a>
                                    )}
                    </li>
                </ol>
            ))}
        </main>
    )
}

export default Shows