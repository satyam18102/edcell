import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import TeamCard from "./TeamCard"
import { Link } from "react-router-dom";

const teamfaculty = [
    {
        name: "Dr. Mahendra Prasad Agasty",
        about: "FIC ED Cell | President IIC",
        image: "/team/agasty.JPG"
    }
]

const teamstudent = [
    {
        name: "Girish Bharadwaj",
        about: "Chairperson",
        image: "/team/girish2.jpg"
    },
    {
        name: "Shaswat Tripathi",
        about: "Secretary | NR",
        image: "/team/saswatcrop.JPG"
    },
    

]




export default function Team() {
    return (
        <div className="px-4 lg:px-12 py-8 lg:py-16 bg-gradient-to-b 
         from-[#0c023d] to-black" id="members">
            <div className="flex justify-center">
                <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">Our Team</h1>
            </div>
            <div className="flex flex-col w-full gap-5 md:gap-10 my-11">
                <div className="flex flex-wrap justify-center gap-5">
                    {teamfaculty.map((item) => (<TeamCard name={item.name} about={item.about} image={item.image} />))}
                </div>
                <div className="flex flex-wrap justify-center gap-5 md:gap-20">
                    {teamstudent.map((item) => (<TeamCard name={item.name} about={item.about} image={item.image} />))}
                </div>
            </div>
            <div className="flex justify-center">
                <Link to="/members">
                    <button className="relative inline-flex md:h-12 md:w-42 sm:h-10 sm:wd-40 h-10 w-40  lg:h-16 lg:w-48 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2  hover:scale-105">
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
                        <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-gray-900 text-white text-xl font-semibold transition-transform duration-300 gap-2">
                            Explore <FaArrowUpRightFromSquare />
                        </span>
                    </button>


                </Link>
            </div>
        </div>
    )
}
