import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Booking = () => {
    return (
        <div className="bg-hero min-h-screen">
            <div className="absolute inset-0 bg-black bg-opacity-60">
                <header>
                    <nav>
                        <Navbar></Navbar>
                    </nav>
                </header>
                <main>
                    <section className="grid grid-cols-2 justify-center items-center mt-44 ">
                        <div className="text-white mx-10">
                            <p className="text-8xl font-extrabold">Cox's bazar</p>
                            <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                        </div>
                        <div className="">
                            <div className="w-8/12 mx-auto bg-white p-10 rounded-sm">
                                <label className="flex flex-col gap-2">
                                    Origin
                                <select className="select select-bordered w-full ">
                                    <option disabled selected>Form?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                                </label>
                                <label className="flex flex-col gap-2 mt-2">
                                    Destination
                                <select className="select select-bordered w-full ">
                                    <option disabled selected>To?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                                </label>
                                <label className="flex flex-col gap-2 mt-2">
                                    Destination
                                    <div className="flex gap-3">
                                    <input className="input input-bordered w-full" type="date" />
                                    <input className="input input-bordered w-full" type="date" />
                                    </div>
                                </label>
                                <Link to={'/service'} className="btn w-full bg-orange-400 mt-8 text-lg font-bold">Start Booking</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Booking

