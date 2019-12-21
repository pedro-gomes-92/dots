import './scss/_all.scss';
import { plugins } from './ts';

Object.values(plugins).forEach((plugin): void => {
  plugin();
});
