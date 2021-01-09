import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from "axios";

function Goods(props) {
    const url = `https://localhost:5001/api/products`
    let [goods, setGoods] = useState([])

    const removeGood = (id) => {
        axios.delete(`${url}/${id}`)
        loadGoods()
    }

    useEffect(() => loadGoods(), [])

    const loadGoods = async () => {
        const res = await axios.get(url);
        setGoods(res.data);
    };

    return (
        <div>
                <div className="margin_table">
                    <table className="table table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th className="text-center">ProductId</th>
                                <th className="text-center">ProductName</th>
                                <th className="text-center">ProductCount</th>
                                <th className="text-center">CategoryId</th>
                                <th className="text-center">CategoryName</th>
                                <th className="text-center" colspan="2">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {goods.map(x => 
                            <tr>
                                <td>{x.productId}</td>
                                <td>{x.productName}</td>
                                <td>{x.productCount}</td>
                                <td>{x.category.categoryId}</td>
                                <td>{x.category.categoryName}</td>
                                <td>
                                    <Button variant="outline-danger" onClick={() => removeGood(x.productId)}>
                                        Remove
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="outline-primary" >
                                        <Link to={{pathname: `editgood/${x.productId}`}}>Edit</Link>
                                    </Button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>

                    <Button variant="outline-success" className="w-100">
                        <Link to={{pathname: `editgood/0`}}>Add new good</Link>
                    </Button>
                </div>           
        </div>
    )
}

export default Goods