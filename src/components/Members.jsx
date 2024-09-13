
import NewCardStyle from "./NewCardStyle"

let members = [
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
    {
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHIUWFaEnPZKQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516820125261?e=2147483647&v=beta&t=FXymMPYZSwuv4upuBLSNULVX6c-yCoJ3vybluYqNyJs",
        name: "Dr. Mahendra Prasad Agasty",
        position: "Faculty In Charge"
    },
 
]

export default function Members() {
    window.scrollTo(0,0)
    return (
        <>
            <div className="flex justify-center items-center mt-5 ">
                <h1 className="text-4xl font-bold text-sky-500 text-center">Our Team</h1>
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">Faculty In Charge</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start sm:pl-14 p-5 items-center">
                {
                    members.map((item) => (<NewCardStyle image={item.image} name={item.name} position={item.position} />))
                }
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">Core Members</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start sm:pl-14 p-5 items-center">
                {
                    members.map((item) => (<NewCardStyle image={item.image} name={item.name} position={item.position} />))
                }
            </div>
        </>
    )
}
