import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../Utils/Helpers';
import './Contact.css';
import krisKurzawa6 from '../../assets/images/KrisKurzawa6.png';
import { LazyLoadImage } from "react-lazy-load-image-component";


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please Enter A Valid Email');
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your email ${name}!  I will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        console.log(templateParams);
    }
    return (
        <main className='flex flex-col items-center'>
            <h2 className="text-[whitesmoke] text-3xl font-bold lg:text-6xl mt-5">Contact Me</h2>
            <LazyLoadImage src={krisKurzawa6} className='kris opacity-80 mt-1 lg:mt-2  w-[75%] h-auto' />
            <form onSubmit={handleSubmit} className='emailForm flex flex-col content-center m-[10px] lg:m-[20px] w-[75%] lg:w-[50%]'>
                <input
                    className='input'
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className='input'
                    type='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='input'
                    type='subject'
                    placeholder='Subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    className='input'
                    cols='30'
                    rows='5'
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <button className='submit-button w-[40%] lg:w-[17.5%]' type='submit'>Submit</button>
            </form>
            {errorMessage && (
                <article>
                    <p className="error-text text-[whitesmoke] text-4xl mb-5">{errorMessage}</p>
                </article>
            )}
        </main>
    )
}

export default Contact;