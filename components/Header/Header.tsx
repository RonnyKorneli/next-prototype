import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@components/Breadcrumbs';
import CloseIcon from '@icons/closeIcon.svg';
import SearchIcon from '@icons/searchIcon.svg';

export default function Header() {
  return (
    <header className="site-header -minimal" id="headerDefaultMinimal">
      <a className="sr-only" href={'#main'}>
        Zum Inhalt springen
      </a>
      <a className="sr-only" href={'#site-footer'}>
        Zum Footer springen
      </a>
      <div className="container-narrow">
        <div className="grid items-center">
          <Link href="/" className="logo">
            <Image
              src="/logo.svg"
              alt="Preissuchmaschine Preis.de: unabhängiger, neutraler Preisvergleich"
              width={170}
              height={58}
            />
          </Link>
          <nav className="burger-menu sr-only"></nav>
          <div className="searchbar -blue">
            <input
              id="headerSearchbar"
              name="query"
              type="search"
              className="input"
              data-location="Header"
              data-test="input"
              value=""
              placeholder="Finde dein Produkt... "
              autoComplete="off"
              aria-label="Suchen"
              onChange={() => {
                console.log('onChange search input');
              }}
            />
            <span
              id="headerRemoveSearchword"
              title="Suche zurücksetzen"
              className="remove-searchword"
              role="button"
              data-gtm="header-remove-searchword"
              aria-label="Schließen"
            >
              <CloseIcon
                className="close"
                width="12"
                height="12"
                style={{ width: '12px', height: '12px' }}
              />
            </span>
            <button
              id="headerSearchbarSubmit"
              className="submit -rounded-border"
              data-test="submit"
              data-gtm="header-submit"
              aria-label="Suchen"
            >
              <span className="inner-border">
                <SearchIcon
                  className="search-icon"
                  width="21"
                  height="21"
                  style={{ width: '21px', height: '21px' }}
                />
              </span>
            </button>
          </div>
          <Breadcrumbs />
        </div>
      </div>
    </header>
  );
}
