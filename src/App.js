import React, { useEffect, useState, useReducer } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [count, setCount] = useState(0);
  const [customCount, setCustomCount] = useState(0);
  console.log(errors);

  const initialState = {count: 0};

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    setCustomCount(count);
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>

      <div>
        <p>You clicked {count} times</p>
        <p>You clicked {customCount} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div class="container">
      <form onSubmit={handleSubmit(onSubmit)}>

      <div class="form-group">
        <label for="email">First name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="Firstname"
          ref={register({ required: true, maxLength: 80 })}
        />
        <span className="text-danger">{errors.Firstname?.type === "required" && "Your input is required"}
        {errors.Firstname?.type === "maxLength" &&
          "Your input exceed maxLength"}</span>
        
      </div>

      <div class="form-group">
        <label for="email">Last name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="LastName"
          ref={register({ required: true, maxLength: 100 })}
        />
        <span className="text-danger">
        {errors.LastName?.type === "required" && "Your input is required"}
        {errors.LastName?.type === "maxLength" && "Your input exceed maxLength"}</span>
      </div>


      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        /><span className="text-danger">
        {errors.Email?.type === "required" && "Your input is required"}
        {errors.Email?.type === "pattern" && "Your email is invalid"}</span>
      </div>

      <div class="form-group">
        <label for="email">Mobile number:</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Mobile number"
          name="Mobile number"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
      </div>
       
       
      <div class="form-group">
        <label for="email">Mobile number:</label>
        <select className="form-control"  name="Title" ref={register({ required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        <span className="text-danger"> {errors.Title?.type === "required" && "Your input is required"} </span>
      </div>  
       
        
      <div class="form-group">
        <label for="email">Mobile number:</label>
        <input
          name="Developer"
          type="radio"
          value="Yes"
          ref={register({ required: true })}
        />
         <input
          name="Developer"
          type="radio"
          value="No"
          ref={register({ required: true })}
        />
        <span className="text-danger">{errors.Developer?.type === "required" && "Your input is required"}</span>
      </div>  
      <div class="form-group">
        <label for="email">Mobile number:</label>
        <input type="submit" className="form-control"/>
        <span className="text-danger">{errors.Title?.type === "required" && "Your input is required"}</span>
      </div>  
        
      </form>
      </div>
      </div>
  );
}
