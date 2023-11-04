import React from 'react';
import Image from 'next/image';

type TestWithoutTextProps = {
  edition: string;
  gradeName: string;
  gradeValue: string;
  imagehd: string;
  publisherName: string;
};

export default function TestWithoutText({
  edition,
  gradeName,
  gradeValue,
  imagehd,
  publisherName,
}: TestWithoutTextProps) {
  return (
    <div className="m-[5px] h-[130px] w-[44%] border border-grey-light-30 p-[5px] md:w-[150px] ">
      <div className="h-full w-full flex-row items-center justify-center p-1">
        <div className="flex justify-center">
          <Image src={imagehd} alt={publisherName} height="30" width="80" />
        </div>
        <div className="mb-3 mt-[5px] flex justify-center">{publisherName}</div>
        <div className="mb-[5px] flex justify-center">
          <strong> {`${gradeName} (${gradeValue})`} </strong>
        </div>
        <div className="flex justify-center">{edition}</div>
      </div>
    </div>
  );
}
