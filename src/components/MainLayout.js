import React from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "../components/Nav";
//import auth from "../services/authService";
import "react-toastify/dist/ReactToastify.css";

class MainLayout extends React.Component {
  state = {};
  componentDidMount() {
    //const user = auth.getCurrentUser();
    //this.setState({ user });
  }
  render() {
    const { children } = this.props;
    return (
      <main>
        <ToastContainer />
        <NavBar />
        {children}
      </main>
    );
  }
}

export default MainLayout;
