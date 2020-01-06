import './_all.scss';
import { plugins } from './plugins';

Object.values(plugins).forEach((plugin): void => {
  plugin();
});
