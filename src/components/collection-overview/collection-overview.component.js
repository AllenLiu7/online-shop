import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop-items/shop-item.selectors";

function CollectionOverview({ shop_items }) {
  return (
    <div className="overview">
      {shop_items.map(({ id, ...othercollectionprops }) => (
        //...other equals to title={title} item={items} same key value names
        <CollectionPreview key={id} {...othercollectionprops} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shop_items: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionOverview);
