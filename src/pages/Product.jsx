import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'



export default function Product() {

    const { id } = useParams()
    const [productInfo, setProductInfo] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res =>
                setProductInfo(res.data)
            )
    }, [])

    return (
        <>
            <div className="container">
                <h1 className="py-3">{productInfo.title}</h1>
                <div className="row mt-3">
                    <div className="col col-12 col-md-7 text-center">
                        <img src={productInfo.image} alt={productInfo.title} className="w-100" /> {/*capire come mettere tutte le immagini nel modo giusto*/}
                    </div>

                    <div className="col col-12 col-md-5">
                        <div>{productInfo.category}</div>
                        <span>{productInfo.rating?.rate}</span>
                        <span>{productInfo.rating?.count}</span>
                        <p>{productInfo.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}