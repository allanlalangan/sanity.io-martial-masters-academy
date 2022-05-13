export default {
  title: 'Card',
  name: 'card',
  type: 'object',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    { title: 'Heading', name: 'heading', type: 'string' },
    { title: 'Sub-heading', name: 'subHeading', type: 'string' },
    { title: 'Body Text', name: 'bodyText', type: 'string' },
    {
      title: 'Details',
      name: 'details',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
};
