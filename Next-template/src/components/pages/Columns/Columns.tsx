import s from './Columns.module.scss';
import Image from 'next/image';

export const Columns = () => {
  return (
    <section className={s.columns}>
      <div className="container">
        <h2 className={`${s.columns__title} title`}>Колонки с flex-контейнерами</h2>
        <div className={s.columns__row}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={s.columns__column}>
              <div className={`${s.columns__item} ${s.item}`}>
                <div className={s.item__row}>
                  <div className={s.item__image}>
                    <Image src="/img/image_3.jpg" alt="img" width={200} height={190} />
                  </div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>The description for the image</div>
                    <div className={s.item__text}>
                      Pariatur iure ab sunt nesciunt, quibusdam odio iste cumque itaque, ipsa vel
                      exercitationem ullam quos aut nostrum cupiditate fuga quaerat quam animi
                      dolores. Sequi itaque, unde perferendis nemo debitis dolor.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};