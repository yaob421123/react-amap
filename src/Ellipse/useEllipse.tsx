import { useState, useMemo } from 'react';
import { EllipseProps } from '.';
import { useVisiable, useEventProperties, useSettingProperties } from '../common/hooks';

export interface UseEllipse extends EllipseProps {}
export const useEllipse = (props = {} as UseEllipse) => {
  const { map, visiable, ...other } = props;
  const [ellipse, setEllipse] = useState<AMap.Ellipse>();
  useMemo(() => {
    if (!AMap || !map) return;
    if (!ellipse) {
      let instance: AMap.Ellipse = new AMap.Ellipse({ ...other });
      map.add(instance);
      setEllipse(instance);
      return () => {
        if (instance) {
          map && map.remove(instance);
          setEllipse(undefined);
        }
      }
    }
  }, [map, ellipse]);

  useVisiable(ellipse!, visiable);
  useSettingProperties<AMap.Ellipse, UseEllipse>(ellipse!, props, [
    'Center', 'Radius', 'Options', 'ExtData'
  ]);
  useEventProperties<AMap.Ellipse, UseEllipse>(ellipse!, props, [
    'onHide', 'onShow', 'onClick', 'onDblClick', 'onRightClick', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseDown', 'onTouchEnd', 'onTouchMove', 'onTouchStart'
  ]);
  return {
    ellipse, setEllipse,
  }
}