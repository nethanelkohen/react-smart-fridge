import React from 'react';
import './Items.css';
import PropTypes from 'prop-types';

function handleDelete(props, itemId) {
  console.log('Deleting item!');
  props.deleteItem(itemId);
}

function getExpirationStatus(date) {
  var now = new Date();
  var expiryDate = new Date(date);

  return expiryDate > now ? '' : 'is-expired';
}

const Items = (props) => (
  <div className="items">
    <h1>Items</h1>
    {
      props.items.length > 0 ?
        <ul>
          {props.items.map(item => (
            <li
              key={item.id}
              className={getExpirationStatus(item.expires)}
            >
              {item.name}
              <button onClick={() => handleDelete(props, item.id)}>delete</button>
            </li>
          ))}
        </ul> :
        <p>
          Your fridge is empty. Please add some items!
        </p>
    }
  </div>
);

const propTypes = {
	items: PropTypes.array.isRequired
};

Items.propTypes = propTypes;

export default Items;
