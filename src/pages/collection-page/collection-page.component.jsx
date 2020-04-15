import React from "react";
import { connect } from "react-redux";
import "./collection-page.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop-items/shop-item.selectors";

function CollectionPage({ collection }) {
  const { items } = collection;
  return (
    <div className="collections">
      {items.map((item) => (
        <CollectionItem className="collections-item" item={item} />
      ))}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
