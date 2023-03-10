import AirtableForm from "../communityForm/AirtableForm"



const HeroCommunity = () => {
  return (
    <>
      <div className="bg-herobg w-10/12 mx-auto rounded-xl border p-4 grid md:grid-cols-12 sm:grid-cols-1 font-nunito">
        <div className="col-span-4 pl-10 place-self-center">
          <h1 className="font-extrablod  text-purple-600 text-4xl leading-10 mb-5">An online community <br/> for entrepreneurial <br/> minded teachers<br/> to newtork, learn and share. </h1>
          {/* <p className="text-gray-500 text-lg font-medium leading-5 my-10">Network, learn and share <br/> opportunities</p> */}
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