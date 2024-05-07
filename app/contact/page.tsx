import ContactMe from "./components/ContactMe"
import Form from "./components/Form"

const Contact: React.FC = () =>{
    return(
        <>
            <div className="flex w-full p-20 font-dmSans">
                <ContactMe />
                <Form />
            </div>
        </>
    )
}

export default Contact