/* eslint-disable import/named */

import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { AiOutlineClose } from 'react-icons/ai';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import logosm from '../../assets/logosmall.png';

interface IFormValues {
  email: string;
  message: string;
}
const ContactPage = () => {
  const { t } = useTranslation(['home', 'navAndFooter']);
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const contactSchema = Yup.object().shape({
    email: Yup.string().email(t('emailError')).required(t('emailError2')),
    message: Yup.string().min(50, t('message')).required(t('message2')),
  });
  return (
    <div className=" mt-8 mb-20 flex w-full max-w-7xl flex-col justify-between self-start md:ml-6 md:flex-row  md:px-6  lg:px-8 ">
      <Formik
        initialValues={{
          email: '',
          message: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(
          values: IFormValues,
          actions: FormikHelpers<IFormValues>,
        ) => {
          actions.setSubmitting(true);
          actions.resetForm();
          setShowModal(true);
          emailjs
            .send(
              'service_ypr0zj8',
              'template_z0d7tqj',
              {
                email: values.email,
                message: values.message,
              },
              'user_pR6XzZUshqc9XuxuBLUzf',
            )
            .then(() => {
              actions.setSubmitting(false);
              actions.resetForm();
            });
        }}
        className="w-1/2"
      >
        <div className="h-fit-content mx-auto  w-11/12 max-w-7xl md:w-8/12 lg:w-7/12 lg2:w-1/2 ">
          <h2 className="pb-7 text-2xl">{t('more')}</h2>
          <h3 className="pb-7">{t('contactForm')}</h3>
          {showModal ? (
            <div
              onClick={closeModal}
              onKeyDown={closeModal}
              role="button"
              tabIndex={0}
            >
              <div className="fixed top-0 left-0  z-20 h-full w-full bg-black opacity-20" />
              <div
                className="bg- fixed top-1/2 left-1/2  z-30 flex h-40 w-10/12 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-lg bg-stone-200 p-6 text-center shadow-xl hover:cursor-default sm:h-60 sm:p-8 sm:text-lg md:text-xl lg:text-2xl lg2:w-1/2 "
                onClick={(e: any) => e.stopPropagation()}
                onKeyDown={(e: any) => e.stopPropagation()}
                role="button"
                tabIndex={0}
                style={{ backgroundImage: `url(${logosm})` }}
              >
                {t('modal')}
                <button
                  onClick={closeModal}
                  onKeyDown={closeModal}
                  aria-label="close handler"
                  className="absolute top-4 right-4 text-xl sm:top-10 sm:right-10"
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          ) : null}
          <Form className="flex flex-col">
            <Field
              id="email"
              name="email"
              placeholder="Email"
              className=" flex h-[3.75rem]  border-b border-solid border-black bg-[#F0F0F0] p-6 "
            />
            <ErrorMessage
              component="a"
              name="email"
              className="mt-3 text-red-600"
            />

            <Field
              name="message"
              component="textarea"
              placeholder={`${t('message2')}`}
              className="mt-9 h-56 border-b border-solid border-black bg-[#F0F0F0] p-6 "
            />

            <ErrorMessage
              component="a"
              name="message"
              className="mt-3 text-red-600"
            />

            <button
              type="submit"
              className="mt-6 h-[3.75rem] w-full rounded bg-black text-white hover:opacity-75"
            >
              {t('send')}
            </button>
          </Form>
        </div>
      </Formik>
      <div className=" mt-10 flex w-full  flex-col items-end pr-4 md:mt-0  md:mr-4 md:w-1/2">
        <h2 className="text-xl">{t('contactData')}</h2>
        <div className="flex flex-col  items-end leading-[150%]">
          <p className="mt-3 font-bold sm:mt-8 "> S.mallets</p>
          <p>Tomasz Skrętkowski</p>
          <a href="tel:+48660748918">tel: +48 660 748 918</a>
          <a href="mailto:s.mallets.mail@gmail.com">
            e-mail: s.mallets.mail@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
