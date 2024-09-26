import { useEffect } from "react"
import { useState } from "react"
import React from "react";


const images=["1.JPG","2.JPG","3.JPG","4.JPG","5.jpg","6.JPG","7.JPG","8.JPG","9.JPG"]

export default function Innovation_Challenge() {
    const [number, changeNumber] = useState(1)
    const [photo, changePhoto] = useState("ic_photos/1.JPG")
    useEffect(() => {
        changePhoto("ic_photos/" + number + ".JPG")
    }, [number])
     window.scrollTo(0,0)
    return (
        <div className="bg-black min-h-[100vh] p-6 md:p-10 md:pl-16 flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap max-w-svw">
                <img src="/event_photos/bulb.jpg" className="h-28 sm:h-32"></img>
                <div className="flex flex-col">
                    <h1 className="text-yellow-600 font-bold text-3xl sm:text-4xl">INNOVATION</h1>
                    <h1 className="text-white font-bold text-3xl sm:text-4xl">CHALLENGE</h1>
                </div>
            </div>
            <div className="flex gap-4 md:flex-row flex-col-reverse">
                <div className="md:w-1/2 mt-4 mb-4 p-2 pt-4">
                    <h1 className="text-yellow-100 font-medium text-lg">Innovation Challenge was a 2-day Program oraganized by Entrepreneurship Cell.
                        It was hosted to promote entrepreneurship, innovation and creativity among students.It provided budding entrepreneurs a stage to showcase unique ideas and projects, and gain confidence to employ it in future.It was a successfull event as we received huge participation and great responses.
                    </h1>
                </div>
                <div className="flex justify-evenly items-center md:w-1/2">
                    <img src="event_photos/left-chevron.png" className="h-8 w-8 md:h-10 md:w-10" onClick={() => { changeNumber(number- 1 || 9) }}></img>
                    <img src={photo} className="rounded-lg w-[260px] md:w-[400px] delay-100"></img>
                    <img src="event_photos/left-chevron.png" className="h-8 w-8 md:h-10 md:w-10 rotate-180" onClick={() => { changeNumber((number + 1) % 10 || 1) }}></img>
                </div>
            </div> 
            <div>
                <div className="flex gap-2">
                    <h1 className="text-3xl text-yellow-500 font-semibold">Our</h1>
                    <h1 className="text-3xl  text-white font-bold ">Events</h1>
                </div>
                <div className="pt-10 flex flex-wrap gap-7">
                    <div className="w-80 bg-slate-800 rounded-2xl flex flex-col items-center p-6 gap-4">
                        <h1 className="text-white font-bold text-2xl text-center">Build-a-thon</h1>
                        <p className="text-center font-normal text-slate-300">This was the 12-hours event where teams were given domains randomly, and they had to come up with a problem statement upon which they can set up their business. They had to build Business Model Canvas, Value Proposition Canvas and also had to prepare PPT.All the tasks had to done in limited timespan. Lastly they had to present their ideas before the panel of mighty judges.Teams business ideas were judged on feasibility, viabillity and impact on audience.
                        </p>
                    </div>
                    <div className="w-80  bg-slate-800 rounded-2xl flex flex-col items-center p-6 gap-4">
                        <h1 className="text-white font-bold text-2xl text-center">Yukti Innovation Challenge</h1>
                        <p className="text-center font-normal text-slate-300">The event allowed students from diverse backgrounds to showcase solutions to societal issues. The competition engaged 40 participants,  for access to the Yukti Portal and cash prizes. Industry experts and judges provided valuable feedback, fostering a learning experience. The challenge fueled innovation and ignited a passion for social change among the student body. The collaborative environment allowed participants to connect with peers, industry experts, and mentors, fostering a sense of responsibility and innovation among the students.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
