import AirtableForm from "../communityForm/AirtableForm"


const ValuesCommunitySection = () => {
  return (
    <>
        <div className="w-10/12 mx-auto" >
            {/* <div  className=" bg-cover bg-center bg-no-repeat font-nunito bg-[url('/assets/valueCommunityBg.png')]">
                <div className="flex justify-start pl-20">
                    <div>
                        <img src="/assets/Rectangle.svg" alt="rounded-rectangle-image" className="object-contain  h-auto w-24 ml-15" />
                    </div>
                </div>
                <div><h2 className="font-extrabold text-2xl text-purple-700 text-start ml-20 my-5">Community Values</h2></div>
                <div className="grid grid-cols-3 gap-4 w-4/5 mx-auto">
                    <div className="rounded-lg bg-white grid place-content-center px-10 py-4 border border-white w-40 mx-auto">
                        <img src="/assets/Respect.svg" alt="handshake-image" className=" bg-purple-400 rounded-full p-3 object-contain  h-auto w-24" />
                        <p>Respect</p>
                    </div>
                    <div className="rounded-lg bg-white grid place-content-center px-10 py-4 border border-white w-40 mx-auto">
                        <img src="/assets/Supportive.svg" alt="support-call-image" className=" bg-purple-400 rounded-full p-3 object-contain  h-auto w-24" />
                        <p>Supportive</p>
                    </div>
                    <div className="rounded-lg bg-white grid place-content-center px-10 py-4 border border-white w-40 mx-auto">
                        <img src="/assets/Resourcefulness.svg" alt="resource-image" className=" bg-purple-400 rounded-full p-3 object-contain  h-auto w-24" />
                        <p>Resourcefulness</p>
                    </div>
                    <div className="rounded-lg bg-white grid place-content-center px-10 py-4 border border-white w-40 mx-auto">
                        <img src="/assets/Participation.svg" alt="participate-image" className=" bg-purple-400 rounded-full p-3 object-contain  h-auto w-24" />
                        <p>Participation</p>
                    </div>
                    <div className="rounded-lg bg-white grid place-content-center px-10 py-4 border border-white w-40 mx-auto">
                        <img src="/assets/Integrity.svg" alt="integrity-image" className=" bg-purple-400 rounded-full p-3 object-contain  h-auto w-24" />
                        <p>Integrity</p>
                    </div>
                </div>
            </div> */}
                <div className="bg-orange-200 rounded-lg w-4/5 mx-auto my-12 font-nunito">
                    {/* <div className="text-center text-purple-900 text-2xl leading-8 py-2">
                        <h3>Join a community of forward thinking <br/>teachers and get to learn, network and <br/>find opportunities. </h3>
                    </div> */}
                    <div className="flex justify-evenly items-center ">
                        <div><img src="/assets/Rocket.svg" alt="rocket-image"  className="object-cantain h-auto w-20 mx-auto"/></div>
                        <div className="">
                            <AirtableForm/>
                        </div>
                        <div><img src="/assets/arrow.svg" alt="arrow-image"  className="object-cantain h-auto w-20 mx-auto"/></div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default ValuesCommunitySection