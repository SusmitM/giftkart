import { useState } from "react";

import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useDataContext } from "../../context/data/dataContext";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { BsSearch, BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import "./Search.css";

export const Search = () => {
  const { productsData } = useDataContext();
  const [searchData, setSearchData] = useState("");
  const searchFilteredData = () => {
    if (searchData === "") {
      return productsData;
    } else {
      return productsData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchData.toLowerCase()) ||
          item.product.toLowerCase().includes(searchData.toLowerCase())
      );
    }
  };
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () => {
    setSearchData("");
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    toast.success("Started Listening...", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setSearchData(transcript);
    toast.success("Stopped Listening...", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="search-page-container">
        <div className="search-container">
          <div className="searchBar">
            <BsSearch />
            <input
              type="text"
              name="searchBar"
              placeholder="Enter the name or type of Product"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "25px",
            }}
            onClick={() => startListening()}
          >
            <BsFillMicFill />
          </span>
          <span
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              stopListening();
            }}
          >
            <BsFillMicMuteFill />
          </span>
        </div>
        <div className="product-display-container">
          <ul className="product-list">
            {searchFilteredData().map((product) => {
              return <ProductCard key={product._id} productData={product} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
