import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few eays steps.
      </h2>
      <p className={`${styles.paragraph} max-[470px] mt-5`}>
        Content should be based on topics that existing and potential customers
        would be interested in. This educates them about the importance of a
        subject, and your services can be tied in as the solution.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
