import React, { Component } from 'react';
import { Button } from 'rimble-ui';
import styles from './Trademark.module.scss';

export default class Trademark extends Component {
  state = {
    wordMark: null,
    wordMarkID: null,
    wordMarkIDget: null,
  };
  render() {
    // const { contract, count } = this.props;
    return (
      <div className={styles.counter}>
        <h3> Register Trademark </h3>
        {/* <div className={styles.dataPoint}>
          <div className={styles.label}>Instance address:</div>
          <div className={styles.value}>
            <PublicAddress address={contract._address} />
          </div>
        </div> */}
        <div className={styles.dataPoint}>
          <div className={styles.label}>Enter Word Mark</div>
          <input className={styles.value} onChange={e => this.setState({ wordMark: e.target.value })} />
        </div>
        <div className={styles.dataPoint}>
          <div className={styles.label}>Enter ID</div>
          <input className={styles.value} onChange={e => this.setState({ wordMarkID: e.target.value })} />
        </div>

        <div className={styles.buttons}>
          <Button onClick={() => this.props.createMark(this.state.wordMark, this.state.wordMarkID)} size="small">
            Submit
          </Button>
        </div>
        {this.props.markResponse && <p>Created</p>}

        <p>------------------</p>
        <h3>Get Mark by ID </h3>

        <div className={styles.dataPoint}>
          <div className={styles.label}>Enter ID</div>
          <input className={styles.value} onChange={e => this.setState({ wordMarkIDget: e.target.value })} />
        </div>

        <div className={styles.buttons}>
          <Button onClick={() => this.props.getMark(this.state.wordMarkIDget)} size="small">
            Submit
          </Button>
        </div>
        {this.props.markResponseText && <p>{this.props.markResponseText}</p>}
      </div>
    );
  }
}
