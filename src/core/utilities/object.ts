import { merge, mapKeys, isPlainObject, isEqual, mapValues, isObjectLike, pickBy, isEmpty } from 'lodash';

/* eslint-disable @typescript-eslint/no-explicit-any */

export class ObjectUtils {
  public static merge(obj1: object, obj2: object): object {
    return merge(obj1, obj2);
  }

  public static isObject(value): boolean {
    return isPlainObject(value);
  }

  public static isObjectLike(value): boolean {
    return isObjectLike(value);
  }

  public static filter(obj: object, fn: (value, key: string) => boolean): object {
    return pickBy(obj, fn);
  }

  public static isEqual(obj1: object, obj2: object): boolean {
    return isEqual(obj1, obj2);
  }

  public static isEmpty(obj: object): boolean {
    return isEmpty(obj);
  }

  public static map(obj: object, mapperFn: (value, key: string) => any, type: 'keys' | 'values' = 'values'): object {
    let deepMap: (tempObj: object) => object;
    switch (type) {
      case 'keys':
        deepMap = (tempObj): object => {
          const newData = mapValues(tempObj, (value): any =>
            ObjectUtils.isObjectLike(value) ? deepMap(value) : value,
          );

          return mapKeys(newData, mapperFn);
        };
        break;
      case 'values':
        deepMap = (tempObj): object => {
          return mapValues(tempObj, (value, key): any =>
            ObjectUtils.isObjectLike(value) ? deepMap(value) : mapperFn(value, key),
          );
        };
        break;
      default:
        deepMap = (): object => undefined;
    }

    return deepMap(obj);
  }
}
