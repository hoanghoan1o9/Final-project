import classes from "./MainNutritionBody.module.css";

const MainNutritionBody = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.column}>
        <h2 className={classes.section_heading}>
          CHOOSE
          <em> NUTRITION</em>
        </h2>
        <p>
          Along with the training process, the need to have a reasonable diet is
          an extremely important and inseparable factor. It is this factor that
          will help the practitioner have a good health, quickly absorb the
          exercises, keep fit and prevent the bad effects of the environment and
          disease.
        </p>
      </div>
    <div className={classes.wrapper_card}>

      <div className={classes.card}>
      <div className={classes.front}>
        <img src="/images/protein.jpg" alt=""/>
      </div>
      <div className={classes.back}>
        <div className={classes.back_content}>
          <h2>PROTEIN</h2>
          <p>Along with the training process, the need to have a reasonable diet is
          an extremely important and inseparable factor. It is this factor that
          will help the practitioner have a good health, quickly absorb the
          exercises, keep fit and prevent the bad effects of the environment and
          disease.</p>
        </div>
      </div>
    </div>

    <div className={classes.card}>
      <div className={classes.front}>
        <img src="/images/carbohydrate.jpg" alt=""/>
      </div>
      <div className={classes.back}>
        <div className={classes.back_content}>
          <h2>CARBOHYDRATE</h2>
          <p>Along with the training process, the need to have a reasonable diet is
          an extremely important and inseparable factor. It is this factor that
          will help the practitioner have a good health, quickly absorb the
          exercises, keep fit and prevent the bad effects of the environment and
          disease.</p>
        </div>
      </div>
    </div>

    <div className={classes.card}>
      <div className={classes.front}>
        <img src="/images/oil.jpg" alt=""/>
      </div>
      <div className={classes.back}>
        <div className={classes.back_content}>
          <h2>FAT</h2>
          <p>Along with the training process, the need to have a reasonable diet is
          an extremely important and inseparable factor. It is this factor that
          will help the practitioner have a good health, quickly absorb the
          exercises, keep fit and prevent the bad effects of the environment and
          disease.</p>
        </div>
      </div>
    </div>

    <div className={classes.card}>
      <div className={classes.front}>
        <img src="/images/mineral.jpg" alt=""/>
      </div>
      <div className={classes.back}>
        <div className={classes.back_content}>
          <h2>MINERAL</h2>
          <p>Along with the training process, the need to have a reasonable diet is
          an extremely important and inseparable factor. It is this factor that
          will help the practitioner have a good health, quickly absorb the
          exercises, keep fit and prevent the bad effects of the environment and
          disease.</p>
        </div>
      </div>
    </div>

    <div className={classes.card}>
      <div className={classes.front}>
        <img src="/images/water.jpg" alt=""/>
      </div>
      <div className={classes.back}>
        <div className={classes.back_content}>
          <h2>WATER</h2>
          <p>Along with the training process, the need to have a reasonable diet is
          an extremely important and inseparable factor. It is this factor that
          will help the practitioner have a good health, quickly absorb the
          exercises, keep fit and prevent the bad effects of the environment and
          disease.</p>
        </div>
      </div>
    </div>

    <div className={classes.card}>
      <div className={classes.front}>
        <img src="/images/sleep.jpg" alt=""/>
      </div>
      <div className={classes.back}>
        <div className={classes.back_content}>
          <h2>SLEEP</h2>
          <p>Along with the training process, the need to have a reasonable diet is
          an extremely important and inseparable factor. It is this factor that
          will help the practitioner have a good health, quickly absorb the
          exercises, keep fit and prevent the bad effects of the environment and
          disease.</p>
        </div>
      </div>
    </div>
      

    </div>
    </section>
  );
};

export default MainNutritionBody;
