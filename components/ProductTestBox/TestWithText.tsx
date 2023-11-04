import Image from 'next/image';
import React from 'react';

type TestWithTextProps = {
  edition: string;
  gradeName: string;
  gradeValue: string;
  imagehd: string;
  publisherName: string;
  text: string;
};

export default function TestWithText({
  edition,
  gradeName,
  gradeValue,
  imagehd,
  publisherName,
  text,
}: TestWithTextProps) {
  return (
    <section className="border-b-2 pb-[25px] pt-[11px]">
      <div className="ml-[50px] pt-2.5 pb-2.5 md:pl-[90px]">
        <div className="flex flex-col border-t-0 border-l-0 border-r-0 border-b border-solid border-grey-light-40 py-2.5 first:pt-0 last:border-b-0 last:pb-0 md:flex-row">
          <div className="flex w-full flex-row items-start justify-start md:w-2/5">
            <div className="flex w-1/2 flex-col items-start pt-[5px] text-xs md:w-1/5">
              <Image
                src={imagehd}
                alt={text}
                height="90"
                width="90"
                className=""
              />
              <span className="text-center">{publisherName}</span>
            </div>
            <div className="flex flex-col items-start text-xs md:ml-[105px] md:w-2/5 ">
              <strong>{`${gradeName} (${gradeValue})`}</strong>
              <div className="text-center">{edition}</div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:w-3/5">
            <strong>Preis.de Fazit: </strong>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
