export default {
  title: 'Programs',
  name: 'program',
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Age Group',
      name: 'age',
      type: 'string',
      options: {
        list: [
          { title: 'Adult', value: 'adult' },
          { title: 'Youth', value: 'youth' },
        ],
        layout: 'radio',
      },
    },
    { title: 'Caption', name: 'caption', type: 'string' },
    {
      title: 'Instructor',
      name: 'instructor',
      type: 'reference',
      to: [{ type: 'instructor' }],
    },
    { title: 'Description', name: 'description', type: 'string' },
    {
      title: 'Students will learn:',
      name: 'willLearn',
      type: 'array',
      of: [{ type: 'string' }],
    },
    { title: 'Card Image', name: 'image', type: 'image' },
  ],
};
