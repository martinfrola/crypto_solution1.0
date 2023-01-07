const FILTER_DATA = "FILTER_DATA";
const API_RESPONSE = "API_RESPONSE";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case FILTER_DATA:
      console.log("estas en el filter data", payload);
      return;

    case API_RESPONSE:
      return { ...state, apiResponseData: payload };
  }
}
