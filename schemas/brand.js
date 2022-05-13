export default {
  title: 'Brand',
  name: 'brand',
  type: 'document',
  fields: [
    { title: 'Name', name: 'title', type: 'string' },
    { title: 'Logo', name: 'logo', type: 'array', of: [{ type: 'brandLogo' }] },
    { title: 'Contact', name: 'contact', type: 'brandContact' },
  ],
};
