const block = "animate-pulse bg-skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10 sm:py-16">
        <div className="flex items-center justify-center gap-3 pb-6">
          <span className="loading loading-spinner loading-sm text-brand-text" />
          <p className="text-sm text-muted">Loading your plan...</p>
        </div>

        <div className="space-y-3">
          <div className={`h-9 w-56 rounded-lg ${block} sm:h-10`} />
          <div className={`h-4 w-80 max-w-full rounded-full ${block}`} />
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-surface-2 p-5 sm:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <div className={`h-4 w-24 rounded-full ${block}`} />
                <div className={`h-9 w-16 rounded-lg ${block}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className={`h-10 w-64 rounded-xl ${block}`} />
          <div className={`h-10 w-36 rounded-lg ${block}`} />
        </div>

        <div className="mt-6 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-surface-2 p-4 sm:flex-row sm:items-center sm:gap-5"
            >
              <div className={`h-32 w-full rounded-xl ${block} sm:h-24 sm:w-36`} />
              <div className="flex-1 space-y-3">
                <div className={`h-6 w-40 rounded-lg ${block}`} />
                <div className={`h-4 w-28 rounded-full ${block}`} />
                <div className={`h-4 w-52 max-w-full rounded-full ${block}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
