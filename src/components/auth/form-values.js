const formValues = [
  {
    contentName: 'firstname',
    contentLabel: 'First Name',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    componentType: 'Input',
  },
  {
    contentName: 'lastname',
    contentLabel: 'Last Name',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    componentType: 'Input',
  },
  {
    contentName: 'locationPref',
    contentLabel: 'Location Detection',
    contentType: 'checkbox',
    contentOptions: ['Manual', 'Automatic'],
    componentType: 'Input',
  },
  {
    contentName: 'phoneNumbers',
    componentType: 'PhoneNumbers',
    contentOptions: [
      'Direct',
      'Main',
      'Mobile',
      'Work',
      'Home',
      'Other',
    ],
  },
  {
    contentName: 'addresses',
    componentType: 'Addresses',
  },
  {
    contentName: 'userName',
    contentLabel: 'User Name (Public)',
    contentType: 'text',
    contentAlt: '',
    contentOptions: null,
    componentType: 'Input',
  },
];

export default formValues;
