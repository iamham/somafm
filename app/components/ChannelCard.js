import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styles from './ChannelCard.module.css';


export default class ChannelCard extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { title, subtitle, img, url } = this.props;

    return (
      <div className={`channelCard ${styles.channelCard}`}>
        <Link to={{ pathname: `/channel/${url}` }}>
          <img className={styles.channelThumbnail__img} src={img} alt={title} />
        </Link>
        <div className={styles.channelCardContent}>
          <div className={styles.channelCardContent__title}>{title}</div>
          <div className={styles.channelCardContent__subtitle}>{subtitle}</div>
        </div>
      </div>
    );
  }
}
