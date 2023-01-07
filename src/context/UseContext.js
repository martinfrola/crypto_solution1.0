import { useReducer } from "react";
import CryptoContext from "./Context";
import Reducer from "./Reducer";
import axios from "axios";

export default function UseContext(props) {
  const { children } = props;

  const initialState = {
    filterData: [],
    apiResponseData: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getApiData = async () => {
    const res = await axios({
      method: "get",
      url: "https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins",
      headers: {
        "x-access-token":
          "coinranking866334bdedd99aba7096e14290007a8bacee13afb4bd4c0f",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((response) => {
      dispatch({ type: "API_RESPONSE", payload: response.data.data.coins });
    });
  };
  const getFilterData = () => {};

  return (
    <CryptoContext.Provider
      value={{
        getApiData,
        getFilterData,
        filterData: state.filterData,
        apiResponseData: state.apiResponseData,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
}
