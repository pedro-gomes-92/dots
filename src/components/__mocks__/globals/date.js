import MockDate from 'mockdate';

// Mock Date
MockDate.set(new Date('2019-10-29T03:24:00'), 0);

// Mock Timezone
Date.prototype.toString = Date.prototype.toLocaleString;
