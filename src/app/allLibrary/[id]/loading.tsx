const block = "animate-pulse bg-skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 sm:py-10">
        <div className="flex items-center justify-center gap-3 pb-6">
          <span className="loading loading-spinner loading-sm text-brand-text" />
          <p className="text-sm text-muted">Loading workout...</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <div className={`h-56 w-full rounded-2xl ${block} sm:h-72 lg:h-[420px] lg:w-1/2`} />

          <div className="w-full space-y-4 lg:w-1/2">
            <div className={`h-8 w-2/3 rounded-lg ${block} sm:h-10`} />
            <div className={`h-4 w-full rounded-full ${block}`} />
            <div className={`h-4 w-5/6 rounded-full ${block}`} />
            <div className="flex flex-wrap gap-2 pt-2">
              <div className={`h-8 w-24 rounded-2xl ${block}`} />
              <div className={`h-8 w-28 rounded-2xl ${block}`} />
            </div>

            <div className="mt-4 space-y-4 rounded-2xl bg-surface px-4 py-5 sm:px-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between gap-4">
                  <div className={`h-3 w-24 rounded-full ${block}`} />
                  <div className={`h-3 w-16 rounded-full ${block}`} />
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <div className={`h-5 w-32 rounded-lg ${block}`} />
              <div className={`h-4 w-full rounded-full ${block}`} />
              <div className={`h-4 w-5/6 rounded-full ${block}`} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 pb-10">
          <div className={`h-11 w-44 rounded-xl ${block}`} />
          <div className={`h-11 w-40 rounded-xl ${block}`} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
