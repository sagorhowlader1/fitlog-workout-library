import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex min-h-[60vh] items-center justify-center py-14">
        <div className="w-full max-w-lg rounded-3xl border border-line bg-surface px-6 py-12 text-center sm:px-10">
          <p className="text-6xl font-bold text-brand-text sm:text-7xl">404</p>
          <h1 className="mt-4 text-2xl font-bold uppercase text-ink sm:text-3xl">
            Not Found
          </h1>
          <p className="mt-3 text-muted">
            The page or workout you are looking for does not exist.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="btn rounded-xl border-none bg-brand text-black"
            >
              Back to workouts
            </Link>
            <Link
              href="/my-plan"
              className="btn rounded-xl border-none bg-ghost text-ink"
            >
              Go to my plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
