export default function Preloader() {
  return (
    <div
      className="absolute left-0 right-0 top-0 z-[6] h-full w-full bg-grey-light-60 text-center opacity-90"
      data-cy="preloader-mask"
    >
      <div className="relative inset-x-0 z-10 mt-5 inline-block h-[50px] w-20 text-center">
        <div className="inline-block h-3.5 w-3.5 animate-bouncedelay rounded-[100%] bg-grey-light-30 animation-delay-[-0.32s]"></div>
        <div className="inline-block h-3.5 w-3.5 animate-bouncedelay rounded-[100%] bg-grey-light-30 animation-delay-[-0.16s]"></div>
        <div className="inline-block h-3.5 w-3.5 animate-bouncedelay rounded-[100%] bg-grey-light-30"></div>
      </div>
    </div>
  );
}
