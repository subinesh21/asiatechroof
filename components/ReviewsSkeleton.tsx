export default function ReviewsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-[#16181D] border border-[#C9A84C]/10 p-8 h-[300px] animate-pulse">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#242933]"></div>
            <div className="flex-1">
              <div className="h-4 bg-[#242933] w-24 mb-2 rounded"></div>
              <div className="h-3 bg-[#242933] w-16 rounded"></div>
            </div>
          </div>
          <div className="h-4 bg-[#242933] w-20 mb-4 rounded"></div>
          <div className="space-y-3">
            <div className="h-3 bg-[#242933] w-full rounded"></div>
            <div className="h-3 bg-[#242933] w-[90%] rounded"></div>
            <div className="h-3 bg-[#242933] w-[95%] rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
