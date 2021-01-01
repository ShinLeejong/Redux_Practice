import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const detail = ({toDo}) => {
    console.log(toDo);
    return (
        <>
            <center>
                <h1>
                    {toDo?.text}
                </h1>
                <h4>
                    id is {toDo?.id}
                </h4>
                <h2>
                <Link to="">
                    <span>Go back</span>
                </Link>
                </h2>   
            </center>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {

    console.log(ownProps);
    const { match: { params: { id }}} = ownProps;

    return {toDo: state.find(toDo => toDo.id === parseInt(id))};
};

export default connect(mapStateToProps)(detail);