import MoneyManagement from "./../media/money-management.png"
import timeManagemnt from "./../media/time-management.png"   
import timeManagement2 from "./../media/time-management (1).png"
import worker from "./../media/worker.png"
import reduceCost from "./../media/reduce-cost.png"

export default function Benefits(){
    return(
    <div id="benefits" className="pt-4 pb-20 bg-white font-poppins">
        <h2 className="text-center text-2xl font-bold ">
            Our Benefits
        </h2>
        <div className="flex flex-wrap justify-center gap-7 align-center mt-12 font-poppins">
            <div className="py-[27px] w-80 px-5  bg-greyBenefits flex flex-col text-center items-center gap-2 rounded-lg">
                <img className="w-[72px]" src={timeManagemnt} alt="icon"/>
                <p className=" font-bold">Increased Equipment Uptime</p>
                <p className="text-sm ">reduces the risk of unscheduled downtime and improves equipment uptime.</p>
            </div>
            <div className="py-[27px] w-80 px-5  bg-greyBenefits flex flex-col text-center items-center gap-2 rounded-lg">
                <img className="block m-auto w-[72px]" src={worker} alt="icon"/>
                <p className=" font-bold">Improved Safety</p>
                <p className="text-sm ">This increases the safety of the workers operating the machinery and reduces the risk of workplace injuries.</p>
            </div>
            <div className="py-[27px] w-80 px-5  bg-greyBenefits flex flex-col text-center items-center gap-2 rounded-lg">
                <img className="block m-auto w-[72px]" src={reduceCost} alt="icon"/>
                <p className=" font-bold">Reduced Maintenance Costs</p>
                <p className="text-sm ">save money by identifying potential problems before they become more significant and costly to repair</p>
            </div>
            <div className="py-[27px] w-80 px-5  bg-greyBenefits flex flex-col text-center items-center gap-2 rounded-lg">
                <img className="block m-auto w-[72px]" src={timeManagement2} alt="icon"/>
                <p className=" font-bold">Improved Operational Efficiency</p>
                <p className="text-sm ">optimize their equipment operations and minimize production downtime.This results in improved efficienc and productivity.</p>
            </div>
            <div className="py-[27px] w-80 px-5  bg-greyBenefits flex flex-col text-center items-center gap-2 rounded-lg">
                <img className="block m-auto w-[72px]" src={MoneyManagement} alt="icon"/>
                <p className=" font-bold">Better Asset Management</p>
                <p className="text-sm ">help companies make informed decisions
                about the replacement or retirement
                of machinery.
                </p>
            </div>
        </div>
    </div>
    )
}