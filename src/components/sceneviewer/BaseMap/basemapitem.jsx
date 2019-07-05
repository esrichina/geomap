import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import * as mapUtils from '../../../utils/arcgis/map/mapviewUtil';
import styles from './index.less';

const BaseMapItem = ({ dispatch, data, key, basemapOnChange, activeMapItemid }) => {
  const [itemid, stateitemid] = useState(null);
  const view = window.agsGlobal.view;

  useEffect(() => {
    stateitemid(data.itemId);
  }, []);

  function switchBaseMap() {
    mapUtils.switchBaseMapByWebmapId(view, itemid);
    basemapOnChange(itemid);
  }

  return (
    <div
      className={`${styles.mapitem} ${
        itemid === activeMapItemid ? styles.active : ''
      }`}
      title={data.title}
      onClick={switchBaseMap}
    >
      <img
        activemap={data.itemId}
        className={styles.mapIcon}
        src={data.icon}
        alt=""
      />
    </div>
  );
};

export default connect(() => {
  return {

  };
})(BaseMapItem);
