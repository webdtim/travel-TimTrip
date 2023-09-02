import { createEmptyPlanSection } from 'store/plan/planSection-store'
import { TPlanSection } from 'types/plan'

export const testPlanSectionData: TPlanSection = {
  id: 'test',
  title: '',
  items: [
    {
      id: 'test1',
      type: 'checklist',
      title: 'test1',
      items: [
        { id: '1', value: 'Item 1', checked: false },
        { id: '2', value: 'Item 2', checked: false },
        { id: '3', value: 'Item 3', checked: true },
      ],
    },
    {
      id: 'editor1',
      type: 'editor',
      content: [
        {
          children: [
            {
              format: 0,
              text: 'kkll',
              type: 'text',
            },
          ],
          format: '',
          type: 'paragraph',
        },
        {
          children: [
            {
              children: [
                {
                  format: 0,
                  text: 'https://github.com/konstantinmuenster/lexical-examples/blob/main/examples/lexical-nested-editor/src/Editor/Editor.tsx',
                  type: 'text',
                },
              ],
              format: '',
              type: 'autolink',
              url: 'https://github.com/konstantinmuenster/lexical-examples/blob/main/examples/lexical-nested-editor/src/Editor/Editor.tsx',
            },
          ],
          format: '',
          type: 'paragraph',
        },
        {
          children: [
            {
              format: 3,
              text: 'saddsfdss',
              type: 'text',
            },
            {
              format: 11,
              text: 'ad   ',
              type: 'text',
            },
            {
              format: 3,
              text: ' ',
              type: 'text',
            },
            {
              format: 0,
              text: ' dksadklsad klsa',
              type: 'text',
            },
          ],
          format: '',
          type: 'paragraph',
        },
        {
          children: [
            {
              children: [
                {
                  format: 0,
                  text: 'https://wanderlog.com/plan/ummkyyvspintidxh/trip-to-pari',
                  type: 'text',
                },
              ],
              format: '',
              type: 'autolink',
              url: 'https://wanderlog.com/plan/ummkyyvspintidxh/trip-to-pari',
            },
          ],
          format: '',
          type: 'paragraph',
        },
      ],
    },
    {
      id: 'test2',
      type: 'checklist',
      title: 'test2',
      items: [
        { id: '1', value: 'Item 1', checked: false },
        { id: '2', value: 'Item 2', checked: false },
        { id: '3', value: 'Item 3', checked: true },
      ],
    },
    {
      id: 'test3',
      title: 'test3',
      type: 'checklist',
      items: [
        { id: '1', value: 'Item 1', checked: false },
        { id: '2', value: 'Item 2', checked: false },
        { id: '3', value: 'Item 3', checked: true },
      ],
    },
  ],
}
export const testPlanData = {
  id: 'test',
  title: '',
  sections: [createEmptyPlanSection(), testPlanSectionData],
}
