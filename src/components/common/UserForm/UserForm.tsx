'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import s from './UserForm.module.scss';

type FormData = {
  name: string;
  email: string;
  role: string;
  age: string;
};

const roles = ['Писатель', 'Художник', 'Разработчик', 'Аналитик'];

export default function UserForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    role: '',
    age: '',
  });
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick() {
    setForm({
      name: 'Lorem...',
      email: 'Lorem@gmail.com',
      role: roles[0],
      age: '33',
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const msg = `Проверьте введённые данные:
  
    Имя: ${form.name}
    E-mail: ${form.email}
    Возраст: ${form.age}
    Роль: ${form.role}

    Всё правильно?`;

    if (window.confirm(msg)) {
      alert('Спасибо! Форма отправлена.');
      setForm({
        name: '',
        email: '',
        role: '',
        age: '',
      });
    }
  }

  return (
    <div className={s.Wrapper}>
      <div className={s.Content}>
        <form className={s.Form} onSubmit={handleSubmit}>
          <div className={s.Title}>Регистрация пользователя</div>
          <div className={s.Field}>
            <label className={s.Label}>Имя:</label>
            <input
              className={s.Input}
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Введите имя'
              required
            />
          </div>
          <div className={s.Field}>
            <label className={s.Label}>E-mail:</label>
            <input
              className={s.Input}
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Введите почту'
              required
            />
          </div>
          <div className={s.Field}>
            <label className={s.Label}>Возраст:</label>
            <input
              className={s.Input}
              type='number'
              name='age'
              value={form.age}
              onChange={handleChange}
              placeholder='Введите возраст'
              required
            />
          </div>
          <div className={s.Field}>
            <label className={s.Label}>Роль:</label>
            <select className={s.select} name='role' value={form.role} onChange={handleChange} required>
              <option value='' disabled hidden>
                Выберите роль
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <button className={s.Button} type='submit'>
            Отправить
          </button>
          <button className={s.Button} onClick={handleClick}>
            Тестовые данные
          </button>
        </form>
      </div>
    </div>
  );
}
