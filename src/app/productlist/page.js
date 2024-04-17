"use client"
import { useEffect, useState } from "react"
export default function page() {

    // useEffect(async () => {
    //     const [product, setProduct] = useState([])
    //     let data = await fetch("https://dummyjson.com/products");
    //     data = await data.json();
    //     console.log(data);
    //     setProduct(data.products)
    // }, [])

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data.products);
                setProduct(data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap"
            }}>
                {product.map((val, index) => (
                    <>
                        <div
                            key={index}
                            style={{
                                border: "1px solid black",
                                marginBottom: "10px",
                                borderRadius: "10px",
                                padding: "10px",
                                width: "fit-content",
                            }}
                        >
                            <h4>Title : {val.title}</h4>
                            <h4>Price : {val.price}</h4>
                            <h4>Image :</h4>
                            <img style={{
                                width: "100%",
                                borderRadius: "10px" 
                            }} src={val.images[0]} />
                        </div>

                    </>
                ))}
            </div>
        </div>
    )
}