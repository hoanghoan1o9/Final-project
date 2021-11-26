import { memo } from "react";
import { Link } from "react-router-dom";
import classes from "./HomeNutrition.module.css";

import { listData } from "./data";

const HomeNutrition = () => {
  return (
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
        {listData.map((item) => (
          <div key={item.Id} className={classes.card}>
            <div className={classes.front}>
              <img src={item.pic} alt="" />
            </div>
            <div className={classes.back}>
              <div className={classes.back_content}>
                <h2>{item.name}</h2>
                <p>{item.content}</p>
                <Link to="/nutrition">Read more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(HomeNutrition);
