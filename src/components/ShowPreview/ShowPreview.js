import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ShowPreview.module.css';
import { observer } from '../../../node_modules/mobx-react/dist/mobx-react';

function ShowPreview({ id, name, image, summary }) {
    return (
        <div className={`${styles.container} t-preview`}>
            <div>
                <Link className="t-link" to={`/shows/${id}`}>
                    {name}
                </Link>
                {image.medium ? <img src={image.medium} alt={name} /> : null}
            </div>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
    );
}

export default observer(ShowPreview);