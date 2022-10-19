

export default function NewsComponent({hero, title, imgSrc, date}: {hero:boolean, title: string, imgSrc: string, date:string}) {


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row w-full py-3 md:px-10 justify-around">
                <p className="mr-auto text-[#434141] ">NEWS</p>
                <span className="text-[#ac9494]">{date}</span>
            </div>
            {hero ? (
            <>
                <img src={imgSrc} className="object-contain " alt="" /> 
                <div>
                    <p className="text-white md:text-6xl text-left pt-2">{title}</p>
                    <p className="text-[#ac9494] text-lg md:pt-4 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero obcaecati, repellendus quo mollitia deleniti, dolore dolores ut doloribus culpa odit velit consequatur consequuntur recusandae ex a. Non, sint provident!
                    </p>
                </div>
            </>
            )
            :
            <>
                <img src={imgSrc} className="object-scale-down px-4" alt="" /> 
                <p className="text-white md:text-4xl text-left px-4 py-2">{title}</p>
            </>
            }
            
        </div>
    )

}