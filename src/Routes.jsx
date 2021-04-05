import { 
    Route,
    Switch
} from 'react-router-dom';

import ContentFull from './components/shared/template/ContentFull';

import Home from './components/Home';
import Tools from './components/Tools';

function Routes(){
    return(
        <ContentFull componentChildren={
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/tools' exact component={Tools} />
            </Switch>
        } />
    )
}

export default Routes;