import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

import {
    getPublicationById,
    updatePublication
} from '../services/Publication.service';

function PublicationEdit(){
    const [publication, setPublication] = useState({});
    const { id } = useParams();
    const messages = useRef(null);

    useEffect(() => {
        getPublicationById(id)
        .then(x => setPublication(x.data[0]))
    }, [])

    function handleSubmit(ev){
        ev.preventDefault();
        updatePublication(publication, id)
        console.log(publication)
        messages.current.show({severity: 'success', summary: '', detail: 'O registro foi alterado com sucesso.'});
    }

    return(
        <div>
            <Messages ref={messages}></Messages>
            <form onSubmit={handleSubmit}>
                <div className="p-fluid">
                    <div className='p-field'>
                        <label htmlFor="content">Content</label>
                        <InputTextarea id='content' rows={6} cols={100}
                            value={publication.content}
                            onChange={(ev) => setPublication({
                                ...publication,
                                content: ev.target.value
                            })} />
                    </div>
                </div>
                <Button label='Salvar' />
            </form>
        </div>
    )
}
export default PublicationEdit;