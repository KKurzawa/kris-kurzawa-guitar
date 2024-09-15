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
            email: email
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
        <main className='contact-page-container flex flex-col items-center'>
            <h2 className="text-[whitesmoke] text-3xl font-bold lg:text-3xl mt-5">Contact Me</h2>
            <LazyLoadImage src={krisKurzawa6} className='kris mt-1 lg:mt-2  w-[75%] h-auto' />
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
                {/* small */}
                <button className='submit-btn md:hidden w-32 bg-[#97161D]' type='submit'>Submit</button>
                {errorMessage && (
                    <article className='md:hidden'>
                        <p className="error-text text-center mb-5 text-xl font-light">{errorMessage}</p>
                    </article>
                )}
                <article className='hidden md:flex justify-between items-center'>
                    <button className='submit-btn w-32 bg-[#97161D]' type='submit'>Submit</button>
                    <p className="error-text mb-5 text-2xl font-light">{errorMessage}</p>
                </article>
            </form>
        </main>
    )
}

export default Contact;