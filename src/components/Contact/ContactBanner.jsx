import { React, useEffect, useState } from "react";
import { contactBanner } from "../../constants/data/contact";

const ContactBanner = () => {

    return (
        <section className="contactBanner" role="banner" aria-labelledby="contactBannerHeading">
            <div className="contactBanner__titleArea">
                <h2
                    className="contactBanner__titleArea-title"
                    data-aos="fade-right"
                    data-aos-duration="1100"
                    data-aos-delay="100"
                    id="contactBannerHeading"
                >
                    {contactBanner.banner_text.title}
                </h2>
                <h3
                    className="contactBanner__titleArea-subtitle"
                    data-aos="fade-right"
                    data-aos-duration="1100"
                    data-aos-delay="200"
                >
                    {contactBanner.banner_text.subTitle[0]}<span class="mobile-br" />
                    {contactBanner.banner_text.subTitle[1]}
                </h3>
            </div>
        </section>
    )
}

export default ContactBanner;