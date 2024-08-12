import homePageImg from "../assets/homepage.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <header>
          <h1>Welcome to health analysis revolutionized</h1>
          <p>
            Monitor your body health and stay informed about prevalent diseases
          </p>
        </header>
        <div id="image">
          <img src={homePageImg} alt="medic image" />
        </div>
        <div id="intro-text">
          <p className="intro-text">
            Are you curious about whether your body proportions are within
            healthy ranges? Do you want to stay informed about prevalent
            diseases in your area or the destination you're traveling to? (put
            gif here) You're in luck! Our comprehensive software is designed to
            help individuals monitor their body health by analyzing various
            physical metrics such as BMI, waist circumference, and more.
            Additionally, it provides vital information on prevalent diseases
            and infections based on the location you input, enabling you to make
            informed decisions about your health and safety. Whether you're at
            home or on the go, our tool ensures you have the knowledge you need
            to maintain optimal health and stay aware of potential health risks
            in your surroundings.
          </p>
        </div>
        <div id="btn">
          <Link to="/physical">
            <button>Physical Health</button>
          </Link>
          {/* <Link to="/locator">
          <button>Locator</button>
        </Link> */}
        </div>
      </main>
    </>
  );
};

export default Home;
