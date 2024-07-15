import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const WriteMessage = () => {
  const {t} = useTranslation();

    const form = useRef();

    const sendSubmit=(e)=>{
        e.preventDefault();

        emailjs
      .sendForm('service_vra2gh3', 'template_470b5jn', form.current, {
        publicKey: 'QWQSQUW3X2RL3Rh6f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );



    }
  return (
    <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
        <h1 className='my-5'>{t("writemessage.0")}</h1>
        <div className='col-8 col-sm-7 col-lg-5'>
        <form ref={form} onSubmit={sendSubmit}>
                <div className="mb-3">
                    <label className="form-label">{t("writemessage.1")}</label>
                    <input name='name' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">{t("writemessage.2")}</label>
                    <input name='email'  type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">{t("writemessage.3")}</label>
                    <div className="form-label">
                        <input name='phone'  type="text" className="form-control"  />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">{t("writemessage.4")}</label>
                    <div className="form-floating">
                        <textarea name='message'  className="form-control" style={{ height: 100 }} />
                    </div>
                </div>
                <button type="submit" className="btn rounded-0 mt-1">{t("writemessage.5")}</button>
            </form>
    </div>
    </div>
  )
}

export default WriteMessage