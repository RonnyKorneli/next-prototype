type ContentBoxProps = {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  headerRightElement?: React.ReactNode | null;
};

export default function ContentBox({
  icon,
  title,
  headerRightElement,
  subtitle,
  children,
}: ContentBoxProps) {
  return (
    <div className="mb-8 max-w-[1330px] overflow-hidden border-[1px] border-t-[3px] border-solid border-grey-light-40 border-t-blue bg-white pb-4 text-sm leading-normal">
      <header className="relative m-auto flex w-[99%] border-0 border-b-2 px-[7%] py-3 md:pt-7 md:pb-4 md:pl-16">
        {icon}
        <div className="ml-8">
          <h2 className="m-0 mb-0.5 p-0 text-xl font-bold">{title}</h2>
          {subtitle && (
            <span className="inline-block leading-4">{subtitle}</span>
          )}
        </div>

        {headerRightElement && (
          <div className="absolute right-0 top-0 mt-3 mr-3">
            {headerRightElement}
          </div>
        )}
      </header>
      <hr />
      {children}
    </div>
  );
}
