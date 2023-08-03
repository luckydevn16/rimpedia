import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cards.module.scss';


const CardDetails = () => {
    let { id } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, location, origin, gender, species, status, type} = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        (async function() {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })()
    }, [api])

  return (
    <div className='container d-flex justify-content-center'>
        <div className="d-flex flex-column gap-2">
            <h2 className="text-center">{name}</h2>
            <img src={image} alt="Character" className="img-fluid" />
            {(() => {
                if (status === "Alive") {
                    return (
                        <div className="badge bg-success fs-5">{status}</div>
                    )
                } else if (status === "Dead") {
                    return (
                        <div className="badge bg-danger fs-5">{status}</div>
                    )
                } else if (status === "Unknown") {
                    return (
                        <div className="badge bg-secondary fs-5">{status}</div>
                    )
                }
            }) ()}
            <div className="content">
                <div className="">
                    <span className="fw-bold">Gender: </span> {gender}
                </div>
                <div className="">
                    <span className="fw-bold">Species: </span> {species}
                </div>
                <div className="">
                    <span className="fw-bold">Location: </span> {location?.name}
                </div>
                <div className="">
                    <span className="fw-bold">Type: </span> {type === "" ? "Unknown" : type}
                </div>
                <div className="">
                    <span className="fw-bold">Origin: </span> {origin?.name}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardDetails;