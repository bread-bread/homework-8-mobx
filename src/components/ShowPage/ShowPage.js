import React, { Component, Fragment } from 'react';
import styles from './ShowPage.module.css';
import { observer, inject } from '../../../node_modules/mobx-react/dist/mobx-react';

@inject('appStore')
@observer
class ShowPage extends Component {
    componentDidMount() {
        const { appStore, match: { params: { id } } } = this.props;
        
        appStore.getShow(id);
    }

    render() {
        const { appStore } = this.props;
        const { show, isLoading } = appStore;

        if (isLoading) {
            return <p>Загрузка</p>;
        } else {
            const { name, image, summary, _embedded } = show;
    
            return (
                <Fragment>
                    <p>{name}</p>
                    {image && <img src={image.medium} alt={name} />}
                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                    <div className={styles.cast}>
                        {_embedded && _embedded.cast.map(({ person }) => (
                            <div key={person.id} className="t-person">
                                <p>{person.name}</p>
                                {person.image && <img src={person.image.medium} alt={person.name} />}
                            </div>
                        ))}
                    </div>
                </Fragment>
            );
        }

    }
}

export default ShowPage;