import NewsComponent from "./NewsComponent";

export default function NewsShowcase() {


    return (
        <div className="bg-[#1f1f1f] border-[#5c5757] grid grid-rows-2 grid-cols-2">
            <div className="row-start-1 row-end-2 col-span-1">
                <NewsComponent 
                    hero={true}
                    title={"lorem ipsum dolor sit amet"}
                    imgSrc={"../../public/hero_img.jpg"}
                />
            </div>
            <div className="row-span-1 col-span-1">
                <NewsComponent 
                    hero={true}
                    title={"lorem ipsum dolor sit amet"}
                    imgSrc={"../../public/hero_img.jpg"}
                />

            </div>
            <div className="row-span-1 col-span-1">
                <NewsComponent 
                    hero={true}
                    title={"lorem ipsum dolor sit amet"}
                    imgSrc={"../../public/hero_img.jpg"}
                />
            </div>

        </div>
    )
}