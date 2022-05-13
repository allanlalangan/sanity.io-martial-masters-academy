export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    { title: 'Page', name: 'title', type: 'string' },
    {
      title: 'Section',
      name: 'section',
      type: 'array',
      of: [
        { type: 'about' },
        { type: 'hero' }, // hero.js (same applies for the other types)
        { type: 'callToAction' },
        { type: 'card' },
        // etc...
      ],
    },
  ],
};
