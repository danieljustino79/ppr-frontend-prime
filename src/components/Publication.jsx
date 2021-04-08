import {useState, useEffect} from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import {getPublications} from '../services/Publication.service';

function Publications(){
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        getPublications().then(x => setPublications(x.data))
    }, [])

    const publicationContentResume = (rowData) => {
        return rowData.content.substr(0, 60) + '...';
    }

    function handleClickDetail(id){
        let urlTarget = `/publication/detail/${id}`;
        document.location = urlTarget;
    }

    function handleClickEdit(id){
        let urlTarget = `/publication/edit/${id}`;
        document.location = urlTarget;
    }

    const optionsButton = (rowData) => {
        return(
            <div className='tableOptionButton' >
                <Button icon="pi pi-eye" onClick={() => handleClickDetail(rowData.id)} /> 
                <Button icon="pi pi-pencil" onClick={() => handleClickEdit(rowData.id)}/>
            </div>
        ) 
    }

    return(
        <div>
            <DataTable value={publications}>
                <Column field="id" header="Code"></Column>
                <Column field="title" header="Name"></Column>
                <Column field="content" header="Content" body={publicationContentResume}></Column>
                <Column header="Options" body={optionsButton}></Column>
            </DataTable>
        </div>        
    )
}

export default Publications