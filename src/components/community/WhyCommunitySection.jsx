

const WhyCommunitySection = () => {
  return (
    <>
    <div className="w-10/12 mx-auto">
        <div className="text-center font-nunito">
            <h2 className="text-purple-600 font-black text-2xl my-10">What you'll get </h2>
            {/* <p className="text-center text-gray-500 leading-7 mb-1 w-1/2 mx-auto">There is a great demand for practical entrepreneurship skills in the 21st <br/> Century so teachers need to be adequately equipped to offer these skills<br/> to their students. Kinetic community is an interactive network of teachers<br/> committed to developing an entrepreneurial mindset in their students and <br/> preparing them for the 21st century demands</p> */}
        </div>
        <div className="flex justify-start pl-20">
            {/* <div>
                <img src="/assets/bulb.svg" alt="blub-image" className="object-contain  h-auto w-24" />
            </div> */}
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-4/5 mx-auto font-nunito">
            <div className="border border-gray-400 rounded-lg px-6 py-10 grid place-content-center text-center">
                <img src="/assets/book 1.svg" alt="book-image" className="object-contain  h-auto w-20 mx-auto" />
                    <p className="font-bold text-gray-900 my-5">An Entrepreneurship Learning Journey</p>
                    <p className="text-gray-800">Access to the the kinetic <br/>entrepreneurship framework</p>
            </div>
            <div className="border border-gray-400 rounded-lg px-6 py-10 grid place-content-center text-center">
                <img src="/assets/network 1.svg" alt="network-image" className="object-contain  h-auto w-20 mx-auto" />
                    <p className="font-bold text-gray-900 my-5"> Networking and support</p>
                    <p className="text-gray-800"> Peer discussions <br/>Physical meetups</p>
            </div>
            <div className="border border-gray-400 rounded-lg px-6 py-10 grid place-content-center text-center">
                <img src="/assets/creative 1.svg" alt="creative-bulb-image" className="object-contain  h-auto w-20 mx-auto" />
                    <p className="font-bold text-gray-900 my-5"> Opportunities</p>
                    <p className="text-gray-800"> Career Advancement<br/>Business opportunities</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default WhyCommunitySection