

const HowCommunitySection = () => {
  return (
    <>
    <div className="w-10/12 mx-auto">
        <div className="flex justify-between w-4/5 mx-auto my-20 font-nunito">
            <div><img src="/assets/dash-rounded.svg" alt="dash-roundded-image" className="object-contain  h-auto w-24"/></div>
            <div><h2 className="font-black text-2xl text-purple-700 text-center">How it works</h2></div>
            <div>
                {/* <img src="/assets/video-camera.svg" alt="video-camera-image" className="object-contain  h-auto w-14"/> */}
            </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-10 w-4/5 mx-auto font-nunito text-center">
            <div className="border border-gray-200 rounded-lg p-4 ">
                <img src="/assets/content.svg" alt="content-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-lg text-purple-800 my-4 ">Entrepreneurship content</h3>
                <p className="text-gray-700 ">Teachers get access to the kinetic<br/> entrepreneurship framework</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 ">
                <img src="/assets/resources.svg" alt="resource-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-lg text-purple-800 my-4 ">Resources</h3>
                <p className="text-gray-700 ">Sharing of relevant information and news <br/> around entrepreneurship education in the <br/> form of blogs, articles, podcasts,videos</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 ">
                <img src="/assets/events.svg" alt="events-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-lg text-purple-800 my-4 ">Events</h3>
                <p className="text-gray-700 ">We organize events, workshops<br/> fireside chats<br/></p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 ">
                <img src="/assets/networking.svg" alt="networking-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-lg text-purple-800 my-4 ">Slack Community</h3>
                <p className="text-gray-700 ">Get to network , share ideas and explore <br/>opportunities  with like minded teachers</p>
            </div>
        </div>
        <div className="my-10">
           
        </div>
    </div>
    </>
  )
}

export default HowCommunitySection