function NavBar() {
  return (
    <div className="flex justify-between px-40 mt-5">
      {/* <div>
        <img src="/logo.png" className="h-10"/>
      </div> */}
      <div className="flex">
        <div>
          <img src="/logo.png" className="h-7" />
        </div>
        <div className="ml-4 font-serif font-extrabold text-lg">
          <h1>JiffyScan</h1>
        </div>
      </div>
      <a href="/">Home</a>
      <div>
        <select>
          <option value="Blockchain">Blockchain</option>
        </select>
      </div>
      <div>
        <select>
          <option value="Developer">Developer</option>
        </select>
      </div>
      <div>
        <select>
          <option value="More">More</option>
        </select>
      </div>
      <div>
        <p>About</p>
      </div>
      <div className="border-2 rounded-lg flex">
        <form>
          <select className="border-r-2">
            <div>
              <img src="/bolt.jpg" className="h-2" />
            </div>
          </select>
          <input type="text" placeholder="Search an UserOp" />
        </form>
      </div>
    </div>
  );
}

export default NavBar;
