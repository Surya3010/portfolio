import YepCard from "../components/Yep/YepCard";
import RedText from "../components/utility/RedText";
import Container from "../components/utility/Container";
import Heading from "../components/utility/Heading";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { GiThreePointedShuriken } from "react-icons/gi";

// const Yep = () => {
//   return (
//     <Container>
//       <Heading>Young Entrepreneurship Program</Heading>
//       <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6 pos-relative">
//         <div className="h-[200px] w-full bg-yep bg-cover bg-custom md:w-[250px] lg:bg-cover lg:bg-left"></div>
//         <YepCard id="1">
//           IIM Bangalore's <RedText>Young Entrepreneurship Program</RedText> (YEP) is a 3-day bootcamp equipping young minds with the knowledge, skills, and mindset to launch and grow businesses.
//           <br />
//           <br />
//           Through workshops, mentorships, and access to funding and networks, YEP empowers future entrepreneurs in idea generation, planning, marketing, finance, and leadership. <RedText>Fostering innovation, creativity, and social responsibility</RedText>, the program aims to:
//           <ul style={{ listStyle: 'inside', lineHeight: '2rem' }}>
//             <li>Create successful and empowered entrepreneurs. </li>
//             <li>Champion sustainable and socially responsible businesses.</li>
//             <li>Build a vibrant entrepreneurial ecosystem.</li>
//             <li> Provide equal opportunity for diverse backgrounds.</li>
//             <li>Encourage positive social impact.</li>
//           </ul>
//           <br />
//           With a legacy of over 250 participants last year, YEP is committed to leaving a lasting impression on the lives of young entrepreneurs and the communities they impact
//         </YepCard>
//       </div>
//       <br />
//       <br />
//       <h1 className="ml-[25px] select-none text-5xl font-[200] uppercase max-sm:py-5 md:ml-[32px] md:pb-10 lg:ml-0 lg:pb-10 lg:text-[32px]">
//         Eligibilty
//       </h1>
//       <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6 pos-relative">
//       <div className="h-[200px] w-full bg-eligibility bg-cover bg-custom md:w-[250px] lg:bg-cover lg:bg-left"></div>
//         <YepCard id="2">
//             Mandatory attendance during the opening and closing ceremonies
//             <br />
//             <br />
//             Attendance in at least 6 sessions (speaker session/ panel discussion/workshops) across both the days of the summit (excluding mandatory attendance in opening and closing ceremonies)
//         </YepCard>
//       </div>
//     </Container>
//   );
// };

