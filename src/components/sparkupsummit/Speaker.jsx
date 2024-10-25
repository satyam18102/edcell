export default function Speaker2({ name, image, position}){
    return(
        <div className="flex flex-col items-center gap-4 w-40 md:w-60 bg-red-500 bg-bg bg-blend-color-burn bg-center bg-cover rounded-3xl p-2 md:p-6  border-amber-500 border-x-2 border-y-2 shadow-sm shadow-red-500">
            <div className="flex flex-col w-32 h-32 md:w-40 md:h-40  mt-4 rounded-full items-center overflow-hidden border-amber-300 border-x-4 border-y-4">
                <img src={image} className="w-32 h-32 md:w-40 md:h-40"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="font-anton text-white text-2xl text-center md:text-3xl">{name}</h1>
                <p className="font-anton text-slate-200 text-md md:text-lg text-center">{position}</p>
            </div>
        </div>
    )
}
