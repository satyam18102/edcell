export default function E_Fest5() {
    return (
        <div className="bg-black min-h-[100vh] p-10 md:pl-16 flex flex-col gap-2">
            <div className="" >
                <h1 className="text-purple-500 font-bold text-left text-5xl inline">E</h1>
                <h1 className="font-bold text-left text-pretty text-5xl text-white inline"> FEST 5.0</h1>
            </div>
            <div className="bg-white h-1 w-72 rounded-md"></div>
            <div ><p className="text-slate-300 font-semibold text-lg">ENTREPRENEURSHIP FEST</p></div>
            <div className="flex flex-col-reverse lg:flex-row gap-2 " >
                <div className="pt-5 flex flex-col gap-4">
                    <h1 className="text-purple-100 font-medium ">E-Fest is the flagship entrepreneurship festival oraganized by Entrepreneurship Development Cell (EDC) of Silicon University. The festival aims to celebrate entrepreneurship and promote the spirit of innovation among students, entrepreneurs and wider community. </h1>
                    <h1 className="text-purple-100 font-medium ">E-Fest 5.0 was a 3-day program ,it had a grand opening with lamplighting and talk by very popular founders.It was a massive success as we received maximum participation of students and received great responses.</h1>
                </div>
                <img src="/event_photos/EFestpage.png" className="rounded-lg m-3"></img>
            </div>
            <div>
                <div>
                    <h1 className="text-white text-3xl font-bold mt-2 mb-2">Chief Guests</h1>
                    <div className="bg-white h-1 w-52 rounded-md"></div>
                </div>

                {/* Speakers */}
                <div className="flex flex-wrap gap-3 mt-5">
                    <div className="flex flex-col items-center mt-2 w-32 sm:w-40">
                        <img src="/event_photos/Speaker1.png" className="rounded-full h-28 w-28 sm:h-36 sm:w-36 mb-2"></img>
                        <h2 className="text-white text-lg font-bold text-center">Shreeyaan Daga</h2>
                        <h3 className="text-slate-400 font-medium text-center">Co-Founder OLL</h3>
                    </div>
                    <div className="flex flex-col items-center mt-2 w-32 sm:w-40">
                        <img src="/event_photos/sp2.jpg" className="rounded-full h-28 w-28 sm:h-36 sm:w-36  mb-2"></img>
                        <h2 className="text-white text-lg font-bold text-center">Dr. Omkar Rai</h2>
                        <h3 className="text-slate-400 font-medium text-center"> Executive Chairman of Startup Odisha</h3>
                    </div>
                    <div className="flex flex-col items-center mt-2 w-32 sm:w-40">
                        <img src="/event_photos/sp3.webp" className="rounded-full h-28 w-28  sm:h-36 sm:w-36 mb-2"></img>
                        <h2 className="text-white text-lg font-bold text-center">Dipan Sahu</h2>
                        <h3 className="text-slate-400 font-medium text-center">Asst. Innovation Director,Ministry of Education's Innovation Cell & AICTE,Government of India</h3>
                    </div>
                    <div className="flex flex-col items-center mt-2 w-32 sm:w-40">
                        <img src="/event_photos/sp4.jpeg" className="rounded-full h-28 w-28 sm:h-36 sm:w-36  mb-2"></img>
                        <h2 className="text-white text-lg font-bold text-center">Bhaskar Majumdar</h2>
                        <h3 className="text-slate-400 font-medium text-center">Founder & Managing Partner Unicorn India Ventures</h3>
                    </div>
                </div>
                {/* Events */}
                <div>
                    <div>
                        <h1 className="text-white text-3xl font-bold mt-2 mb-2">Events</h1>
                        <div className="bg-white h-1 w-36 rounded-md"></div>
                    </div>
                    <div className="flex flex-wrap pt-8 pb-8 gap-4 md:gap-6 justify-center md:justify-start">
                        <div className="flex flex-col items-center w-60 gap-3 bg-gradient-to-br from-black to-blue-800 p-3 rounded-lg">
                            <img src="event_photos/event1-removebg-preview1.png" className="h-40 rounded-lg"></img>
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-bold text-white text-center">BIDDING WAR</h1>
                                <h1 className="text-lg font-semibold text-slate-400">Abide by our Bids</h1>
                            </div>

                        </div>
                        <div className="flex flex-col items-center w-60 gap-3 bg-gradient-to-br from-black to-blue-800 p-3 rounded-lg">
                            <img src="event_photos/event2-removebg-preview.png" className="h-40"></img>
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-bold text-white text-center">AD-MAD SHOW</h1>
                                <h1 className="text-lg font-semibold text-slate-400 text-center">Where Madness meets Marketing</h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-60 gap-3 bg-gradient-to-br from-black to-blue-800 p-3 rounded-lg">
                            <img src="event_photos/event3-removebg-preview.png" className="h-40"></img>
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-bold text-white text-center">BIZ TANK</h1>
                                <h1 className="text-lg font-semibold text-slate-400 text-center">Swimming with the Big Fish</h1>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-3 items-center w-60 bg-gradient-to-br from-black to-blue-800 p-3 rounded-lg">
                            <img src="event_photos/event4.png" className="h-40"></img>
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-bold text-white text-center">PROTOTYPE EXHIBITION</h1>
                                <h1 className="text-lg font-semibold text-slate-400 text-center">Exhibit and Inspire</h1>
                            </div>
                        </div>
                        <div className=" flex flex-col items-cente w-60 bg-gradient-to-br from-black to-blue-800 p-3 rounded-lg">
                            <img src="event_photos/new-removebg-preview.png" className="h-40"></img>
                            <div className="flex flex-col items-center">
                                <h1 className="text-2xl font-bold text-white text-center">PITCH AGAINST STARTUP</h1>
                                <h1 className="text-lg font-semibold text-slate-400 text-center">Unmask the Flaws and Triumph</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sponsors */}
                <div>
                    <div>
                        <h1 className="text-white text-3xl font-bold mt-2 mb-2">Sponsors</h1>
                        <div className="bg-white h-1 w-40 rounded-md"></div>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-6 pb-6">
                        <img src="sponsors/sp1.png" className=" w-80"></img>
                        <img src="sponsors/sp2.jpeg" className="w-32"></img>
                        <img src="sponsors/sp3.jpeg" className="w-32"></img>
                        <img src="sponsors/sp4.jpeg" className="w-32"></img>
                        <img src="sponsors/sp5.jpeg" className="w-32"></img>
                        <img src="sponsors/sp6.jpeg" className="w-32"></img>
                        <img src="sponsors/sp7.jpeg" className="w-32"></img>
                        <img src="sponsors/sp8.jpeg" className="w-32"></img>
                        <img src="sponsors/sp9.jpeg" className="w-32"></img>
                        <img src="sponsors/sp10.jpeg" className="w-32"></img>
                        <img src="sponsors/sp11.jpeg" className="w-32"></img>
                        <img src="sponsors/sp12.jpeg" className="w-32"></img>
                        <img src="sponsors/sp13.jpeg" className="w-32"></img>
                        <img src="sponsors/sp14.jpeg" className="w-32"></img>
                        <img src="sponsors/sp15.jpeg" className="w-32"></img>
                    </div>
                </div>
            </div>
        </div>
    )

}