import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useState } from "react";
import Greeting from './Greeting';
import ToggleBlock from './ToggleBlock';
import UserStatus from './UserStatus';
import Comments from './Comments';
import AdminPanel from './AdminPanel';
import StockStatus from './StockStatus';
import Warning from './Warning';
import ThemeSwitcher from './ThemeSwitcher';
import SubscribeButton from './SubscribeButton';
import MoreDetails from './MoreDetails';
import ProductList from './ProductList';


function App() {
  const [show, setShow]=useState(false);
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <h2>Лабораторная работа №6.</h2>
      <p>1. Создайте компонент, который отображает "Добро пожаловать" для авторизованных пользователей и "Пожалуйста, войдите" для неавторизованных(то есть у нас должна быть переменная со значением авторизован или нет).</p>
      <Greeting isLoggedIn={true} />
      <p>2. Реализуйте переключение видимости блока при нажатии на кнопку. Блок должен показываться и скрываться, при каждом нажатии.</p>
      <ToggleBlock />
      <p>3. Используйте тернарный оператор для вывода статуса пользователя (онлайн/офлайн)(тоже должна быть переменная которая хранит данную информацию).</p>
      <UserStatus isOnline={false} />
      <p>4. Реализуйте компонент, который отображает кнопку "Показать комментарии" и, при нажатии, показывает блок с текстом комментария.</p>
      <Comments />
      <p>5. Сделайте компонент, в котором только администратор видит кнопку управления(должна быть переменная в которой хранится админ или нет).</p>
      <AdminPanel isAdmin={true} />
      <p>6. Создайте компонент, который отображает одно из двух сообщений, в зависимости от значения переменной (например, "На складе" или "Нет в наличии").</p>
      <StockStatus isInStock={false} />
      <p>7. Реализуйте компонент, который показывает уведомление, если переменная isWarning установлена в true.</p>
      <Warning isWarning={true} />
      <p>8. Сделайте компонент, который по переменной isDarkMode отображает стили для светлого и тёмного режима.</p>
      <ThemeSwitcher isDarkMode={true} />
      <p>9. Напишите компонент, где по нажатию на кнопку меняется текст с “Подписаться” на “Отписаться”.</p>
      <SubscribeButton />
      <p>10. Реализуйте компонент, в котором при клике на кнопку «Подробнее» раскрывается текст с описанием.</p>
      <MoreDetails />
      <h2>Индивидуальное задание:</h2>
      <p>3. Создать небольшую страничку со списком товаров, должна быть кнопка(премиум), по нажатии на которой меняются цены товаров.</p>
      <ProductList />
      <Footer />

    </div>
  );
}

export default App;
