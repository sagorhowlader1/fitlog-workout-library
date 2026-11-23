const block = "animate-pulse bg-skeleton";

const Loading = () => {
  return (
    <div>
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-15">
        <div className="container mx-auto rounded-2xl bg-surface px-6 py-10 sm:rounded-3xl sm:px-10 lg:px-30 lg:py-30">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="w-full space-y-4 lg:w-1/2">
              <div className={`h-4 w-40 rounded-full ${block}`} />
              <div className={`h-9 w-full rounded-xl ${block} sm:h-11`} />
              <div className={`h-4 w-3/4 rounded-full ${block}`} />
              <div className={`h-10 w-48 rounded-xl ${block}`} />
            </div>
            <div
              className={`h-48 w-full rounded-2xl ${block} sm:h-72 lg:h-[360px] lg:w-1/2`}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 pt-4 pb-2">
          <span className="loading loading-spinner loading-sm text-brand-text" />
          <p className="text-sm text-muted">Loading workouts...</p>
        </div>

        <div className="space-y-3 pt-8">
          <div className={`h-8 w-56 rounded-lg ${block} sm:h-10`} />
          <div className={`h-4 w-72 max-w-full rounded-full ${block}`} />
        </div>

        <div className="mt-8 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-surface"
            >
              <div className={`h-44 w-full ${block} sm:h-48`} />
              <div className="space-y-3 px-5 pb-6 pt-4">
                <div className={`h-6 w-32 rounded-full ${block}`} />
                <div className={`h-7 w-2/3 rounded-lg ${block}`} />
                <div className={`h-4 w-1/3 rounded-full ${block}`} />
                <div className="my-4 h-px bg-divider"></div>
                <div className={`h-4 w-2/3 rounded-full ${block}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
