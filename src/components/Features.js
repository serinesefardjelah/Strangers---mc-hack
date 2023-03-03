import Screenshot1 from "./../media/screenshot2.png"
import Screenshot2 from "./../media/screenshot1.png"



export default function Features() {
    return (
        <div className="flex flex-col lg:px-28 py-8" >
            {/* <h2 className="font-poppins font-bold "> Features </h2> */}

            <h2 className="text-center text-2xl font-bold font-poppins ">
                Our Features
            </h2>
            <div className="flex justify-between mt-4">

                <p className="font-poppins  text-justify  mt-4 ml-4  "> Dashboard to present data in a graphic way to help administrators follow the state of the the machine in real time and detect the eventual anomalies </p>
                <img src={Screenshot2} className="hover:-z-1 hover:shadow hover:shadow-blue max-w-[60%] ml-5" alt="screeshot" />
            </div>

            <div className=" pr-96 -mt-20">

                <img src={Screenshot1} className="hover:z-20 hover:shadow hover:shadow-blue" alt="screeshot" />
            </div>


        </div>
    )


}