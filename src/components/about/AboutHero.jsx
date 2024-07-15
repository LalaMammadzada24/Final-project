import React from 'react'
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const {t} = useTranslation();

    return (
        <>
            <div className="abouthero pt-3">
                <div className="ms-5 me-4">
                <h1 className="about-title mb-0 ms-1">{t("abouthero.0")}</h1>
                    <div className=" pt-4">
                        <h4 className=" mt-4 ms-1">{t("abouthero.1")}</h4>
                        <div className="overflow-hidden">
                            <div className="container px-5 mt-4">
                                <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-about-us-top-img.png.webp" className="img-fluid  mb-4" alt="Example image"  loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero