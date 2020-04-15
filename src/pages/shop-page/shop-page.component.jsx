import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection-page/collection-page.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

function ShopPage({ match }) {
  return (
    <div>
      <Route exact path={`${match.url}`} component={CollectionOverview} />
      <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
