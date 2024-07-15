import React from 'react'
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const {t} = useTranslation();

    return (
        <>
            <div className="faq px-5 pt-3">
                <h4 className='pb-3'>FAQs</h4>
                <ul className="list-unstyled ps-0 mb-0 mt-3">
                    <li className="pb-3 border-bottom py-2">
                        <button className="col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                        {t("faq.0")}<i class="fa-solid fa-angle-down"></i>
                        </button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled pb-1 small mt-3">
                                <li className='mb-3'>{t("faq.1")}</li>
                                <li>{t("faq.2")}</li>
                            </ul>
                        </div>
                    </li>
                        <li className="pb-3 border-bottom py-2 pt-3">
                            <button className="col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            {t("faq.3")} <i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled pb-1 small">
                                    <li>{t("faq.4")}</li>
                                </ul>
                            </div>
                        </li>
                        <li className="py-2 pt-3 pb-3 border-bottom">
                            <button className=" col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            {t("faq.5")}<i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="orders-collapse">
                                <ul className="col-12 col-sm-12 col-md-12 list-unstyled pb-1 small">
                                    <li className='mb-3'>{t("faq.6")}</li>
                                    <li>{t("faq.7")}</li>
                                </ul>
                            </div>
                        </li>
                        <li className="py-2 pt-3 pb-3 border-bottom">
                            <button className=" col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center rounded border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            {t("faq.8")}<i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled pb-1 small">
                                    <li>{t("faq.9")}</li>
                                </ul>
                            </div>
                        </li>
                        <li className="py-2 pt-3 pb-1">
                            <button className=" col-12 col-sm-12 col-md-12 d-inline-flex justify-content-between align-items-center rounded border-0 collapsed ps-0 text-start" data-bs-toggle="collapse" data-bs-target="#last-collapse" aria-expanded="false">
                            {t("faq.10")}<i class="fa-solid fa-angle-down"></i>
                            </button>
                            <div className="collapse mt-3" id="last-collapse">
                                <ul className="btn-toggle-nav list-unstyled pb-1 small">
                                    <li>{t("faq.11")}</li>
                                </ul>
                            </div>
                        </li>
                </ul>
            </div>
        </>
    )
}

export default FAQ