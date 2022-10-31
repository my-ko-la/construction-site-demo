import NewsComponent from "./NewsComponent";

export default function NewsShowcase() {


    return (
        <div className="bg-[#1f1f1f] border-[#5c5757] outline-1 grid md:grid-cols-8 ">
            <div className="col-span-5 border-[#5c5757] border-r border-b">
                    <NewsComponent 
                        hero={true}
                        title={"WHAT TO LOOK FOR IN A GREAT CONTRACTOR"}
                        imgSrc={"src/assets/news-house-hero.jpg"}
                        date={"11/02/2022"}
                    />
            </div>
            <div className="flex flex-col justify-center items-center col-span-3">
                <div className="border-[#5c5757] border-b">
                    <NewsComponent 
                        hero={false}
                        title={"TOP RENOVATION TIPS TO REMODEL YOUR HOUSE"}
                        imgSrc={"src/assets/news-house-1.jpg"}
                        date={"07/11/2021"}
                    />
                </div>
                <div className="border-[#5c5757] border-b">
                    <NewsComponent 
                        hero={false}
                        title={"BUILDING YOUR HOME FROM SCRATCH"}
                        imgSrc={"src/assets/news-house-2.jpg"}
                        date={"29/09/2021"}
                    />
                </div>
            </div>

        </div>
    )
}