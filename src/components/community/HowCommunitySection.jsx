

const HowCommunitySection = () => {
  return (
    <>
    <div className="w-10/12 mx-auto">
        <div className="flex justify-between w-4/5 mx-auto my-20 font-nunito">
            <div><img src="/assets/dash-rounded.svg" alt="dash-roundded-image" className="object-contain  h-auto w-24"/></div>
            <div><h2 className="font-meduim text-2xl text-purple-700 text-center">How it works</h2></div>
            <div><img src="/assets/video-camera.svg" alt="video-camera-image" className="object-contain  h-auto w-14"/></div>
        </div>
        <div className="grid grid-cols-2 gap-10 w-4/5 mx-auto font-nunito">
            <div className="border border-gray-200 rounded-lg p-4 text-start">
                <img src="/assets/content.svg" alt="content-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-purple-800 pl-12">Entrepreneurship content</h3>
                <p className="text-gray-500 pl-12">Teachers get access to the kinetic<br/> entrepreneurship framework content</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-start">
                <img src="/assets/resources.svg" alt="resource-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-purple-800 pl-12">Resources</h3>
                <p className="text-gray-500 pl-12">Sharing of relevant information and news <br/> around entrepreneurship education in the <br/> form of blogs, articles, podcasts,videos</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-start">
                <img src="/assets/events.svg" alt="events-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-purple-800 pl-12">Events</h3>
                <p className="text-gray-500 pl-12">We organize thematic events like webinars,<br/> workshops and meetups for high school<br/> teachers</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-start">
                <img src="/assets/networking.svg" alt="networking-image" className="object-cover  h-auto w-4/5 mx-auto"/>
                <h3 className="font-extrabold text-purple-800 pl-12">Networking</h3>
                <p className="text-gray-500 pl-12">Get to network , share ideas and explore <br/>opportunities  with like minded teachers</p>
            </div>
        </div>
        <div className="my-10">
           
        </div>
    </div>
    </>
  )
}

export default HowCommunitySection