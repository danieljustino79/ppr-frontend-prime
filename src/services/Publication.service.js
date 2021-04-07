import axios from 'axios';
import {urlApi} from '../config';

export const getPublications = () => axios
    .get(`${urlApi}publication`)
    .then(({data}) => data)

export const getPublicationById = (id) => axios
    .get(`${urlApi}publication/${id}`)
    .then(({data}) => data)

export const updatePublication = (publication, id) => axios
    .put(`${urlApi}publication/${id}`, 
    JSON.stringify(publication),
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          }
    })
    