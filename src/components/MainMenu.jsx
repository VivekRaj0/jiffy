function MainMenu() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex justify-start px-40 mt-10">
          <div className="ml-4 font-serif font-extrabold text-lg pr-2 border-r-2">
            <h1>Work History</h1>
          </div>
          <div className="ml-4 font-serif text-lg">
            <button className="pb-2 focus:border-b-2 focus:border-b-blue-600">
              Completed
            </button>
          </div>
          <div className="ml-4 font-serif text-lg">
            <button className="pb-2 focus:border-b-2 focus:border-b-blue-600">
              In Review
            </button>
          </div>
        </div>
        <div className="flex justify-between pr-40 mt-10">
          <div className="ml-4 mr-4 border-l-2 pl-2 font-serif text-lg">
            <h1>Filter By</h1>
          </div>
          <select className="border-2">
            <option value="All">All</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Content">Content</option>
          </select>
        </div>
      </div>
      <div>
        <a
          href="#"
          className="flex flex-col items-center bg-white mx-40 my-10 rounded-lg shadow md:flex-row hover:shadow-lg hover:scale-110 hover:shadow-gray-400 outline hover:outline-blue-500"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/bolt.jpg"
            alt=""
          />
          <div className="p-4 leading-normal">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Design Earn Talent's Leader Board{" "}
                <span className="mb-2 font-normal text-2xl text-gray-700">
                  By SuperTeam
                </span>
                <span className="mb-2 ml-80 font-normal text-2xl text-gray-700">
                    04/03/2024
                </span>
              </h5>
            </div>
            <div>
              <h5 className="mb-2 mt-4 text-lg tracking-tight text-white">
                <span className="bg-gray-400 rounded px-4 mr-80">Content</span>
                <span className="mb-2 ml-80 font-normal text-2xl text-gray-700">
                    20 Participants
                </span>
              </h5>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="flex flex-col items-center bg-white mx-40 my-10 rounded-lg shadow md:flex-row hover:shadow-lg hover:scale-110 hover:shadow-gray-400 outline hover:outline-blue-500"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/bolt.jpg"
            alt=""
          />
          <div className="p-4 leading-normal">
            <div>
                
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Design Earn Talent's Leader Board
                <span className="mb-2 font-normal text-2xl text-gray-700">
                  By SuperTeam
                </span>
                <span className="mb-2 font-normal text-2xl text-gray-700">
                    04/03/2024
                </span>
              </h5>
            </div>
            <div>
              <h5 className="mb-2 mt-4 text-lg tracking-tight text-white">
                <span className="bg-red-400 rounded px-4 mr-80">Frontend</span>
                <span className="mb-2 ml-80 font-normal text-2xl text-gray-700">
                    20 Participants
                </span>
              </h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default MainMenu;
