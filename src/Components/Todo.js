import React from 'react';
import {connect} from 'react-redux';
import {remove} from '../Store';
import {Link} from 'react-router-dom';

const Todo = ({text, onBtnClick, id}) => {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={onBtnClick}>Delete</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onBtnClick: () => dispatch(remove(ownProps.id))
    };
};

export default connect(null, mapDispatchToProps)(Todo);