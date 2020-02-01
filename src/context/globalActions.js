export const ACTION_TYPES = {
  UPLOAD_NEW_DOC: 'UPLOAD_NEW_DOC',
  SET_ACTIVE_DOC: 'SET_ACTIVE_DOC'
};

export const uploadNewDocument = file => ({
  type: ACTION_TYPES.UPLOAD_NEW_DOC,
  payload: file
});

export const setActiveDocument = doc => ({
  type: ACTION_TYPES.SET_ACTIVE_DOC,
  payload: doc
});
