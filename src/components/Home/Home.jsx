import "./Home.scss";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

const Home = (props) => {
  const { user } = props;

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <>
      <div className="home">
        <header className="greeting">
          <img src={greetingImg} className="greeting__img" alt={greetingTime} />
          <h1 className="greeting__heading">
            Good {greetingTime} <br />
          </h1>
        </header>
        {/* <section className="button-section">
          <Button buttonText={"Lets Go"} isSecondary={true} />
          <Button buttonText={"Explore"} />
        </section> */}
      </div>
    </>
  );
};

export default Home;