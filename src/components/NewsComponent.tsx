

export default function NewsComponent({hero, title, imgSrc}: {hero:boolean, title: string, imgSrc: string}) {


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center">
                <p>NEWS</p>
                <span>11/05/2022</span>
            </div>
            {hero ? 
            <img src={imgSrc} alt="" /> 
            :
            <img src={imgSrc} alt="" /> 
            }
            <p>{title}</p>
            {hero && <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officiis perferendis soluta debitis reprehenderit</span>}
        </div>
    )

}