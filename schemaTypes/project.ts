import { BiPackage } from 'react-icons/bi';
import { defineField } from 'sanity';

const project = {
  name: 'project',
  title: 'Project',
  description: 'Project Schema',
  type: 'document',
  icon: BiPackage,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the project'
    },
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: rule => rule.max(60).required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Add a custom slug for the URL or generate one from the name',
      options: { source: 'name' },
      validation: rule => rule.required()
    }),
    {
      name: 'logo',
      title: 'Project Logo',
      type: 'image'
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Upload a cover image for this project',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
      description: 'Upload multiple images for this project'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Write a full description about this project',
      of: [{ type: 'block' }]
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web' },
          { title: 'Mobile Development', value: 'mobile' },
          { title: 'Machine Learning', value: 'ml' }
        ],
        layout: 'radio'
      }
    }
  ]
};

export default project;
