import {useState} from 'react';

interface ServiceComponentProps {
    title: string;
    pic?: boolean;
}

const ServiceComponent: React.FunctionComponent<ServiceComponentProps> = (props) => {
    return (
        <div className="w-full relative bg-[#1f1f1f] flex flex-row items-center justify-between px-10 border-b h-32 border-[#5c5757] text-white text-4xl">
            <p>{props.title}</p>
            <button className=" border p-2 rounded-full border-white">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="white" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
            </button>
            {props.pic && <img src="../public/wooden_house_smol.jpg" className="h-12 w-24 absolute" alt=""/>}
        </div>
    );
};

export default  ServiceComponent;