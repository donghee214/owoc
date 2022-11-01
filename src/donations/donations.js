import React from "react";
import partnershipPhoto from "../assets/images/partnership.png"
import donationsPhoto from "../assets/images/donations.png"
import lookingForwardPhoto from "../assets/images/looking-forward.png"
import LearnMore from "../common/learnMore"
import ImageGallery from 'react-image-gallery';

import "./donations.css"

const images = [
  {
    original: partnershipPhoto,
  },
  {
    original: donationsPhoto,
    description: "Note that faces of all students and their families faces have been covered at their request for privacy reasons."
  },
  {
    original: lookingForwardPhoto
  },
];

const getDate = () => {
  const today = new Date();
  return today.toLocaleDateString()
}

export default () => {
  return(
    <div className={`initiatives-container`}>
      <div className={`initiatives-component initiatives-border-bottom`}>
        <div className="donations-container">
          <ImageGallery 
            items={images}
            showPlayButton={false}
            additionalClass={"donations-gallery"}
            showBullets
            showIndex
          />
          <h1 className={"homepage-landing-title"}>
            OWOC has raised <span className={"homepage-landing-text-underline"}>$10,200</span> as of <span className={"homepage-landing-text-underline"}>{getDate()}</span>.
          </h1>
          <p className={"photo-gallery-subtext"}>
            See where the donations go!
          </p>
        </div>
      </div>


      <div className={"initiatives-all"}>

        <div className={`initiatives-component initiatives-border-bottom`}>
          {/* <img src={partnershipPhoto} className={"initiatives-top-image"}/> */}
          <h1 className={"initiatives-component-title"}>
            Partnership
          </h1>
          <p>
            We’ve partnered with the Longyan Public Welfare Agency, the official public welfare organization for the region of Longyan, China to donate this money towards students in need.
          </p>
        </div>
        <div className={`initiatives-component initiatives-border-bottom`}>
          {/* <img src={donationsPhoto} className={"initiatives-top-image"}/> */}
          <h1 className={"initiatives-component-title"}>
            Donations
          </h1>
          <p>
            We’ve been able to provide running shoes, stationary, sports and recreational equipment, school uniforms, and lunch fees for 40 underprivileged students from grades 3 to 11.
          </p>
        </div>
        <div className={`initiatives-component initiatives-border-bottom`}>
          {/* <img src={lookingForwardPhoto} className={"initiatives-top-image"}/> */}
          <h1 className={"initiatives-component-title"}>
            Looking forward
          </h1>
          <p>
          We are extremely grateful to be able to provide a helping hand towards these students, however, this is only the beginning. We hope to continue supporting students and protecting their dreams, look out for some awesome upcoming events and fundraising from OWOC!
          </p>
        </div>
      </div>
      <LearnMore
        nextTitle={"Meet The Team"}
        nextDescription={"Work with us to provide a new level of transparency for a world of shared opportunity"}
        linkUri={"/meet-the-team"}
        />
    </div>
  )
}

