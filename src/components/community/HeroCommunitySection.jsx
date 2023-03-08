import AirtableForm from "../communityForm/AirtableForm"



const HeroCommunity = () => {
  return (
    <>
      <div className="bg-herobg w-10/12 mx-auto rounded-xl border p-4 grid grid-cols-12 font-nunito">
        <div className="col-span-4 pl-10 place-self-center">
          <h1 className="font-extrabold  text-purple-600 text-4xl leading-10">An online community <br/> for entrepreneurial <br/> minded teachers. </h1>
          <p className="text-gray-500 text-lg font-medium leading-5 my-10">Network, learn and share <br/> opportunities</p>
          {/* <button className="bg-orange-400 rounded-xl px-4 py-2 text-white">Join Community</button> */}
        <AirtableForm/>
        </div>
        <div className="col-span-8">
          <img src="/assets/heroCommunityBg.png" alt="hero-section-image" className="object-cover h-auto w-full" />
        </div>
      </div>

    </>
  )
}

export default HeroCommunity