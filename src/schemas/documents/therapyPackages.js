export default {
  title: 'Therapy Packages Section',
  name: 'therapyPackagesSection',
  type: 'document',

  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Packages',
      name: 'packages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'categories',
              title: 'Categories',
              type: 'reference',
              to: { type: 'therapyCategorySection' },
            },
            {
              title: 'Package',
              name: 'package',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      title: 'Title',
                      name: 'title',
                      type: 'string',
                    //   validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Price',
                      name: 'price',
                      type: 'string',
                    //   validation: (Rule) => Rule.required(),
                    },
                    {
                        title: 'Per Session Price',
                        name: 'perSectionPrice',
                        type: 'string',
                        // validation: (Rule) => Rule.required(),
                    },
                    {
                        title: 'Round',
                        name: 'round',
                        type: 'string',
                        // validation: (Rule) => Rule.required(),
                    },
                    {
                        title: 'Sub Title',
                        name: 'subTitle',
                        type: 'string',
                        // validation: (Rule) => Rule.required(),
                    },
                    {
                        title: 'Text',
                        name: 'text',
                        type: 'bodyPortableText',
                        // validation: (Rule) => Rule.required(),
                    },
                    {
                        title: 'Button',
                        name: 'button',
                        type: 'string',
                        // validation: (Rule) => Rule.required(),
                    },
                    
                  ],
                },
              ],
              
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'packages.0.package.0.title', // Shows the title of the first package in the array
          subtitle: 'packages.0.package.0.price', // Shows the price of the first package
        },
      },
    },
    
  ],
  preview: {
    select: {
      title: 'identifier',
      media: '',
    },
  },
}
