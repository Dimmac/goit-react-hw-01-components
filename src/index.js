// import React from 'react'
import ReactDOM from "react-dom";
import paintings from "./paintings.json";

// const data = paintings[0]

function Painting(props) {
  console.log(props);
  console.log();
  return (
    <div>
      <img src={props.url} alt={props.title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href=""></a>
      </p>
      <p>Цена: кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

const painting = paintings[0];

ReactDOM.render(
  <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUrl={painting.author.url}
  />,
  document.querySelector("#root")
);

// function Painting() {
//   return <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>Автор: <a href={data.author.url}></a>{data.author.tag}</p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// }

// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// }
// const painting = (<div>
//   <img src={data.url} alt={data.title} width="480" />
//   <h2>{data.title}</h2>
//   <p>Автор: <a href={data.author.url}></a>{data.author.tag}</p>
//   <p>Цена: {data.price} кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии</p>
//   <button type="button">Добавить в корзину</button>
// </div>)

// ReactDOM.render(painting, document.querySelector('#root'))
// const element = React.createElement('div', {a:5, b:10, children:['Привет', ' ', ', мир!']})
// console.log(element)

// ReactDOM.render(element, document.querySelector('#root'))
// const elem1 = React.createElement('span', {children: 'Привет'})
// const elem2 = React.createElement('span', {children: ', мир!'})
// const elem1 = <span>Привет</span>
// const elem2 = <span>, мир!</span>

// const element = React.createElement('div', {a:5, b:10, children:[elem1, ' ', elem2]})
// console.log(element)
// const element = React.createElement('div', {a:5, b:10, children:['Привет, мир!']})
// const jsxElement = <div>{elem1}{elem2}</div>
// console.log(jsxElement)

// ReactDOM.render(element, document.querySelector('#root'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
