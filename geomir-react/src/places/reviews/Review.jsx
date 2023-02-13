import React from 'react';
import { UserContext } from "../../userContext";
import { useContext } from "react";
import TimeAgo from 'react-timeago';
import spanishStrings from 'react-timeago/lib/language-strings/es';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

export const Review = ({review, deleteReview}) => {   
    const formatter = buildFormatter(spanishStrings); 
    let { authToken, setAuthToken, usuari, setUsuari } = useContext(UserContext);
    return(
        <>

        <div>
            <div>
                <h5>{review.user.name}</h5>
                <span><TimeAgo date={review.created_at} formatter={formatter} /></span>
                {usuari == review.user.email &&
                    <button onClick={(e) => {deleteReview(e, review.id);}} title="delete" type="submit"><i className="bi bi-trash3"></i></button>
                }
            </div>
            <div>
                {review.review}
            </div>
            <br></br>
        </div>

        </>
    )
}

export default Review