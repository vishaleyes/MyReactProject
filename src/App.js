import React, { useEffect, useState, useReducer } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  AddSuccess,
  MinusSuccess,
  fetchDataSuccess,
  formDataSuccess
} from "./redux/actions/about";
import { useDispatch, useSelector, useStore } from "react-redux";
require('dotenv').config();

export default function App(props) {
  const { register, handleSubmit, errors } = useForm();
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [customCount, setCustomCount] = useState(0);
  const storeData = useStore();
  const dispatch = useDispatch();

  
  console.log(errors);
  const onSubmit = (data) => {
    dispatch(formDataSuccess(data));
    console.log(data);
  }
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    setCustomCount(count);
  });

  useEffect(() => {
    // Code with Axios Library
    const Axios = axios.create({
      baseURL: "http://66.117.13.149/api/",
      timeout: 1000,
      headers: {
        "X-Custom-Header": "foobar",
        "Access-Control-Allow-Origin": "*",
      },
    });

    let data = Axios.put("/users/forgot-password", {
      email: "vishal.panchal@bypt.in",
    }).then((res) => res.data);
    console.log("axuos", data);

    // Code with FETCH library
    const res = fetch("http://66.117.13.149/api/users/forgot-password", {
      method: "put",
      //mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email: "vishal.panchal@bypt.in" }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });

    //   const requestOptions = {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' },
    //     body: JSON.stringify({ email: 'vishal.panchal@bypt.in' })
    // };
    // fetch('http://66.117.13.149/api/users/forgot-password', requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log("data", data));

    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setUsers(result);
          dispatch(fetchDataSuccess(result));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("error", error);
        }
      );
  }, []);

  function handleClickButton() {
    console.log("handle----", storeData.getState());
  }

  const [state] = useReducer(reducer, initialState);
  
  console.log("props", props);

  // const { count2, isLoading } = useSelector(state => {
  //   return state.count;
  // });
  console.log("storeData", storeData);
  console.log("Public Url", process.env.REACT_APP_PUBLIC_URL);
  //const [state, dispatch] = props;
  return (
    <div>
      <>
        Count: {state.count}
        <button onClick={() => dispatch(MinusSuccess(1))}>-</button>
        <button onClick={() => dispatch(AddSuccess(1))}>+</button>
      </>
      <h1>My REACT APP - Vishaleyes - TEST APP 1</h1>
      <img src='./assets/logo192.png'/>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {users?.data &&
              users?.data?.map((user, index) => (
                <tr key={index}>
                  <td>{user?.id}</td>
                  <td>{user?.first_name}</td>
                  <td>{user?.last_name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <img src={user?.avatar} width="52" height="52"></img>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <p>You clicked {count} times</p>
        <p>You clicked {customCount} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => handleClickButton()}>Click me 12</button>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="Firstname">First name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="Firstname"
              ref={register({ required: true, maxLength: 80 })}
            />
            <span className="text-danger">
              {errors.Firstname?.type === "required" &&
                "Your input is required"}
              {errors.Firstname?.type === "maxLength" &&
                "Your input exceed maxLength"}
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="LastName">Last name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="LastName"
              ref={register({ required: true, maxLength: 100 })}
            />
            <span className="text-danger">
              {errors.LastName?.type === "required" && "Your input is required"}
              {errors.LastName?.type === "maxLength" &&
                "Your input exceed maxLength"}
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <span className="text-danger">
              {errors.Email?.type === "required" && "Your input is required"}
              {errors.Email?.type === "pattern" && "Your email is invalid"}
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Mobile number:</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile number"
              name="Mobile number"
              ref={register({ required: true, minLength: 6, maxLength: 12 })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Title">Mobile number:</label>
            <select
              className="form-control"
              name="Title"
              ref={register({ required: true })}
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
            <span className="text-danger">
              {" "}
              {errors.Title?.type === "required" &&
                "Your input is required"}{" "}
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Mobile number:</label>
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
            <span className="text-danger">
              {errors.Developer?.type === "required" &&
                "Your input is required"}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Mobile number:</label>
            <input type="submit" className="form-control" />
            <span className="text-danger">
              {errors.Title?.type === "required" && "Your input is required"}
            </span>
          </div>
        </form>

        <div className="row">&nbsp;</div>
      </div>
    </div>
  );
}
