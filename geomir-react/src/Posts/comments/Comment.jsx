import React from 'react';
import { UserContext } from "../../userContext";
import { useContext } from "react";
import TimeAgo from 'react-timeago';
import spanishStrings from 'react-timeago/lib/language-strings/es';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

export const Comment = ({comment, deleteComment}) => {   
    const formatter = buildFormatter(spanishStrings); 
    let { authToken, setAuthToken, usuari, setUsuari } = useContext(UserContext);
    return(
        <>

        <div>
            <div>
                <h5>{comment.user.name}</h5>
                <span><TimeAgo date={comment.created_at} formatter={formatter} /></span>
                {usuari == comment.user.email &&
                    <button onClick={(e) => {deleteComment(e, comment.id);}} title="delete" type="submit"><i className="bi bi-trash3"></i></button>
                }
            </div>
            <div>
                {comment.comment}
            </div>
            <br></br>
        </div>

        </>
    )
}

export default Comment