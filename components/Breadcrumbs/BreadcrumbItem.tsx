import Link from 'next/link';

export type BreadcrumbItemProps = {
  url: string;
  name: string;
};
export default function BreadcrumbItem({ url, name }: BreadcrumbItemProps) {
  return (
    <li className="item">
      <Link href={url} className="label">
        {name}
      </Link>
    </li>
  );
}
