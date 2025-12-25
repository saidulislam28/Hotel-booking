export const LOGIN = "auth/login";
export const getUrlForModel = (model: string, id: any = null) => {
  if (id) {
    return `crud/${id}?model=${model}`;
  }
  return `crud?model=${model}`;
};

export const API_FIND_WHERE = "crud/find-where";

export const CREATE_ROOM = "admin/room";
