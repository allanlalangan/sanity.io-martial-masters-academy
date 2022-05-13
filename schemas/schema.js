// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import program from './program';
import instructor from './instructor';
import brand from './brand';
import brandLogo from './brandLogo';
import brandContact from './brandContact';
import card from './card';
import page from './page';
import hero from './hero';
import callToAction from './callToAction';
import about from './about';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    about,
    page,
    hero,
    callToAction,
    card,
    brand,
    brandContact,
    brandLogo,
    program,
    instructor,
    /* Your types here! */
  ]),
});
