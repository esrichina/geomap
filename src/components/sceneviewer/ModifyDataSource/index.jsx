/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Button } from 'antd';
import modifyDataSourceIcon from './images/icon_search2-01.png';
import modifyDataSourceIcon1 from './images/icon_search1-01.png';
import ChangeDataSource from './ModifyDataSourcePanle';
import styles from './index.css';

const ModifyDataSource = () => {
  const [panalState, setPanalState] = useState(false);

  function btnOnClick() {
    setPanalState(!panalState)
  }

  return (
    <React.Fragment>
      <Button
        onClick={btnOnClick}
        className={styles.btnStyle}
        style={{ backgroundColor: panalState? '#47b479' : 'white' }}
      >
        <a className={styles.btnA} title="修改数据源">
          <img
            src={panalState ? modifyDataSourceIcon : modifyDataSourceIcon1}
            alt=""
            className={styles.btnImg}
          />
        </a>
      </Button>
      <ChangeDataSource visible={panalState} setVisible={btnOnClick} />
    </React.Fragment>
  );
};

export default ModifyDataSource;
