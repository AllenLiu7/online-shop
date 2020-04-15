import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectItems } from "../../redux/shop-items/shop-item.selectors";

function ShopPage({ shop_items }) {
  return (
    <div className="shop-page">
      {shop_items.map(({ id, ...othercollectionprops }) => (
        //...other equals to title={title} item={items} same key value names
        <CollectionPreview key={id} {...othercollectionprops} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shop_items: selectItems(state),
});

export default connect(mapStateToProps)(ShopPage);
