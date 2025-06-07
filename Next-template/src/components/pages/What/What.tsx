import Image from 'next/image';
import s from './What.module.scss';

export const What = () => {
  return (
    <section className={s.what}>
      <div className='container'>
        <div className={s.row}>
          <div className={s.image}>
            {/* та же ошибка, что и в Hi.tsx */}
            <Image src='/img/image_2.jpg' alt='Flexbox' width={430} height={300} />
          </div>
          <div className={s.body}>
            <h2 className={`${s.title} title`}>Что такое FlexBox?</h2>
            <div className={s.text}>
              {/* каждому элементу, если он будет стилизоваться, мы должны задавать класс, и указывать стили явно */}
              <p>
                Flexbox — это целый модуль, содержащий в себе набор свойств и их значений как для родителя
                flex-контейнера, так и для его дочерних элементов flex-элементов.
              </p>
              <p>
                Основным преимуществом гибкой FLEX разметки является возможность изменять ширину/высоту, пространство
                вокруг и порядок flex-элементов для наилучшего заполнения доступного пространства flex-контейнера.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
