export const StartupCardSkeleton = () => {
  return (

    <div className="md:basis-3/4 lg:basis-4/5">
      <div className="grid gap-4">

        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="card p-5 rounded-xl animate-pulse"
          >
            <div className="h-4 bg-gray-200 w-1/2 mb-3" />
            <div className="h-3 bg-gray-200 w-1/4 mb-4" />

            <div className="h-2 bg-gray-200 mb-2" />
            <div className="h-2 bg-gray-200 w-3/4 mb-4" />

            <div className="flex gap-2">
              <div className="h-5 w-12 bg-gray-200 rounded" />
              <div className="h-5 w-16 bg-gray-200 rounded" />
            </div>
          </div>
        ))}

      </div>
    </div>


  );
}
  ;


