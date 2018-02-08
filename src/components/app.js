import React from 'react';
import { connect } from "react-redux";

export const App = (props) => (
    <div>
    	<h1>{props.message}</h1>
    </div>
);

const mapStateToProps = (state) => ({
    message: state.defaultReducer.message
});

export default connect(mapStateToProps)(App);