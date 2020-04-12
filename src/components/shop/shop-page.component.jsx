import React, { Component } from "react";
import collections from "../../assets/shopitem.data";
import CollectionPreview from "../collection-preview/collection-preview.component";

class ShopPage extends Component {
  state = { collections };

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...othercollectionprops }) => (
          //...other equals to title={title} item={items} same key value names
          <CollectionPreview key={id} {...othercollectionprops} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
