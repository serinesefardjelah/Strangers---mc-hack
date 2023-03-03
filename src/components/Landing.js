import Factory from "./../media/factory.svg" 


export default function Landing() {
    return (
        <div className="flex py-32 ">
        <div className="flex flex-col gap-7 ">
        <h1 className="font-bold text-2xl font-poppins "> Maximize Equipment Uptime and Optimize <span className="text-blue">Maintenance</span> with <span className="text-blue">AI-Powered</span> Predictive Analytics
        
        </h1>
        <p className="font-poppins"> AI to predict machine breakdowns in Algeria. Stay ahead with proactive maintenance and optimized operations. Trust us to revolutionize your business.</p>
      

        <div>
        <button className="bg-blue hover:bg-darkBlue text-white font-bold py-2 px-6 rounded text-sm shadow-lg shadow-indigo-500/70 hover:shadow-none font-poppins ">
            Get started
        </button>
        </div>
        
        </div>
        <div>
            <img src={Factory}/>
        </div>
        </div>
    )

}