const Yep = () => {
  return (
    //     <Container>
    //       <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
    //         <div className="h-[100px] w-full bg-yep bg-cover bg-custom md:w-[125px] lg:bg-cover lg:bg-left" style={{ borderRadius: '35px', marginRight: '25px' }}></div><h1 className="ml-[25px] select-none text-5xl font-[200] uppercase max-sm:py-5 md:ml-[50px] lg:ml-0 lg:text-[48px]">Young Entrepreneur Program</h1>
    //       </div>
    //       <div className="h-[100px] w-full bg-yep_banner bg-cover bg-custom md:h-[325px] lg:bg-cover lg:bg-left" style={{ borderRadius: '16px', margin: '32px 0px' }} />
    //       <div>
    //         <p>
    //           Eximius, in collaboration with the N S Raghavan Centre for Entrepreneurial Learning (NSRCEL) at IIM Bangalore, proudly presents the Young Entrepreneur Program (YEP) 2024. YEP is an immersive experience meticulously crafted to empower aspiring entrepreneurs with the knowledge, skills, and resources essential to thrive in today's fiercely competitive business environment.
    //         </p>
    //         <p>
    //           Join us at YEP 2024 and embark on a transformative journey towards entrepreneurial success!
    //         </p>
    //       </div>
    //       <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    //         <div style={{ outline: '1px solid white', padding: '16px', margin: '32px', borderRadius: '16px' }}>
    //           <strong style={{ paddingBottom: '16px' }}>Preliminary Round:</strong>
    //           <p style={{ display: 'flex', alignItems: 'center' }}>
    //             <VscDebugBreakpointDataUnverified size='24px' /> Start: April 20th, 2024
    //           </p>
    //           <p style={{ display: 'flex', alignItems: 'center' }}>
    //             <VscDebugBreakpointDataUnverified size='24px' /> End Date: May 15th, 2024
    //           </p>
    //         </div>
    //         <div style={{ outline: '1px solid white', padding: '16px', margin: '32px', borderRadius: '16px' }}>
    //           <strong style={{ paddingBottom: '16px' }}>Main Event:</strong>
    //           <p style={{ display: 'flex', alignItems: 'center' }}>
    //             <VscDebugBreakpointDataUnverified size='24px' /> Date: July 6th and 7th, 2024
    //           </p>
    //           <p style={{ display: 'flex', alignItems: 'center' }}>
    //             <VscDebugBreakpointDataUnverified size='24px' /> Location: IIM Bangalore
    //           </p>
    //         </div>

    //       </div>
    //       <p style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '16px' }}>
    //         <VscDebugBreakpointDataUnverified size='24px' />
    //         Offer educational programs and workshops covering various aspects of entrepreneurship, including idea generation, business planning, marketing, finance, and leadership.
    //       </p>
    //       <p style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '16px' }}>
    //         <VscDebugBreakpointDataUnverified size='24px' />
    //         Connect young entrepreneurs with experienced mentors and industry experts who can guide, advise, and support them throughout their entrepreneurial journey.
    //       </p>
    //       <p style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '16px' }}>
    //         <VscDebugBreakpointDataUnverified size='24px' />
    //         Provide access to funding opportunities and networking events to help young entrepreneurs launch and scale their ventures.
    //       </p>
    //       <p style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '16px' }}>
    //         <VscDebugBreakpointDataUnverified size='24px' />
    //         Promote social entrepreneurship and sustainable business practices, encouraging young entrepreneurs to consider the social and environmental impact of their ventures.
    //       </p>
    //       <p style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: '16px' }}>
    //         <VscDebugBreakpointDataUnverified size='24px' />
    //         Collaborate with educational institutions, government agencies, and community organizations to create a supportive ecosystem for young entrepreneurs
    //       </p>
    // <div>
    //   <pr>
    //   The Young Entrepreneurship program is dedicated to cultivating a legacy of empowered and successful young entrepreneurs, making a lasting impact on both individuals and the wider community. With a proven track record of attracting budding entrepreneurs from across India, with participation reaching over 250 candidates last year, we aim to foster the creation of sustainable businesses prioritizing social and environmental responsibility.
    //   </pr><br/><br/>
    //   <pr>
    //   In line with our theme for Eximius 2024, "Ideate to Elevate", we aim to inspire innovative thinking and action among participants. By encouraging entrepreneurs to think creatively and strive for excellence, we believe we can empower them to elevate their ideas into thriving businesses.
    //   </pr><br/><br/>
    //   <pr>
    //   With a rich history of fostering innovation and entrepreneurship, NSRCEL provides a conducive ecosystem for aspiring entrepreneurs to develop their ideas and transform them into successful ventures. Meanwhile, IIM Bangalore, consistently ranked among the top business schools globally, brings its wealth of expertise and resources to the Young Entrepreneurship program. Together, with the combined expertise of NSRCEL and IIM Bangalore, we aim to create a legacy of empowered and successful young entrepreneurs.
    //   </pr><br/><br/>
    // </div>

    // <div>
    //   <pr>
    //   In 2024, YEP introduces an innovative approach with a focus on four distinct verticals: SaaS, Retail, Finance, and Healthcare. All participants will get to attend expert sessions on entrepreneurship (common for all verticals), followed by sessions in their chosen vertical.
    //   </pr><br/><br/>
    //   <pr>
    //   SaaS: This vertical caters to entrepreneurs and startups interested in developing software-based products and services. Participants will delve into topics such as software development methodologies and the use of emerging technologies including AI in their venture.
    //   </pr><br/><br/>
    //   <pr>
    //   Retail: Entrepreneurs and businesses interested in the retail sector will benefit from specialized sessions on retail marketing strategies, inventory management, and e-commerce platforms among others.
    //   </pr><br/><br/>
    //   <pr>
    //   Fintech: Participants in the fintech vertical will explore topics such as technology trends in finance, new-age banking and financial services. This track is ideal for aspiring fintech entrepreneurs and finance professionals.
    //   </pr><br/><br/>
    //   <pr>
    //   Retail: Entrepreneurs and businesses interested in the retail sector will benefit from specialized sessions on retail marketing strategies, inventory management, and e-commerce platforms among others.
    //   </pr><br/><br/>
    //   <pr>
    //   Healthcare: Healthcare professionals and innovators will delve into healthcare technology trends, regulatory requirements, and patient-centric care. This vertical is tailored for those passionate about healthcare innovation and entrepreneurs interested in developing healthcare products and services.
    //   </pr><br/><br/>
    //   <pr>
    //   This tailored approach allows participants to gain industry-specific insights, connect with experts, and develop skills essential for success in their chosen vertical. Join us as we explore new horizons and unlock the potential within each industry vertical!
    //   </pr><br/><br/>
    // </div>
    //     </Container>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="h-[100px] w-full bg-yep bg-cover bg-custom md:w-[125px] lg:bg-cover lg:bg-left" style={{ borderRadius: '35px', marginRight: '25px' }}></div><h1 className="ml-[25px] select-none text-5xl font-[200] uppercase max-sm:py-5 md:ml-[50px] lg:ml-0 lg:text-[48px]">Young Entrepreneur Program</h1>
      </div>
      <div className="h-[100px] w-full bg-yep_banner bg-cover bg-custom md:h-[325px] lg:bg-cover lg:bg-left" style={{ borderRadius: '16px', margin: '32px 0px' }} />

      <div className="yep_content">
        <p><strong>Schedule of Young Entrepreneur Program (YEP) 2024:</strong></p>
        <p><strong>Introduction:</strong></p>
        <p>Eximius, in collaboration with the N S Raghavan Centre for Entrepreneurial Learning (<strong>NSRCEL</strong>) at IIM Bangalore, proudly presents the <strong>Young Entrepreneur Program (YEP) 2024</strong>. YEP is an immersive experience meticulously crafted to empower aspiring entrepreneurs with the knowledge, skills, and resources essential to thrive in today's fiercely competitive business environment.</p>
        <p>Join us at YEP 2024 and embark on a transformative journey towards entrepreneurial success!</p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ outline: '1px solid white', padding: '16px', borderRadius: '16px' }}>
            <p><strong>Preliminary Round:</strong></p>
            <ul>
              <li className="yep_listItem"> <VscDebugBreakpointDataUnverified size='24px' /><strong>Start Date:</strong> April 20th, 2024</li>
              <li className="yep_listItem"> <VscDebugBreakpointDataUnverified size='24px' /><strong>End Date:</strong> May 15th, 2024</li>
            </ul>
          </div>
          <div style={{ outline: '1px solid white', padding: '16px', borderRadius: '16px' }}>
            <p><strong>Main Event:</strong></p>
            <ul>
              <li className="yep_listItem"> <VscDebugBreakpointDataUnverified size='24px' /><strong>Date:</strong> July 6th and 7th, 2024</li>
              <li className="yep_listItem"> <VscDebugBreakpointDataUnverified size='24px' /><strong>Location:</strong> IIM Bangalore</li>
            </ul>
          </div>
        </div>
        <p><strong>&nbsp;</strong></p>
        <p><strong>About the Young Entrepreneur Program (YEP) 2024:</strong></p>
        <p><strong>Mission:</strong></p>
        <p>Our mission is to provide comprehensive entrepreneurship education and mentorship to young individuals, equipping them with the knowledge, skills, and mindset necessary to start and grow their own businesses. We aim to foster a culture of innovation, creativity, and social responsibility, empowering young entrepreneurs to make a meaningful contribution to the economy and society.</p>
        <p><strong>Objectives and Strategies:</strong></p>
        <ul>
          <li className="yep_listItem"><span><VscDebugBreakpointDataUnverified size='24px'/></span><span> Offer educational <strong>programs and workshops</strong> covering various aspects of entrepreneurship, including idea generation, business planning, marketing, finance, and leadership.</span></li>
          <li className="yep_listItem"> <span><VscDebugBreakpointDataUnverified size='24px'/></span><span> Connect young entrepreneurs with <strong>experienced mentors and industry experts</strong> who can guide, advise, and support them throughout their entrepreneurial journey.</span></li>
          <li className="yep_listItem"> <span><VscDebugBreakpointDataUnverified size='24px'/></span><span> Provide access to <strong>funding opportunities and networking events</strong> to help young entrepreneurs launch and scale their ventures.</span></li>
          <li className="yep_listItem"> <span><VscDebugBreakpointDataUnverified size='24px'/></span><span> Promote <strong>social entrepreneurship and sustainable business</strong> practices, encouraging young entrepreneurs to consider the social and environmental impact of their ventures.</span></li>
          <li className="yep_listItem"> <span><VscDebugBreakpointDataUnverified size='24px'/></span><span> Collaborate with educational institutions, government agencies, and community organizations to create a <strong>supportive ecosystem</strong> for young entrepreneurs.</span></li>
        </ul>
        <p><strong>Legacy:</strong></p>
        <p>The Young Entrepreneurship program is dedicated to cultivating a legacy of empowered and successful young entrepreneurs, making a lasting impact on both individuals and the wider community. With a proven track record of attracting budding entrepreneurs from across India, with participation reaching <strong>over 250 candidates last year</strong>, we aim to foster the creation of sustainable businesses prioritizing social and environmental responsibility.</p>
        <p>In line with our theme for Eximius 2024, <strong>"Ideate to Elevate",</strong> we aim to inspire innovative thinking and action among participants. By encouraging entrepreneurs to think creatively and strive for excellence, we believe we can empower them to elevate their ideas into thriving businesses.</p>
        <p>With a rich history of fostering innovation and entrepreneurship, NSRCEL provides a conducive ecosystem for aspiring entrepreneurs to develop their ideas and transform them into successful ventures. Meanwhile, <strong>IIM Bangalore, consistently ranked among the top business schools globally</strong>, brings its wealth of expertise and resources to the Young Entrepreneurship program. Together, with the combined expertise of NSRCEL and IIM Bangalore, we aim to create a legacy of empowered and successful young entrepreneurs.</p>
        <p><strong>What’s New?</strong></p>
        <p>In 2024, YEP introduces an innovative approach with a <strong>focus on four distinct verticals</strong>: SaaS, Retail, Finance, and Healthcare. All participants will get to attend expert sessions on entrepreneurship (common for all verticals), followed by sessions in their chosen vertical.</p>
        <p><strong>SaaS:</strong> This vertical caters to entrepreneurs and startups interested in developing software-based products and services. Participants will delve into topics such as software development methodologies and the use of emerging technologies including AI in their venture.</p>
        <p><strong>Retail:</strong> Entrepreneurs and businesses interested in the retail sector will benefit from specialized sessions on retail marketing strategies, inventory management, and e-commerce platforms among others.</p>
        <p><strong>Fintech:</strong> Participants in the fintech vertical will explore topics such as technology trends in finance, new-age banking and financial services. This track is ideal for aspiring fintech entrepreneurs and finance professionals.</p>
        <p><strong>Healthcare:</strong> Healthcare professionals and innovators will delve into healthcare technology trends, regulatory requirements, and patient-centric care. This vertical is tailored for those passionate about healthcare innovation and entrepreneurs interested in developing healthcare products and services.</p>
        <p>This tailored approach allows participants to gain <strong>industry-specific insights, connect with experts, and develop skills</strong> essential for success in their chosen vertical. Join us as we explore new horizons and unlock the potential within each industry vertical!</p>
        <p><strong>Registration and Fee Options:</strong></p>
        <p>Choose from the following passes to register for the Young Entrepreneur Program (YEP) 2024:</p>
        <ol>
          <li className="yep_listItem"><span><VscDebugBreakpointDataUnverified size='24px'/></span><span><strong>Bronze Pass:</strong> Price: ₹1599/- [Includes: 3-Day YEP pass, Free entry to Proshows, access to all speaker sessions]</span></li>
          <li className="yep_listItem"><span><VscDebugBreakpointDataUnverified size='24px'/></span><span><strong>Silver Pass:</strong> Price: ₹1799/- [Includes: 3-Day YEP pass, Free entry to Proshows, access to all speaker sessions, exclusive Eximius-IIMB Merchandise]</span></li>
          <li className="yep_listItem"><span><VscDebugBreakpointDataUnverified size='24px'/></span><span><strong>Diamond Pass:</strong> Price: ₹1999/- [Includes: 3-Day YEP pass, Free entry to Proshows, access to all speaker sessions, exclusive Eximius-IIMB Merchandise, access to Workshop sessions]</span></li>
        </ol>
        <p>Use the Coupon "<strong>EARLYBIRD100</strong>" to get flat <strong>₹100 off</strong> the registration fee. Valid only up to <strong>April 30, 2024.</strong></p>
        <p>Participants choosing any of the above passes can also opt for <strong>additional Accommodation &amp; Food</strong> at a charge of <strong>₹1000/-</strong>. This charge is applicable for accommodation and food for 6th-7th July 2024 at the IIM Bangalore campus.</p>
        <p><strong>Please Note:</strong></p>
        <ul>
          <li className="yep_listItem"><span><VscDebugBreakpointDataUnverified size='24px'/></span>Registration for YEP will be confirmed upon payment.</li>
          <li className="yep_listItem"><span><VscDebugBreakpointDataUnverified size='24px'/></span>In case of any payment issues, please contact the event organizers or the Unstop Support Team.</li>
          <li className="yep_listItem"><span><span><VscDebugBreakpointDataUnverified size='24px'/></span></span><span>Eligibility for a Certificate requires mandatory attendance during the opening and closing ceremonies, as well as <strong>attendance in at least 6 sessions (excluding mandatory ceremonies)</strong> across both days of the summit.</span></li>
        </ul>
        <p><strong>We wish you the very best for your participation in the Young Entrepreneur Program!</strong></p></div>
    </Container>
  );
};

export default Yep;
