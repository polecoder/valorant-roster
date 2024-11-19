function Loading({ text }) {
  return (
    <div className="px-4 py-6 xs:py-8 md:py-10">
      <p className="pb-8 text-center font-lato text-xl md:pb-10 md:text-2xl">
        {text}
      </p>
      <img
        src="/img/loading.svg"
        alt="Loading"
        className="mx-auto h-12 w-12 md:h-16 md:w-16"
      />
    </div>
  );
}

export default Loading;
