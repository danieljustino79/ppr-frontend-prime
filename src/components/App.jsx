import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './shared/template/Header';
import Routes from '../Routes';

function App(){
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes />
            </BrowserRouter>
        </div>
    )
}

export default App;