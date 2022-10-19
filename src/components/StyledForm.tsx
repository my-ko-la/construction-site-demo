
export default function StyledForm() {

    return (
        <div>
            <form className="bg-[#CC9644] flex flex-col">
                <label className="mr-auto" htmlFor="">
                    Name:
                    <input className="" type="text" />
                </label>
                <label>
                    Email:
                    <input className="" type="text" />
                </label>
                <label>
                    What is your question:
                    <input className="" type="textarea" />
                </label>
            </form>
        </div>
    )
}