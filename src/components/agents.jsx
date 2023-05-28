import React from 'react'
import Agentcard from './agentcard'
import samuel from '../images/samuel.jpg'

const Agents = () => {
  return (
    <div className='agent-page'>
      <img src="./src/images/2301.q702.003.S.m005.c12.real estate.jpg" alt="" width='100%' height='500px'/>
      <h1 style={{textAlign:'center',marginBottom:'60px',marginTop:'60px'}}>Meet Our Expert Real Estate Agents</h1>
      <div className='agents-wrap'>
        <Agentcard image={'https://resources.dwellwell.com/wp-content/uploads/2022/11/realtor.jpeg'} name={"Emma Thompson"} years={"Luxury Properties"} info={"With a keen eye for luxury and a passion for delivering exceptional service, Emma Thompson is your go-to agent for high-end properties. Her extensive knowledge of the luxury real estate market and strong negotiation skills ensure that her clients find their dream homes with ease and everything they need until they find it"}/>
        <Agentcard image={samuel} name={"Samuel jovanini"} years={" Investment Properties"} info={"Samuel jovanini specializes in investment properties, helping clients maximize their returns and build wealth through strategic real estate investments. With a background in finance and a sharp analytical mind, Mark provides valuable insights and guidance to ensure his clients make sound investment decisions."} />
        <Agentcard image={'https://content.usaa.com/mcontent/static_assets/Media/advice-real-estate-finding-best-real-estate-agent-wide-banner.jpg?cacheid=3367499959_p'} name={"ju-long-shlong"} years={"First-Time Homebuyers"} info={"Sarah Davis is dedicated to helping first-time homebuyers navigate the real estate market with confidence. Patient and attentive, she takes the time to educate her clients on the process, guiding them every step of the way. Sarah's goal is to make the homebuying experience as smooth and enjoyable as possible."}/>
      </div>
      <div className='agents-wrap'>
        <Agentcard image={'https://crgsoft.com/wp-content/uploads/2023/01/When-a-Real-Estate-Agent-Says-They-Have-a-Buyer-for-Your-Home-Heres-What-It-Means.jpeg'} name={"Jennifer Lee"} years={"Residential Sales"} info={"Jennifer Lee is a results-driven residential sales agent known for her exceptional marketing strategies and ability to connect with buyers and sellers. Her attention to detail, strong negotiation skills, and dedication to client satisfaction have earned her a reputation for delivering outstanding results in every transaction."}/>
        <Agentcard image={'https://imgix.cosmicjs.com/2f8da9f0-cb56-11e9-83a4-6588407f2278-the_future_of_real_estate_agents_an_industry_disrupted-ogid-139284.jpg'} name={"Michael Rodriguez"} years={"Commercial Real Estate"} info={"Michael Rodriguez is a seasoned commercial real estate agent, assisting clients in buying, selling, and leasing commercial properties. With a strong network of industry connections and in-depth knowledge of local markets, Michael provides tailored solutions for businesses seeking the perfect commercial space."}/>
        <Agentcard image={'https://propertalis.com/wp-content/uploads/2019/11/shutterstock_171921824-960x667.jpg'} name={"David Chen"} years={"Relocation Services"} info={"With a deep understanding of the challenges involved in relocating, David Chen specializes in helping individuals and families transition smoothly to new cities or neighborhoods. He provides comprehensive support, from assisting with home searches to connecting clients with local resources, ensuring a seamless relocation experience."}/>
      </div>
    </div>
  )
}

export default Agents
