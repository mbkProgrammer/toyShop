import reduxCall from '../utils/reduxCall';
import actionTypes from '../configs/actionTypes';

const GET_PRODUCTS_ACTION = () => async (dispatch) => reduxCall(dispatch, {
  url: 'https://63850b253fa7acb14f086213.mockapi.io/api/v1/Products',
  method: 'GET',
  name: 'GET_PRODUCTS',
});

const GET_SINGLE_PRODUCTS_ACTION = (id) => async (dispatch) => reduxCall(dispatch, {
  url: `https://63850b253fa7acb14f086213.mockapi.io/api/v1/Products/${id}`,
  method: 'GET',
  name: 'GET_PRODUCTS',
});

const ADD_PRODUCTS_ACTION = (body) => async (dispatch) => reduxCall(dispatch, {
  url: 'https://63850b253fa7acb14f086213.mockapi.io/api/v1/Products',
  method: 'POST',
  name: 'ADD_PRODUCTS',
  body,
});

const DELETE_PRODUCTS_ACTION = (id) => async (dispatch) => reduxCall(dispatch, {
  url: `https://63850b253fa7acb14f086213.mockapi.io/api/v1/Products/${id}`,
  method: 'DELETE',
  name: 'DELETE_PRODUCTS',
});

export {
  GET_PRODUCTS_ACTION,
  ADD_PRODUCTS_ACTION,
  DELETE_PRODUCTS_ACTION,
  GET_SINGLE_PRODUCTS_ACTION,
};
