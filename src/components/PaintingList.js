import propTypes from 'prop-types';
import Painting from './Painting';
const PaintingList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Painting
              url={item.url}
              title={item.title}
              authorName={item.author.tag}
              price={item.price}
              quantity={item.quantity < 10 ? 'заканчивается' : 'есть в наличии'}
            />
          </li>
        );
      })}
    </ul>
  );
};
PaintingList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
};

export default PaintingList;
