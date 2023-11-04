import React from 'react';
import Image from 'next/image';
import TestWithText from '@components/ProductTestBox/TestWithText';
import TestWithoutText from '@components/ProductTestBox/TestWithoutText';
import ContentBox from '@components/ContentBox/ContentBox';
import TestResultIcon from '@icons/TestErgebnissIcon.svg';
import { useSelector } from 'react-redux';
import {
  selectFirstHDImage,
  selectProductName,
  selectTestContextAverageNumber,
  selectTestContextGradeName,
  selectTestContextGradeValue,
  selectTestContextProductTestWithoutText,
  selectTestContextProductTestWithText,
} from '@store/server/ProductSlice';

export default function ProductTestsBox() {
  const productName = useSelector(selectProductName);
  const image = useSelector(selectFirstHDImage);
  const gradeName = useSelector(selectTestContextGradeName);
  const gradeValue = useSelector(selectTestContextGradeValue);
  const testAverageNumber = useSelector(selectTestContextAverageNumber);
  const productTestsWithText = useSelector(
    selectTestContextProductTestWithText
  );
  const productTestWithoutText = useSelector(
    selectTestContextProductTestWithoutText
  );

  if (!image) return <></>;
  return (
    <section className="mx-auto my-5 w-full max-w-screen-lg">
      <ContentBox
        title="Testergebnisse"
        subtitle={productName}
        icon={<TestResultIcon className="w-[50px] fill-blue" />}
      >
        <section className="mt-5 flex flex-col pb-10 pl-20 md:flex-row ">
          <div className="relative w-full md:w-1/3">
            <Image
              src={image}
              alt={productName}
              height="250"
              width="250"
              className="ml-4 w-auto "
            />
            <div className="absolute right-[30px] bottom-px h-24 w-[115px] overflow-hidden rounded text-center text-lg leading-none md:left-[130px]">
              <div className="h-8 bg-blue-light-50 pt-[7px] text-blue">
                Note ∅
              </div>
              <div className="h-8 bg-blue pt-2 text-white">
                {`${gradeName} (${gradeValue})`}
              </div>
              <div className="h-8 bg-blue-light-50 pt-2 text-blue">
                {`${testAverageNumber}%`}
              </div>
            </div>
          </div>
          <div className="mt-[30px] w-full md:mt-0 md:w-2/3 md:pl-[50px] ">
            <span className="my-[25px] text-base font-bold">
              Preis.de Testnote ∅: Zusammenfassung externer Tests
            </span>
            <ul className="mt-5 pl-5">
              <li className="list-disc">insgesamt testCount Testberichte</li>
              <li className="list-disc">
                Durchschnittsbewertung {testAverageNumber} %, Note ∅ {gradeName}
              </li>
            </ul>
          </div>
        </section>
        <h3 className="flex w-full flex-row bg-grey-light-50 p-2 pl-[50px] md:pl-[90px]">
          <span className="w-1/2 md:w-1/5">Testbericht</span>
          <span className="w-1/2 md:w-1/5">Testnote</span>
          <span className="hidden md:block md:w-3/5">Beschreibung</span>
        </h3>

        <section className="w-full md:pt-2.5">
          {productTestsWithText?.map((test, index: number) => {
            // api null pointer checks -.-"
            if (!test) return <></>;
            if (!test.edition) return <></>;
            if (!test.gradeName) return <></>;
            if (!test.gradeValue) return <></>;
            if (!test.imagehd) return <></>;
            if (!test.publisherName) return <></>;
            if (!test.text) return <></>;
            return (
              <TestWithText
                key={index}
                edition={test.edition}
                gradeName={test.gradeName}
                gradeValue={test.gradeValue}
                imagehd={test.imagehd}
                publisherName={test.publisherName}
                text={test.text}
              />
            );
          })}
        </section>
        <h3
          className="mt-1
          mb-[25px]
          w-full
          bg-blue-light-50
          p-3.5 pl-[50px] text-xl
          font-bold leading-6
          text-blue
          md:pl-[90px]"
        >
          Testergebnisse
        </h3>

        <div className="flex flex-wrap justify-center pb-[30px]">
          {productTestWithoutText?.map((test, index: number) => {
            if (!test) return <></>;
            if (!test.edition) return <></>;
            if (!test.gradeName) return <></>;
            if (!test.gradeValue) return <></>;
            if (!test.imagehd) return <></>;
            if (!test.publisherName) return <></>;
            return (
              <TestWithoutText
                key={index}
                edition={test.edition}
                gradeName={test.gradeName}
                gradeValue={test.gradeValue}
                imagehd={test.imagehd}
                publisherName={test.publisherName}
              />
            );
          })}
        </div>
      </ContentBox>
    </section>
  );
}
