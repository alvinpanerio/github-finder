function Home() {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
        <form>
          <div className="relative">
            <input
              type="text"
              className="input input-bordered input-lg bg-gray-200 w-full"
              placeholder="Search"
            />
            <button className="btn btn-lg absolute right-0 w-36 rounded-l-none">
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
