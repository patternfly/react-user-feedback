process.env.TZ = process.env.TZ || 'EST';

const { TextEncoder } = require('util');
global.TextEncoder = TextEncoder;