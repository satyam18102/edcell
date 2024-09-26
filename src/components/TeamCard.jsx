export default function TeamCard({name,about,image}){
    return(
        <div className="flex h-36  w-[380px]">
            <img src={image || "/team/icon.png"} className="h-full rounded-l-3xl"/>
            <div className="flex flex-col bg-[#0c023d] w-full rounded-r-3xl p-3 pt-7">
                <h1 className="text-white text-xl font-bold">{name}</h1>
                <p className="text-slate-300 text-lg font-semibold">{about}</p>
            </div>
        </div>
    )
}