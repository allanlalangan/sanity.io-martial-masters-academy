export default {
  title: 'Brand Contact',
  name: 'brandContact',
  type: 'object',
  fields: [
    {
      title: 'Address',
      name: 'address',
      type: 'object',
      fields: [
        { title: 'Address Line 1', name: 'address1', type: 'string' },
        { title: 'Address Line 2', name: 'address2', type: 'string' },
        { title: 'City/State, Zip', name: 'cityStateZip', type: 'string' },
      ],
    },
    { title: 'Email', name: 'email', type: 'string' },
    { title: 'Phone', name: 'phone', type: 'string' },
  ],
};
