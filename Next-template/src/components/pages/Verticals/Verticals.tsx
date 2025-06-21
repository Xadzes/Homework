import s from "./Verticals.module.scss";

export const Verticals = () => {
  return (
    <section className={s.verticals}>
      <div className="container">
        <div className={s.verticals__title}>Вертикальное выравнивание</div>
        <div className={s.verticals__body}>
          <div className={s.verticals__row}>
            {/* 1 */}
            <div className={s.verticals__column}>
              <div className={s.verticals__item}>
                <div className={s.verticals__subtitle}>буду рад</div>
                <div className={s.verticals__label}>подписке</div>
                <div className={s.verticals__text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur fugit vel, eligendi illum, placeat quo vero reiciendis consectetur.
                </div>
                <a href="#" className={s.verticals__btn}>подписаться</a>
              </div>
            </div>

            {/* 2 */}
            <div className={s.verticals__column}>
              <div className={s.verticals__item}>
                <div className={s.verticals__subtitle}>буду рад</div>
                <div className={s.verticals__label}>лайку</div>
                <div className={s.verticals__text}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur fugit vel, eligendi illum, placeat quo vero reiciendis consectetur voluptatibus atque et itaque, hic, deleniti. Sunt commodi tempora voluptatum dolorum.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur fugit vel, eligendi illum, placeat quo vero reiciendis consectetur tempora voluptatum dolorum.</p>
                </div>
                <a href="#" className={s.verticals__btn}>лайк</a>
              </div>
            </div>

            {/* 3 */}
            <div className={s.verticals__column}>
              <div className={s.verticals__item}>
                <div className={s.verticals__subtitle}>буду рад</div>
                <div className={s.verticals__label}>комментарию</div>
                <div className={s.verticals__text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </div>
                <a href="#" className={s.verticals__btn}>комментировать</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};