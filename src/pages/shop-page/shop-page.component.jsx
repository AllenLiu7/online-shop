import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPage from "../collection-page/collection-page.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { addDataToReducer } from "../../redux/shop-items/shop-item.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentWillMount() {
    const { addDataToReducer } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (collectionsSnapshot) => {
      const data = convertCollectionsSnapshotToMap(collectionsSnapshot);
      console.log(data);
      addDataToReducer(data);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDataToReducer: (data) => dispatch(addDataToReducer(data)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
