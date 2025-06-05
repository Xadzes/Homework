import s from './Hi.module.scss';
import Image from 'next/image';

export const Hi = () => {
  return (
    <section className={s.hi}>
      <div className='container'>
        <div className={s.row}>
          <div className={s.text}>
            <h1 className={s.title}>Привет, брух!</h1>
            <ul className={s.list}>
              <li>Надеюсь всё получится</li>
              <li>Надо отучится нормально</li>
              <li>А не пенсил трогать</li>
              <li>Учись епты</li>
            </ul>
          </div>
          <div className={s.imageWrapper}>
            <img src='/img/image.png' alt='whoops!' width={400} height={400} className={s.image} />
          </div>
        </div>
      </div>
    </section>
  );
};
