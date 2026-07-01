import { useState } from "react";
import "./App.css";

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [title, setTitle] = useState("");
  const [center, setCenter] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  const [banlist, setBanlist] = useState([]);
  const [emptyBanlist, setEmptyBanlist] = useState(true);

  const searchTerms = [
    "planet",
    "mercury",
    "venus",
    "earth",
    "mars",
    "asteroid belt",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
    "star",
    "galaxy",
    "cosmo",
    "constellation",
    "mare",
    "sun",
    "black hole",
    "nebula"
  ];

  const discoverImage = async () => {
    const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    console.log(randomTerm);

    const randomPage = Math.floor(Math.random() * 5) + 1;

    let foundImage = false;

    for (let page = randomPage; page >= 1; page--) {
      const query = `https://images-api.nasa.gov/search?q=${randomTerm}&media_type=image&page=${page}`;

      const response = await fetch(query);
      const json = await response.json();
      const items = json.collection.items;

      if (items.length > 0) {
        const randomStart = Math.floor(Math.random() * items.length);

        for (let i = 0; i < items.length; i++) {
          const index = (randomStart + i) % items.length;
          const item = items[index];

          if (item.data && item.links) {
            const itemData = item.data[0];
            const itemImage = item.links[0].href;

            const itemTitle =
              itemData.title === "" ? "Untitled" : itemData.title;

            const itemCenter =
              itemData.center === "" ? "Unknown" : itemData.center;

            const itemKeywords = itemData.keywords ? itemData.keywords : [];

            const itemYear = itemData.date_created
              ? new Date(itemData.date_created).getFullYear().toString()
              : "Unknown";

            const itemDescription = itemData.description
              ? itemData.description
              : "No description available.";

            if (
              !banlist.includes(itemCenter) &&
              !banlist.includes(itemYear) &&
              itemImage !== currentImage
            ) {
              setCurrentImage(itemImage);
              setTitle(itemTitle);
              setCenter(itemCenter);
              setYear(itemYear);
              setDescription(itemDescription);
              setKeywords(itemKeywords);

              foundImage = true;
              break;
            }
          }
        }
      }

      if (foundImage === true) {
        break;
      }
    }

    if (foundImage === false) {
      alert("No image found. Try again or remove something from the ban list.");
    }
  };

  const addToBanlist = (value) => {
    if (!banlist.includes(value)) {
      setBanlist([...banlist, value]);
      setEmptyBanlist(false)
    }
  };

  const removeFromBanlist = (value) => {
    const newBanlist = [];

    for (let i = 0; i < banlist.length; i++) {
      if (banlist[i] !== value) {
        newBanlist.push(banlist[i]);
      }
    }

    setBanlist(newBanlist);
    if (newBanlist.length === 0) {
      setEmptyBanlist(true)
    };
  };

  return (
    <div className="whole-page">
      <h1 className="header">NASA Image Discoverer</h1>

      <button className="button" onClick={discoverImage}>
        Discover
      </button>

      <div className="main-content">
        <div className="image-section">
          {currentImage ? (
            <div>
              <img
                className="nasa-image"
                src={currentImage}
                alt={title}
              />
              <h2 className="image-title">{title}</h2>
              <p className="details">
                <strong>Keywords:</strong>
              </p>

              <div className="keyword-list">
                {keywords.length > 0 ? (
                  keywords.map((keyword, index) => (
                    <button
                      className="keyword attribute"
                      key={index}
                      onClick={() => addToBanlist(keyword)}
                    >
                      {keyword}
                    </button>
                  ))
                ) : (
                  <p>No keywords available.</p>
                )}
              </div>
              <p className="details">
                <strong>NASA Center:</strong>{" "}
                <button
                  className="attribute"
                  onClick={() => addToBanlist(center)}
                >
                  {center}
                </button>
              </p>
              <p className="details">
                <strong>Year:</strong>{" "}
                <button
                  className="attribute"
                  onClick={() => addToBanlist(year)}
                >
                  {year}
                </button>
              </p>
              <p className="description"><strong>Description:</strong> {description}</p>
            </div>
          ) : (
            <p>Click Discover to load an image from NASA's database.</p>
          )}
        </div>
        <div className="ban-list">
          <h2>Ban List</h2>
          <div className={emptyBanlist ? "" : "ban-grid" }>
            {banlist.length > 0 ? (
              banlist.map((value, index) => (
                <button
                  className="ban-item"
                  key={index}
                  onClick={() => removeFromBanlist(value)}
                >
                  {value}
                </button>
              ))
            ) : (
              <p>No banned values yet. Click on a Keyword, NASA Center, or Year to ban it.</p>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;