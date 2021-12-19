import propTypes from 'prop-types';

export default function Painting(props) {
  const { url, title = 'Picture Title', price, authorName, quantity } = props;
  return (
    <div>
      <img src={url} alt="" width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href="">{authorName}</a>
      </p>
      <p>Цена: {price}кредитов</p>
      <p>Доступность: {quantity} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  authorName: propTypes.string.isRequired,
  quantity: propTypes.string.isRequired,
};
