import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = ({results, page}) => {
    let display;

    if (results) {
        display = results.map(x => {
            let {id, name, image, location, status} = x;
            return ( 
            <Link style={{textDecoration:"none"}} to={`${page}${id}`} key={id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 position-relative text-dark">
                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img src={image} alt="" className={`${styles.img} img-fluid`} />
                    <div style={{padding:"10px"}} className="content">
                        <h5 className='name mb-4'>{name}</h5>
                        <div className="location-wrap">
                            <div className="fs-7">Last location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(() => {
                    if (status === "Alive") {
                        return (
                            <div className={`${styles.badge} badge bg-success position-absolute`}>{status}</div>
                        )
                    } else if (status === "Dead") {
                        return (
                            <div className={`${styles.badge} badge bg-danger position-absolute`}>{status}</div>
                        )
                    } else if (status === "Unknown") {
                        return (
                            <div className={`${styles.badge} badge bg-secondary position-absolute`}>{status}</div>
                        )
                    }
                }) ()}
                
            </Link> )
        });
    } else {
        display = "No characters found :/"
    }

  return <>{display}</>;
}

export default Cards