import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import {AppRouter} from "app/providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
          <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
          </div>
  );
};

export default App;