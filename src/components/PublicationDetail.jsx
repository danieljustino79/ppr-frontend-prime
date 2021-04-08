import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

import { getPublicationById } from '../services/Publication.service';
import ContentPreWrapHtml from './shared/ContentPreWrapHtml';

function PublicationDetail(){
    const [publication, setPublication] = useState({});
    const [tagsComp, setTagsComp] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPublicationById(id)
        .then(x => setPublication(x.data[0]))
    }, []) // eslint-disable-next-line

    useEffect(() => {
        let parts = String(publication.tags).split(',')
        setTagsComp(parts.map(t => {
            return (
                <span className='tag-around' key={t}>
                    <Tag value={t} />
                </span>
            )
        }))
    }, [publication])


    return(
        <div>
            <Card title={publication.title}>
                {tagsComp}
                <ContentPreWrapHtml text={publication.content} />
            </Card>
        </div>
    )
}
export default PublicationDetail;