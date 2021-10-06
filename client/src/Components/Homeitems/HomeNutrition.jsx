import { Link } from "react-router-dom";
import classes from "./HomeNutrition.module.css";
import protein from "../../assets/images/protein.jpg";
import carb from "../../assets/images/carbohydrate1.jpg";
import oil from "../../assets/images/oil1.jpg";
import mineral from "../../assets/images/mineral.jpg";
import water from "../../assets/images/water1.jpg";
import sleep from "../../assets/images/sleep.jpg";

const HomeNutrition = () => {
  const body = (
    <section className={classes.wrapper}>
      <div className={classes.column}>
        <h2 className={classes.section_heading}>
          CHOOSE
          <em> NUTRITION</em>
        </h2>
        <p className={classes.boil_important_work}>
          Nutrition is extremely important, it accounts for 70% of the success.
          You must balance
          <em>PROTEIN, CARBOHYDRATES, FAT, WATER, VITAMINS, SLEEP</em>. To get
          the best result.
        </p>
      </div>
      <div className={classes.wrapper_card}>
        <div className={classes.card}>
          <div className={classes.front}>
            <img src={protein} alt="" />
          </div>
          <div className={classes.back}>
            <div className={classes.back_content}>
              <h2>PROTEIN</h2>
              <p>
                Protein is responsible for rebuilding your muscle tissues after
                exercise and also plays a minor role in producing energy under
                more extreme training conditions. The complete proteins we
                consume (e.g. meats, fish, dairy, eggs, etc.) are made up of the
                same amino acids that make up our muscles
              </p>
              <Link to="/nutrition">Read more</Link>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.front}>
            <img src={carb} alt="" />
          </div>
          <div className={classes.back}>
            <div className={classes.back_content}>
              <h2>CARBOHYDRATES</h2>
              <p>
                The main role of carbohydrates in physical activity is to
                provide energy.Increased by consuming carbohydrate in the hours
                or days prior to the session, intake during exercise, and
                refuelling during recovery between sessions. This is important
                for the training where optimal performance is desired
              </p>
              <Link to="/nutrition">Read more</Link>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.front}>
            <img src={oil} alt="" />
          </div>
          <div className={classes.back}>
            <div className={classes.back_content}>
              <h2>FAT</h2>
              <p>
                Fats are an essential energy source .One of the most important
                functions of fat in the diet is to provide a source of energy
                for a number of bodily functions, including muscle contractions
                for physical activity. You should use unsaturated fats found in
                plants such as avocados, nuts, olive oil.
              </p>
              <Link to="/nutrition">Read more</Link>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.front}>
            <img src={mineral} alt="" />
          </div>
          <div className={classes.back}>
            <div className={classes.back_content}>
              <h2>VITAMINS</h2>
              <p>
                Vitamins and minerals, also known as Micro nutrients, are
                crucial for a variety of activities in the body such as turning
                food into energy and keeping bones healthy. They also may affect
                how well the body performs. some vitamin good for training as
                vitamin A and D, B6 and B12, vitamin C and so on.
              </p>
              <Link to="/nutrition">Read more</Link>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.front}>
            <img src={water} alt="" />
          </div>
          <div className={classes.back}>
            <div className={classes.back_content}>
              <h2>WATER</h2>
              <p>
                As sweat evaporates from your skin, it removes heat from the
                body, but you also lose body fluid. So, you need to drink fluid
                during exercise to replace the fluids you lose when you sweat.
                That way, you'll reduce the risk of heat stress,maintain normal
                body function, and maintain performance levels.
              </p>
              <Link to="/nutrition">Read more</Link>
            </div>
          </div>
        </div>

        <div className={classes.card}>
          <div className={classes.front}>
            <img src={sleep} alt="" />
          </div>
          <div className={classes.back}>
            <div className={classes.back_content}>
              <h2>SLEEP</h2>
              <p>
                Sleeping for 7-9 hours per night is crucial, especially if you
                are looking to change body composition, increase muscle mass
                and/or if you want to be ready for your personal training
                session the next day. Sleep enhances muscle recovery through
                protein synthesis and human growth hormone release
              </p>
              <Link to="/nutrition">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return <>{body}</>;
};

export default HomeNutrition;
