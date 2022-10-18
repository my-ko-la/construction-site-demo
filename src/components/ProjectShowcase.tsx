import { useState } from 'react';

const ProjectShowcase = () => {

    const [picture, setPicture] = useState<string>('');
    const [name, setName] = useState<string>('Providence Village Town Hall');


    return (
        <div className="bg-[#1f1f1f] md:h-full flex md:flex-row w-screen flex-col">
           <div className="border-b border-r px-5 flex flex-col border-[#5c5757]">
               <p className="text-[#696969] text-md mt-6">Featured Project</p>
               <p className="md:text-6xl text-xl text-white max-w-lg mt-6">{name}</p>
               <a href="" className="text-white mt-12">View Project {'->'}</a>
               <div className="mt-auto flex flex-row gap-4 pt-10 pb-5">
                    <button className="border text-white h-10 w-10 outline-1 rounded-full border-white">
                        {'<-'}
                    </button>
                    <button className="border text-white h-10 w-10 outline-1 rounded-full border-white">
                        {'->'}
                    </button>
               </div>
           </div>
           <div className="bg-[#1f1f1f] w-full border-b border-[#5c5757] border-l md:border-l-0 md:h-full">
            <img src="../public/showcase_1.jpg" className="w-full h-full p-3 pr-0" alt="Modern style town hall" />
           </div>
        </div>

    );
}


export default ProjectShowcase;