import { BiBriefcase } from 'react-icons/bi';

const education = {
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: BiBriefcase,
  fields: [
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
      description: 'Enter the name of the institution'
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      description: 'Enter the degree you received'
    },
    {
      name: 'fieldOfStudy',
      title: 'Field of Study',
      type: 'string',
      description: 'Enter the field of study'
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Enter the location of the institution'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Write a brief description about your education'
    },
    {
      name: 'logo',
      title: 'University Logo',
      type: 'image'
    },
    {
      name: 'url',
      title: 'University Website',
      type: 'url'
    }
  ]
};

export default education;