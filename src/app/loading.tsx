import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

function Loading(): JSX.Element {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="py-3 mt-10 flex flex-wrap justify-center gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
          return (
            <div
              className="animate-pulse bg-slate-200 w-64 h-72 rounded overflow-hidden"
              key={num}
            ></div>
          );
        })}
      </div>
    </main>
  );
}

export default Loading;
