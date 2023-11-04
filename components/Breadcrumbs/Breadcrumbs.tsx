import Link from 'next/link';

import HomeIcon from '@icons/home.svg';
import BreadcrumbItem from '@components/Breadcrumbs/BreadcrumbItem';
import { useSelector } from 'react-redux';
import { selectBreadcrumbItems } from '@store/server/ProductSlice';

export default function Breadcrumbs() {
  const breadcrumbItems = useSelector(selectBreadcrumbItems);
  return (
    <div
      id="breadcrumb-container"
      className="breadcrumb"
      data-test="breadcrumb"
    >
      <ul id="breadcrumb-list" className="breadcrumb-list">
        <Link href="/" className="label" aria-label="zur Startseite">
          <HomeIcon className="home h-[14px] w-[14px]" />
        </Link>
        {breadcrumbItems?.map((breadcrumbItem, key: number) => {
          if (!breadcrumbItem) return <></>;
          return (
            <BreadcrumbItem
              key={key}
              url={breadcrumbItem.url}
              name={breadcrumbItem.name}
            />
          );
        })}
      </ul>
    </div>
  );
}
