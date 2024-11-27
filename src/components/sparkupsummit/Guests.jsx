import Speaker from "./Speaker"
const guests=[
    {
        name:'Prashant Hota',
        image:'/sparkupsummit/images/prashant_hota.jpg',
        position:'President & Group Head,   Jindal Steel & Power',
    },
    {
        name:'Sandeep Jain',
        image:'/sparkupsummit/images/sandeep_jain.jpg',
        position:'Founder & CEO,  GeekForGeeks',
    }
]

export default function Guests(){
    return(
        <div className="flex flex-col items-center p-2 ">
        <img src="/sparkupsummit/images/guests.png"></img>
        <div className="grid-cols-2 grid gap-6 md:flex md:gap-12 md:mt-8 ">
          {guests.map((item) => (<Speaker image={item.image} name={item.name} position={item.position} minus={(item.key % 2 == 0) ? "rotate-3" : "-rotate-3"} />))}
        </div>
      </div>
    )
}
