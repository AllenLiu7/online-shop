import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop-items/shop-item.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop-items/shop-item.selectors";

import CollectionPage from "../collection-page/collection-page.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match, selectIsCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            //...props are history objects
            <CollectionsOverviewWithSpinner
              //if is Loading is true, which means selectIsCollectionLoaded is false, which means the collections is null.
              //here we do not use the isFetching value, because it has to be false initially. So that the loading page will not render.
              isLoading={!selectIsCollectionsLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = (state) => ({
  isFetching: selectIsCollectionFetching(state),
  selectIsCollectionsLoaded: selectIsCollectionsLoaded(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
