import './List.css';
import {useEffect, useState} from "react";
import axios from 'axios';

function changeColor(e) {
  e.target.closest('div').classList.toggle('active');
}

function showPreloader() {
  const preloader = document.querySelector('.preloader');
  preloader.style.setProperty('display', 'block');
  setTimeout(() => {
    preloader.style.setProperty('opacity', '1');
  }, 300);
}

function hidePreloader() {
  const preloader = document.querySelector('.preloader');
  preloader.style.setProperty('opacity', '0');
  setTimeout(() => {
    preloader.style.setProperty('display', 'none');
  }, 300);
}

export default function List({category}) {
  const [data, setData] = useState(null);
  const [cat, setCat] = useState(category);

  async function getData() {
    await axios.get('https://dummyjson.com/products/' + cat).then((res) => {
      setData(res.data.products);
      hidePreloader();
    });
  }

  useEffect(() => {
    showPreloader();
    getData();
  }, [cat]);

  if (cat !== category) {
    setCat(category);
  }

  return data === null ? (
    ''
  ) : (
    <ul>
      {data.map((el) => {
        return (
          <li key={el.id}>
            <div className="img-container">
              <img src={el.images[0]} alt="Product image"/>
            </div>
            <div className="actions">
              <div onClick={changeColor} className="heart">
                <svg
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5509 6.34085L18 7.25878L18.4491 6.34085C20.1575 2.84926 22.8629 0.5 26.4375 0.5C29.0177 0.5 31.2729 1.81428 32.8978 3.88948C34.5251 5.9677 35.5 8.78884 35.5 11.7241C35.5 18.0073 31.146 23.4486 26.6706 27.3685C24.445 29.3178 22.2171 30.8666 20.5445 31.9282C19.7088 32.4587 19.013 32.8668 18.5272 33.1417C18.3014 33.2695 18.1211 33.3684 17.9933 33.4374C17.8659 33.3724 17.6868 33.2795 17.4631 33.1593C16.9779 32.8988 16.2826 32.5105 15.4475 32.0021C13.7762 30.9845 11.5499 29.4889 9.32609 27.5757C4.85821 23.7319 0.5 18.2901 0.5 11.7241C0.5 8.78834 1.4751 5.96722 3.10244 3.88912C4.72741 1.81405 6.9826 0.5 9.5625 0.5C13.137 0.5 15.8424 2.84904 17.5509 6.34085Z"
                    fill="transparent"
                    stroke="black"
                  />
                </svg>
              </div>
              <div onClick={changeColor} className="scales">
                <svg
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 17.1C32 17 32 17 32 17C32 16.9 32 16.8 32 16.7L28 4.7C28 4.7 28 4.6 27.9 4.6C27.9 4.5 27.8 4.5 27.8 4.4L27.7 4.3C27.6 4.2 27.6 4.2 27.5 4.2C27.5 4.2 27.4 4.2 27.4 4.1C27.2 4 27.1 4 27 4H18.8C18.5 3.2 17.8 2.5 17 2.2V1C17 0.4 16.6 0 16 0C15.4 0 15 0.4 15 1V2.2C14.2 2.5 13.5 3.2 13.2 4H5C4.9 4 4.8 4 4.6 4.1C4.6 4.1 4.5 4.1 4.5 4.2C4.4 4.2 4.4 4.3 4.3 4.3L4.2 4.4C4.2 4.4 4.2 4.5 4.1 4.5C4.1 4.5 4.1 4.6 4 4.6L0 16.6C0 16.7 0 16.8 0 16.9V17V17.1C0.1 19.8 2.3 22 5 22C7.7 22 9.9 19.8 10 17.2V17.1V17C10 16.9 10 16.8 10 16.7L6.4 6H13.2C13.5 6.8 14.2 7.5 15 7.8V20C13.9 20 13 20.9 13 22V26H10.4C9.1 26 8 26.8 7.6 28.1L7.1 29.7C6.9 30 7 30.3 7.2 30.6C7.4 30.8 7.7 31 8 31H24C24.3 31 24.6 30.8 24.8 30.6C25 30.3 25 30 24.9 29.7L24.4 28.1C24 26.8 22.9 26 21.6 26H19V22C19 20.9 18.1 20 17 20V7.8C17.8 7.5 18.5 6.8 18.8 6H25.6L22 16.7C22 16.8 22 16.9 22 17V17.1V17.2C22.1 19.9 24.3 22 27 22C29.7 22 31.9 19.8 32 17.1ZM2.4 16L5 8.2L7.6 16H2.4ZM16 6C15.4 6 15 5.6 15 5C15 4.4 15.4 4 16 4C16.6 4 17 4.4 17 5C17 5.6 16.6 6 16 6ZM27 8.2L29.6 16H24.4L27 8.2Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <p className="product-title">{el.title}</p>
            <p className="price">{el.price} $</p>
            <p className="description">{el.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

