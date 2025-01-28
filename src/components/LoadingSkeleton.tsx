// src/components/LoadingSkeleton.tsx
const LoadingSkeleton = () => {
  return (
    <div>
      {/* Large Screen Layout */}
      <div className="hidden lg:flex justify-between max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="max-w-xl flex flex-col gap-4 bg-white p-4">
          {/* Cover Art Skeleton */}
          <div className="w-full aspect-square bg-slate-200 animate-pulse rounded-lg"></div>
          
          {/* Title and Artist Skeleton */}
          <div className="space-y-2">
            <div className="h-6 bg-slate-200 animate-pulse rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 animate-pulse rounded w-1/2"></div>
          </div>
          
          {/* Controls */}
          <div className="max-w-xl px-2">
            {/* Play Controls */}
            <div className="flex items-center justify-between w-full pb-4">
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-8 w-8 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
            </div>
            
            {/* Volume Slider */}
            <div className="h-2 bg-slate-200 animate-pulse rounded w-full mt-4"></div>
          </div>
        </div>

        {/* Right Column - Playlist */}
        <div className="w-135 bg-white p-4">
          <div className="space-y-2">
            <div className="h-6 bg-slate-200 animate-pulse rounded w-16 mb-4">
              {/* Playlist Title */}
            </div>
            {/* Playlist Items */}
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <div className="flex-1">
                  <div className="h-4 bg-slate-200 animate-pulse rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-200 animate-pulse rounded w-1/2"></div>
                </div>
                <div className="h-4 bg-slate-200 animate-pulse rounded w-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden flex flex-col gap-4 p-4">
        <div className="max-w-xl flex flex-col gap-4 bg-white">
          {/* Cover Art Skeleton */}
          <div className="w-full aspect-square bg-slate-200 animate-pulse rounded-lg"></div>
          
          {/* Title and Artist Skeleton */}
          <div className="space-y-2">
            <div className="h-6 bg-slate-200 animate-pulse rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 animate-pulse rounded w-1/2"></div>
          </div>
          
          {/* Controls */}
          <div className="max-w-xl px-2">
            {/* Play Controls */}
            <div className="flex items-center justify-between w-full pb-4">
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-8 w-8 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
              <div className="h-6 w-6 bg-slate-200 animate-pulse rounded"></div>
            </div>
            
            {/* Volume Slider */}
            <div className="h-2 bg-slate-200 animate-pulse rounded w-full mt-4"></div>
          </div>
        </div>

        {/* Mobile Playlist */}
        <div className="max-w-xl bg-white p-4">
          <div className="space-y-2">
            <div className="h-6 bg-slate-200 animate-pulse rounded w-16 mb-4"></div>
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <div className="flex-1">
                  <div className="h-4 bg-slate-200 animate-pulse rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-200 animate-pulse rounded w-1/2"></div>
                </div>
                <div className="h-4 bg-slate-200 animate-pulse rounded w-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;