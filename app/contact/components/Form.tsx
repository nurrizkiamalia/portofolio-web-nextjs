const Form: React.FC = () => {
    return(
        <>
        <div className="form-box flex flex-col gap-[31px] w-[50%] ">
            <h2 className="text-heading2 font-medium">Let’s build something cool together</h2>
            
            <div className="input-field flex flex-col text-paraMd">
                <label>Name</label>
                <input type="text" placeholder="James Robert" className="py-3 bg-transparent border-b-[1px] border-offblack text-paraLg " />
            </div>
            
            <div className="input-field flex flex-col text-paraMd">
                <label>Email</label>
                <input type="email" placeholder="ayush.barnwal@brightscout.com"  className="py-3 bg-transparent border-b-[1px] border-offblack text-paraLg " />
            </div>
            
            <div className="input-field flex flex-col text-paraMd">
                <label>Subject</label>
                <input type="text" placeholder="For web design work Enquire "  className="py-3 bg-transparent border-b-[1px] border-offblack text-paraLg " />
            </div>
            <div className="input-field flex flex-col text-paraMd">
                <label>Message</label>
                <textarea placeholder="Type your message"  className="py-3 bg-transparent border-b-[1px] border-offblack text-paraLg "></textarea>
            </div>
            
            <input type="submit" value="Submit" className=" border-2 border-transparent text-paraMd self-start bg-black py-6 px-[68.5px] hover:border-black rounded-full text-white hover:bg-offwhite hover:text-offblack "/>
        </div>
        </>
    )
}

export default Form