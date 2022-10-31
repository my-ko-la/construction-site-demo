import { useState, useRef, useLayoutEffect } from 'react';
import StyledForm from './StyledForm';

export default function ContactForm() {

    const [showForm, setShowForm] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const revealForm = () => {
        setShowForm(state => !state);
    }

    console.log("ref", typeof ref);
    console.log("setShowForm", typeof setShowForm);
    console.log("showForm", typeof showForm);
    console.log("ref.current", typeof ref.current);

    useLayoutEffect(() => {
        function scrollFormIntoView() {
            setTimeout(() =>{
            ref.current!.scrollIntoView({behavior:'smooth'});
            }, 200);
        }

        ref.current && scrollFormIntoView();
    });

    return (
        <div className="bg-[#1f1f1f] border-b border-[#5c5757] flex flex-col justify-center items-center py-12">
            <p className="uppercase text-white md:text-6xl pb-10">Let's build together</p>
            <button id="contact" onClick={revealForm} className="hover:transition-colors hover:ease-linear hover:duration-500 hover:text-white hover:shadow-[inset_250px_0_0_0_#644516] duration-400 text-sm z-30 md:text-xl px-6 md:px-10 text-black h-16 text-left uppercase bg-[#CC9644]">Get in touch</button>
            {showForm && 
            <div ref={ref} className="pt-10">
                <StyledForm />
            </div>
            }
        </div>
    )
}
