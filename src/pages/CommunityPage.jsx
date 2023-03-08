
import HeroCommunity from "../components/community/HeroCommunitySection"
import HowCommunitySection from "../components/community/HowCommunitySection"
import ValuesCommunitySection from "../components/community/ValuesCommunitySection"
import WhyCommunitySection from "../components/community/WhyCommunitySection"
import Footer from "../components/Footer"

const CommunityPage = () => {
  return (
    <>
        <div className=" bg-communitybg">
            <HeroCommunity/>
            <WhyCommunitySection/>
            <HowCommunitySection/>
            {/* <ValuesCommunitySection/> */}
            <Footer/>
        </div>
    </>
  )
}

export default CommunityPage