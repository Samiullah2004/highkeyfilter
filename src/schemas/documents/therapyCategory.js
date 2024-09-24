export default {
  title: 'Therapy Category Section',
  name: 'therapyCategorySection',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: '',
    },
  },
}
