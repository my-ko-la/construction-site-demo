import { useState } from 'react';
import StyledForm from './StyledForm';

export default function ContactForm() {

    const [formState, setFormState] = useState<boolean>(false)
    
    const hoverStyle = 
    {
        hover: {
            "box-shadow": "inset 200px 0 0 0 #644516",
            "transition":" all .5s linear",
            "color": "white",
        }
    }

    return (
        <div className="bg-[#1f1f1f] border-b border-[#5c5757] flex flex-col justify-center items-center py-12">
            <p className="uppercase text-white md:text-6xl pb-10">Let's build together</p>
            <button id="contact" onClick={() => setFormState(prev => 
            {
                console.log(!prev);
                return !prev;
            })} className="hover:transition-colors hover:ease-linear hover:duration-500 hover:text-white hover:shadow-[inset_200px_0_0_0_#644516] duration-400 text-sm z-30 md:text-xl px-6 md:px-10 text-black h-16 text-left uppercase bg-[#CC9644]">Contact Us</button>
            {formState && <StyledForm />}
        </div>
    )
}
