import { Link } from 'react-router-dom';

import fb from '../../../assets/facebook.png';

const Footer = () => {
  return (
    <footer className="h-[27.8125rem] w-full bg-[#232323] text-white ">
      <div className="xl container  mx-auto flex justify-between px-[60px] pt-[3.75rem]  sm:px-0">
        <div>
          <h2 className="text-[1.5625rem]">Dane kontaktowe</h2>
          <div className="flex flex-col  leading-[150%]">
            <h4 className="mt-[2.3125rem] font-bold"> S.mallets</h4>
            <h4>Tomasz Skrętkowski</h4>
            <a title="+48660748918" href="tel:+48660748918">
              Tel: +48 660 748 918
            </a>
            <a
              title="s.mallets.mail@gmail.com"
              href="mailto:s.mallets.mail@gmail.com"
            >
              E-Mail: s.mallets.mail@gmail.com
            </a>
          </div>
          <a
            href="https://www.facebook.com/skrettomasz"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt="facebook" className="mt-[3.75rem]" />
          </a>
        </div>

        <div className="flex  flex-col items-end gap-y-[2rem]">
          <Link to="/product-series">Produkty</Link>
          <Link to="/about-me">O mnie</Link>
          <Link to="/service">Serwis</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
