import React, { useState } from "react";
import "../styles/resource.css"
const Resource = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleSubtract = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 0 : value);
  };

  return (
    <div className="signup">
      <h4>Resource Information</h4>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter resource name"
            required
            className="input-field"
          />
          <br />
        </div>
 


        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <div className="quantity-control">
            <button
              type="button"
              onClick={handleSubtract}
              className="subtract-button"
            >
              -
            </button>
            <input
              type="text"
              name="quantityNumber"
              value={quantity}
              onChange={handleInputChange}
              className="quantity-input"
            />
            <button
              type="button"
              onClick={handleAdd}
              className="add-button"
            >
              +
            </button>
          </div>
          
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Enter resource description"
            required
            className="textarea-field"
          />
        </div>

        <input
          type="submit"
          value="Submit"
          className="submit-button"
        />
        
      </form>
    </div>
  );
};

export default Resource;
