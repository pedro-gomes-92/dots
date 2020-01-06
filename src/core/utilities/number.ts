import { random } from 'lodash';

export class NumberUtils {
  public static random(
    min: number = -999,
    max: number = 999,
    except: number[] = [],
    isFloating: boolean = true,
  ): number {
    const randomNumber = random(min, max, isFloating);

    if (except.indexOf(randomNumber) >= 0) {
      return NumberUtils.random(min, max, except, isFloating);
    }

    return randomNumber;
  }
}
