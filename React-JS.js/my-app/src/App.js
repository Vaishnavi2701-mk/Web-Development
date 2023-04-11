import "./App.css";

let name = "<b>Vaishnavi</b>";
function App() {
  return (
    /* Only one tag in return
       No undeterminated tags
       variables inside { } 
       className, htmlFor => we have to mpdify them like this as they have been already used in html*/
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src="" alt="" />
      <div div className="container">
        <h1>Here its me,{name}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          quo maxime quis delectus nesciunt hic perferendis magnam ulpa ipsam
          saepe pariatur itaque, repudiandae quaerat veritatis iure neque
          dolorem aut alias!
        </p>
      </div>
    </>
  );
}

export default App;
