import './style.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356" 
      alt="logo" 
      className="log"
      width={"100px"} height={"110px"}/>

      <ul>
        <li>Home</li>
        <li><a href="#about-us">About Us</a></li>
      </ul>
      <div>
          <input type="search" placeholder="Search" className='searchbar'/>
      </div>
            <img src='https://img.icons8.com/?size=100&id=132&format=png&color=000000'
            alt ="search-png"
            width={"20px"}/>
         <button className='sign'>signin</button>
    </div>
  );
}

export default Navbar;
