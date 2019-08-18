import React, { Component, Fragment } from 'react';
import ShowPreview from '../ShowPreview';
import styles from './Search.module.css';
import { observer, inject } from '../../../node_modules/mobx-react/dist/mobx-react';

@inject('appStore')
@observer
class Search extends Component {
    state = {
        inputValue: ''
    };

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    };

    handleClick = () => {
        const { appStore } = this.props;
        const { inputValue } = this.state;

        appStore.searchSeries(inputValue);
    };

    render() {
        const { inputValue } = this.state;
        const { appStore } = this.props;
        const { isLoading, searchResult } = appStore;

        return isLoading ? (
            <p>Выполняется поиск</p>
        ) : (
                <Fragment>
                    <div className={styles.previewList}>
                        <input
                            className={`${styles.input} t-input`}
                            value={inputValue}
                            placeholder="Название сериала"
                            onChange={this.handleChange}
                        />
                        <div className={styles.buttonWrapper}>
                            <button
                                className={`${styles.button} t-search-button`}
                                onClick={this.handleClick}
                            >
                                Найти
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.searchPanel} t-search-result`}>
                        {searchResult.map(show => (
                            <ShowPreview key={show.id} {...show} />
                        ))}
                    </div>
                </Fragment>
            );
    }
}

export default Search;