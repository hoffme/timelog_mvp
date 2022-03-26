import {BrowserRouter} from "react-router-dom";

import Contexts from "../context";

import Nav from "../components/layout/nav";
import Pages from "../components/layout/pages";

import pages from "./pages";

import './global.scss';
import style from './style.module.scss';

const App = () => {
    return <Contexts>
        <BrowserRouter>
            <div className={style.container}>
                <Nav className={style.nav} pages={pages} />
                <Pages className={style.pages} pages={pages} />
            </div>
        </BrowserRouter>
    </Contexts>
}

export default App;