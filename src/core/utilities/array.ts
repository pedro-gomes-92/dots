import { partition, fill, dropRight, concat, difference, differenceWith, uniq, uniqWith } from 'lodash';

/* eslint-disable @typescript-eslint/no-explicit-any */

export class ArrayUtils {
  public static separate(arr: any[], filterFn: (value: any) => boolean): any[][] {
    return partition(arr, filterFn);
  }

  public static difference(arr1: any[], arr2: any[], differenceFn?: (val1: any, val2: any) => boolean): any[] {
    if (differenceFn) {
      return differenceWith(arr1, arr2, differenceFn);
    }

    return difference(arr1, arr2);
  }

  public static unique(arr: any[], uniqueFn?: (val1: any, val2: any) => boolean): any[] {
    if (uniqueFn) {
      return uniqWith(arr, uniqueFn);
    }

    return uniq(arr);
  }

  public static fill(arr: any[], value: any): any[] {
    return fill(arr, value);
  }

  public static dropRight(arr: any[], nElements: number = 1): any[] {
    return dropRight(arr, nElements);
  }

  public static concatenate(arr: any[], ...values: any[]): any[] {
    return concat(arr, ...values);
  }
}
