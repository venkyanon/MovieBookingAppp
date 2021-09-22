import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./screens/home/Home";
import Details from "./screens/details/Details";
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './common/NotFound';
import 'typeface-roboto';



ReactDOM.render(
    <BrowserRouter/>,
  document.getElementById('root')
);