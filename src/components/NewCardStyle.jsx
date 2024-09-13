export default function NewCardStyle({image,name,position}){
    return(
        <div className="flex gap-3 bg-slate-700 text-white rounded-l-full rounded-r-full items-center  hover:scale-105 shadow-lg shadow-sky-400 group ">
            <img src={image} className="z-10 rounded-full h-[120px] w-[120px] group-hover:-translate-x-1 delay-200 duration-700"></img>
            <div className=" flex flex-col -translate-x-2 p-6 gap-2">
                <h1 className="text-lg font-bold ">{position}</h1>
                <div className="bg-white h-[2px] "></div>
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>
        </div>
    )
}