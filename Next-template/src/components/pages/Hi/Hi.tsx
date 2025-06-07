import s from './Hi.module.scss';
import Image from 'next/image';

const list = ['Надеюсь всё получится', 'Надо отучится нормально', 'А не пенсил трогать', 'Учись епты']; // выяснить почему массив находится за пределами компонента, а не в самом компоненте

export const Hi = () => {
  return (
    <section className={s.hi}>
      {/* класс container берется не из объекта s, а из глобального css, все стили должны быть изолированы*/}
      <div className='container'>
        <div className={s.row}>
          <div className={s.text}>
            <h1 className={s.title}>Привет, брух!</h1>
            <ul className={s.list}>
              {/* <li>Надеюсь всё получится</li>
              <li>Надо отучится нормально</li>
              <li>А не пенсил трогать</li>
              <li>Учись епты</li> */}
              {/* все списки выносим в массив, из которого рендерим повторяющиеся компоненты */}

              {list.map((item, index) => (
                <li key={index}>{item}</li> // прочитать про key в React, зачем он нужен и какое значение ему передавать
              ))}
            </ul>
          </div>
          <div className={s.image__wrapper}>
            {/* <img src='/img/image.png' alt='whoops!' width={400} height={400} className={s.image} /> */}

            {/* нужно использовать next/image с параметром fill, чтобы использовать обертку-родитель, куда уже через стили прописываем размеры */}
            <Image src='/img/image.png' alt='whoops!' fill className={s.image} />
          </div>
        </div>
      </div>
    </section>
  );
};
