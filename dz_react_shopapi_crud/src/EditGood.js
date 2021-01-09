import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditGood = () => {
  const { id } = useParams();
  const history = useHistory()
  const [good, setGood] = useState({
    productId: 0,
    productName: "",
    productCount: "",
    categoryId: ""
  });

  const [categories, setCategories] = useState([]);

  const { productId, productName, productCount, categoryId } = good;

  const onInputChange = e => {
    setGood({ ...good, [e.target.name]: e.target.value });
  };

  const onSelectChange= e => {
    setGood({ ...good, categoryId: e.target.value });
  };

  useEffect(() => {
    loadGood()
    loadCategories()
  }, []);

  const onSubmit = async e => {
    e.preventDefault()
    if(id != 0){

      axios({
        method: 'put',
        url: `https://localhost:5001/api/products/${id}`,
        data: good,
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
          history.push("/");
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
    }
    else{
      axios({
        method: 'post',
        url: `https://localhost:5001/api/products/`,
        data: good,
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
          history.push("/");
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
    }
  };

  const loadGood = async () => {
    if(id != 0){    
      const result = await axios.get(`https://localhost:5001/api/products`).then(res => res.data.find(x => x.productId == id))
      console.log(result)
      setGood({
                productId: result.productId, 
                productName: result.productName,
                productCount: result.productCount,
                categoryId: result.category.categoryId
              })     
    }
    else{
      console.log("new good")
    }
  };

  const loadCategories = async () => {       
      const result = await axios.get(`https://localhost:5001/api/categories`)
      setCategories(result.data)
      console.log(result.data)
  };
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Info about good</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label
              name="productId"
              value={productId}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter productName"
              name="productName"
              value={productName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter productCount"
              name="productCount"
              value={productCount}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <select className="w-100 py-2" value={categoryId} onChange={e => onSelectChange(e)}>
              {categories.map((option) => (
                <option value={option.categoryId}>{option.categoryName}</option>
              ))}
            </select>
          </div>

          <button className="btn btn-warning btn-block">Accept</button>
        </form>
      </div>
    </div>
  );
};

export default EditGood;