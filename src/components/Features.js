import Screenshot1 from "./../media/screenshot.png" 
import Screenshot2 from "./../media/screenshot.png" 



export default function Features() {
    return (
        <div className="relative" >
            <h2 className="font-poppins font-bold "> Features </h2>
            <p className="font-poppins   text-justify  top-20  absolute max-w-sm"> detailjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjs about the screenshoabout the screenshoabout the screensho about the screenshot1details about the screenshot1details about the screenshot1details about the screenshot1details about the screenshot1details about the screenshot1 </p>

            <div className="relative py-10 ">
                <div className="absolute pr-96 pt-52">
                  
                    <img src= {Screenshot1} className="hover:z-20 hover:shadow hover:shadow-blue" alt="screeshot" /> 
                </div>
                <div className=" absolute pl-96">
                    <img src= {Screenshot2} className="hover:-z-1 hover:shadow hover:shadow-blue"  alt="screeshot"/> 

                </div>
                
            </div>
        </div>
    )


}