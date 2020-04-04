import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otheritemprops }) => (
            <CollectionItem id={id} {...otheritemprops} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
