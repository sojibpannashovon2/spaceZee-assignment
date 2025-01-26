const Inbox = () => {
  return (
    <>
      <div className="relative overflow-hidden xl:lg:px-12 mx-auto xl:lg:w-[1280px] bg-[#E7F9FD] h-[442px] text-center my-24 rounded-2xl">
        <div className=" w-[52%] mx-auto pt-28">
          <div>
            <h1 className="xl:lg:text-[48px] font-semibold">
              Deliciousness to your inbox
            </h1>
            <p>
              Get deliciousness delivered straight to your inbox. Subscribe now
              for mouthwatering updates and foodie inspiration!
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <div className="relative xl:lg:w-[400px]">
              <input
                className="border border-slate-700 w-full rounded-lg py-3 px-4 pr-[100px] text-sm"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="absolute  -bottom-45 -right-25 xl:lg:w-[410px] xl:lg:h-[400px] bg-[url('/src/assets/inbox/inbox1.png')] bg-no-repeat bg-contain"></div>
        <div className="absolute  -bottom-30 -left-30 xl:lg:w-[410px] xl:lg:h-[400px] bg-[url('/src/assets/inbox/inbox2.png')] bg-no-repeat bg-contain"></div>
        {/* <div className="absolute -top-28 -left-20">
            <img
              className="xl:lg:w-[410px] xl:lg:h-[400px]"
              src={inbox2}
              alt=""
            />
          </div>
           */}

        {/* <div className="absolute -top-15 -right-20 ">
            <img
              className="overflow-hidden xl:lg:w-[410px] xl:lg:h-[400px]"
              src={inbox1}
              alt=""
            />
          </div> */}
      </div>
    </>
  );
};

export default Inbox;
