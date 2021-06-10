import { shopItemActionTypes } from './shop-item.types';

export const fetchCollectionsStart = () => ({
  type: shopItemActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (data) => ({
  type: shopItemActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: data,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopItemActionTypes.fetchCollection,
  payload: errorMessage,
});

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const data = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(data));
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
