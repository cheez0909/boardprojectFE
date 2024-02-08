import commons from './commons';
import validations from './validations';
import errors from './errors';

const msg = { ...commons, ...validations, ...errors };

export default msg;
