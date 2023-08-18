export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between font-bdoGrotesk">
      <div className="flex justify-center items-center relative h-screen">
        <h1 className="text-7xl text-center font-light tracking-[3px] -mt-20">
          WELCOME TO THE VIVIDITY
        </h1>
        <div className="absolute bottom-16 h-16 w-10 border-2 border-white rounded-full">
          <div className="relative h-full w-full">
            <div className="absolute top-5 left-[14px] h-2 w-2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </main>
  );
}
