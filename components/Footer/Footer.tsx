import Image from 'next/image';
import FacebookIcon from '@icons/facebookIcon.svg';
import PinterestIcon from '@icons/pinterestIcon.svg';
import SSLIcon from '@icons/SSLIcon.svg';

const Footer = () => {
  return (
    <footer
      className="w-full bg-blue-light-10 pt-4 pb-4 pl-5 pr-5 text-xs leading-4 text-white"
      id="site-footer"
    >
      <div className="mt-0 mr-auto mb-0 ml-auto grid w-full	max-w-screen-lg grid-cols-1 md:grid-cols-3">
        <div>
          <div className="border-b-2 border-white md:mr-[15%]">UNTERNEHMEN</div>
          <div>
            <a
              href="/impressum/#datenschutz"
              className="text-white"
              aria-label="Datenschutz"
            >
              Datenschutz
            </a>
          </div>
          <div>
            <a
              href={'#privatsphaere'}
              className="text-white"
              aria-label="Privatsphäre"
            >
              Privatsphäre
            </a>
          </div>
          <div>
            <a href="/impressum/" className="text-white" rel="noopener">
              Nutzungsbedingungen/Impressum
            </a>
          </div>
          <div>
            <a
              href="/ranking"
              className="text-white"
              aria-label="Ranking unserer Suchergebnisse"
            >
              Ranking unserer Suchergebnisse
            </a>
          </div>
        </div>
        <div className=" md:mr-[15%] md:ml-[15%]">
          <div className="border-b-2 border-white">FOLGE UNS</div>
          <div className="mb-2 mt-2 flex gap-2">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/preisde/"
              aria-label="Facebook"
              target="_blank"
            >
              <FacebookIcon
                className="fill-white"
                width="24"
                height="24"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
            <a
              rel="noreferrer"
              href="https://pinterest.com/preisde/"
              aria-label="Pinterest"
              target="_blank"
            >
              <PinterestIcon
                className="fill-white"
                width="24"
                height="24"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
          </div>
          <div className="border-b-2 border-white">UNSERE SERVICES</div>
          <div className="cursor-pointer" data-gtm="price-alarm-divnk">
            Preisalarm-Zugang anfordern
          </div>
        </div>
        <div className=" md:ml-[15%]">
          <div className="border-b-2 border-white">VERTRAUEN & SICHERHEIT</div>
          <div className="flex items-center">
            <SSLIcon
              width="27"
              height="27"
              style={{ width: '27px', height: '27px' }}
            />
            SSL verschlüsselt
          </div>
          <div className="flex items-center">
            <Image
              src="https://cdn.preis.de/logos/shopcertificates/30x30/85/1/shopauskunft.png"
              alt="Shopauskunft.de"
              width="27"
              height="27"
              loading="lazy"
            />
            Partner von Shopauskunft.de
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
