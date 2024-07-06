import { FaLocationDot } from "react-icons/fa6";


const ContactUs = ()=>{
    return(
        <div className="grid grid-cols-2 gap-8 items-center">
            <div className="grid justify-end items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.533993135804!2d86.43133907602395!3d23.799603286884317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd9b87defc1d%3A0x282c97358c651416!2sEdurights%20Admission%20consultancy!5e0!3m2!1sen!2sin!4v1720272857427!5m2!1sen!2sin" width="600" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <div className="flex flex-col items-center w-[70%] p-5 m-5 gap-4">
                    <div>
                        <div className="text-2xl">
                            <p className="font-bold"><span className="text-4xl text-red-600"><FaLocationDot/></span>2nd floor office no. 208, New Market, Kasturba Nagar, Dhanbad, Jharkhand 826001</p>
                            <p><span className="font-bold">Phone :</span> +91 6202400037</p>
                            <p><span className="font-bold">Email :</span> edurightsconsultant@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#f3ec959a] p-2"> 
                            <h1 className="font-bold text-2xl">For more info, email us!</h1>
                            <form className="flex flex-col gap-1">
                                <input className="w-fit rounded-sm p-2 my-1" type="text" required placeholder="Name"/>
                                <input className="w-fit rounded-sm p-2 my-1" type="Email" placeholder="Email Id"/>
                                <input className="w-fit rounded-sm p-2 my-1" type="text" placeholder="Contact Number"/>
                                <textarea className="w-fit rounded-sm p-2 my-1" name="textarea" id="" cols="80" rows="7">message</textarea>
                            </form>
                        </div>    
                    </div>    
                </div>    
            </div>    
        </div>    
    );
}

export default ContactUs;