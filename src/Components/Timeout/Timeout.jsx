import { useState, useEffect } from "react";

export const DelayedMessage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
            setMessage('Delayed message after 2 seconds!');
        }, 10000);

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        console.log(message)
    );
};