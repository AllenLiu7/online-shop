import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addToCart } from "../../redux/cart/cart.actions";

function CollectionItem({ item, addToCart }) {
  const { id, name, imageUrl, price } = item;

  return (
    <div className="collection-item" key={id}>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addToCart(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
