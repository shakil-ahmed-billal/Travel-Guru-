import { useLoaderData } from "react-router-dom"
import Navbar from "../components/Navbar"
import RoomSection from "../components/RoomSection"
import moment from "moment"


const Service = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            <div className="">
                <section>
                    <nav className="">
                        <Navbar></Navbar>
                    </nav>
                    <hr className="w-11/12 mx-auto" />
                </section>
                <main className="w-11/12 mx-auto mt-10">
                <p>(252 Stay) {moment().format(" MMMM , Do")}-20th (3 Guests)</p>
                <p className="text-2xl mb-10 font-bold">Stay in Cox"s bazar</p>
                    <section className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-5">
                            {
                                data && data.map(item => <RoomSection key={item.id} card={item}></RoomSection>)
                            }
                        </div>
                        <div className="">
                            <div className=" h-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d91.81983571134349!3d24.900058347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
                                    allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade" className="w-full h-full rounded-md"></iframe>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Service