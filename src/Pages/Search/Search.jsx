import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useDataContext } from "../../context/data/dataContext";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { BsSearch, BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import "./Search.css";

export const Search = () => {
  const [isListening, setIsListening] = useState(false);
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
    SpeechRecognition.startListening();
    setIsListening((prev) => !prev);
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
    setIsListening((prev) => !prev);

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
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
              color: "green",
              cursor:"pointer"
            }}
            onClick={() => startListening()}
          >
            <span style={{ display: isListening ? "none" : "" }}>
              {" "}
              Start Listening
              <BsFillMicFill />
            </span>
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
              color: "red",
              cursor:"pointer"
            }}
            onClick={() => {
              stopListening();
            }}
          >
            <span style={{ display: isListening ? "" : "none" }}>
              Stop Listening
              <BsFillMicMuteFill />
            </span>
          </p>
        </div>
        <div className="product-display-container">
          <ul className="product-list">
            { searchFilteredData().length>0 && searchFilteredData().map((product) => {
              return <ProductCard key={product._id} productData={product} />;
            })}
          </ul>
          { !searchFilteredData().length>0 && <div>No Products Found...</div>}
        </div>
      </div>
    </>
  );
};
