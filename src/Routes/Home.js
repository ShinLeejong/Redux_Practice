import React, {useState} from 'react';
import {connect} from 'react-redux';
import Todo from '../Components/Todo';
import {add} from '../Store';

function Home({toDos, addTodo}) {
    
    // constant tag variable declearation
    const ul = document.querySelector("ul");
    const input = document.querySelector("input");
    //

    const [text, setText] = useState("");
    
    const onChange = e => {
        setText(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        if(!text) return;
        addTodo(text);
        setText('');
        input.value = '';
    };

    return (
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Write to do" onChange={onChange}></input>
                <button>Add</button>  
            </form>
            <ul>{toDos.map(toDo => (<Todo {...toDo} key={toDo.id}/>))}</ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return {toDos: state, id: state.id};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: text => dispatch(add(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);