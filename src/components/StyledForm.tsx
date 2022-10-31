
export default function StyledForm() {

    return (
        <div>
            <form className="bg-[#1f1f1f] text-[#CC9644] flex flex-col md:grid md:grid-flow-row gap-x-8 grid-cols-3 grid-rows-4 gap-5">
                <label className="text-xl col-span-1 row-start-2" htmlFor="">
                    Name :
                    <input className="bg-[#1f1f1f] px-1 w-60 focus:outline-none ml-1 text-white border-b border-[#575c5c]" type="text" />
                </label>
                <label className="text-xl row-start-3 col-span-1">
                    Email :
                    <input className="bg-[#1f1f1f] px-1 w-60 focus:outline-none ml-1 text-white border-b border-[#575c5c]" type="text" />
                </label>
                <label className="text-xl flex flex-col gap-4 w-full col-start-2 col-span-2 row-span-3">
                    Your question :
                    <textarea className="bg-[#1f1f1f] p-1 text-sm h-32  focus:outline-none  text-white border border-[#575c5c]" />
                </label>
                <button className="row-start-4 col-start-2">Submit</button>
            </form>
        </div>
    )
}