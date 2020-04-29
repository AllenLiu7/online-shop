import React from "react";
import { connect } from "react-redux";
import "./collection-page.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop-items/shop-item.selectors";

function CollectionPage({ collection }) {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="collections">
        {items.map((item) => (
          <CollectionItem
            className="collections-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
