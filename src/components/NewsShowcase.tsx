import NewsComponent from "./NewsComponent";

export default function NewsShowcase() {


    return (
        <div className="bg-[#1f1f1f] border-[#5c5757] border-b outline-1 grid md:grid-cols-8 ">
            <div className="col-span-5 border-[#5c5757] border-r border-b px-4">
                <NewsComponent 
                    hero={true}
                    title={"WHAT TO LOOK FOR IN A GREAT CONTRACTOR"}
                    imgSrc={"../../public/hero_img.jpg"}
                    date={"11/02/2022"}
                />
            </div>
            <div className="flex flex-col justify-center items-center col-span-3">
                <div className="border-[#5c5757]">
                    <NewsComponent 
                        hero={false}
                        title={"TOP RENOVATION TIPS TO REMODEL YOUR HOUSE"}
                        imgSrc={"../../public/hero_img.jpg"}
                        date={"07/11/2021"}
                    />
                </div>
                <div className="border-[#5c5757]">
                    <NewsComponent 
                        hero={false}
                        title={"BUILDING YOUR HOME FROM SCRATCH"}
                        imgSrc={"../../public/hero_img.jpg"}
                        date={"29/09/2021"}
                    />
                </div>
            </div>

        </div>
    )
}