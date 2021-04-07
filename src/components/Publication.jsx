import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {getPublications} from '../services/Publication.service';

function Publications(){
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        getPublications().then(x => setPublications(x.data))
    }, [])

    return(
        <div>
            <ul>
                {
                    publications.map(p => (
                        <li key={p.id}>
                            <Link to={`/publication/edit/` + p.id}>{p.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>        
    )
}

export default Publications