export default function DashboardLoading() {
  return <div aria-label="Loading page" className="animate-pulse"><div className="h-4 w-32 rounded bg-[#FED7AA]" /><div className="mt-3 h-9 w-72 max-w-full rounded bg-[#FFEDD5]" /><div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[1,2,3,4].map(item => <div key={item} className="h-36 rounded-2xl bg-[#FFEDD5]" />)}</div><div className="mt-5 h-96 rounded-2xl bg-[#FFEDD5]" /></div>;
}
