
import NewCardStyle from "./NewCardStyle"
import TeamCard from "./TeamCard"

const fic = [
    {
        name: "Dr. Mahendra Prasad Agasty",
        about: "FIC ED Cell | Secretary IIC",
        image: "/team/agasty.JPG"
    }
]

const teamfaculty=[
    {
        name:"Dr. Sanghamitra Das",
        about:"",
        image:""
    },
    {
        name:"Dr. Arnab Pal",
        about:"",
        image:""
    },
    {
        name:"Dr. Tapas Maji",
        about:"",
        image:""
    },
    {
        name:"Mr. Satish Kumar Das",
        about:"",
        image:""
    },
    {
        name:"Dr. Annapurna Mishra",
        about:"",
        image:""
    },
    {
        name:"Dr. Sudhansu Mohan Biswal",
        about:"",
        image:""
    },
    {
        name:"Mrs. Sweta Mohanty",
        about:"",
        image:""
    },
    {
        name:"Dr. Pratap Ranjan Mohanty",
        about:"",
        image:""
    },
    {
        name:"Dr. Nibedita Swain",
        about:"",
        image:""
    },
    {
        name:"Dr. Nibedita Kar",
        about:"",
        image:""
    },
    {
        name:"Dr. Siba Shankar Nayak",
        about:"",
        image:""
    },

]

const teamstudent = [
    {
        name: "Girish Bharadwaj",
        about: "Chairperson",
        image: "/team/girish2.jpg"
    },
    {
        name: "Saswat Tripathi",
        about: "Secretary | NR",
        image: "/team/saswatcrop.JPG"
    },
    {
        name: "Sailendra Biswal",
        about: "4th Year",
        image: ""
    },
    {
        name: "Armaan Biswal",
        about: "4th Year",
        image: ""
    },
    {
        name: "Prayash Nayak",
        about: "4th Year",
        image: ""
    },
    {
        name: "Akankhsya",
        about: "4th Year",
        image: ""
    },
    {
        name: "Shubham Kumar",
        about: "3rd Year",
        image: "/team/shubham.jpg"
    },
    {
        name: "Anmol Singh",
        about: "3rd Year",
        image: "/team/anmol.JPG"
    },
    {
        name: "Gomesh Agarwall",
        about: "3rd Year",
        image: ""
    },
    {
        name: "Piush Praharaj",
        about: "3rd Year",
        image: "/team/piush2.JPG"
    },
    {
        name: "Ayush Singh",
        about: "3rd Year",
        image: "/team/ayush2.jpg"
    },
    {
        name: "Puja Mahato",
        about: "3rd Year",
        image: "/team/puja2.jpg"
    },
    {
        name: "Priyanshi Dubey",
        about: "3rd Year",
        image: "/team/priyanshi2.JPG"
    },
    {
        name: "M. Flora",
        about: "3rd Year",
        image: "/team/flora.jpg"
    },
]


export default function Members() {
    window.scrollTo(0,0)
    return (
        <div className="overflow-hidden bg-gradient-to-b from-sky-950 to-black">
            <div className="flex flex-col items-center gap-2 m-10">
                <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">Our Team</h1>
                <div className="bg-white h-[4px] w-44 md:w-60 rounded-md"></div>
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">FACULTY IN CHARGE</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start md:pl-10 p-5 items-center">
                {
                    fic.map((item) => (<TeamCard image={item.image} name={item.name} about={item.about} />))
                }
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">IIC FACULTIES</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start md:pl-10 p-5 items-center">
                {
                    teamfaculty.map((item) => (<TeamCard image={item.image} name={item.name} about={item.about} />))
                }
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">CORE MEMBERS</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start md:pl-10 p-5 items-center">
                {
                    teamstudent.map((item) => (<TeamCard image={item.image} name={item.name} about={item.about} />))
                }
            </div>
        </div>
    )
}
