export default {
  string: { type: 'string', required: true, disabled: true, placeholder: 'test', props: { autocomplete: 'on', type: 'textarea', rows: 4 } },
  url: { type: 'url', message: 'The url must be an url' },
  object: {
    type: 'object',
    label: 'object label',
    fields: {
      string: { type: 'string', required: true, hidden: false },
      date: { type: 'date', required: true },
      url: { type: 'url', message: 'The url must be an url', props: { placeholder: 'please input the url' } }
    }
  },
  hashmap: {
    type: 'object',
    label: 'hashmap label',
    defaultField: {
      type: 'string',
      required: true
    }
  },
  array: {
    type: 'array',
    label: 'array label',
    defaultField: {
      type: 'object',
      fields: {
        string: { type: 'string', required: true },
        url: { type: 'url', message: 'The url must be an url', props: { placeholder: 'please input the url' } }
      }
    }
  },
  multiSelect: {
    type: 'array',
    label: 'array label',
    defaultField: {
      type: 'enum',
      multiple: true,
      enum: [0, 1, 2, 3],
      options: [
        { label: 'option-0', value: 0, disabled: true },
        { label: 'option-1', value: 1 },
        { label: 'option-2', value: 2 },
        { label: 'option-3', value: 3 }
      ]
    }
  }
}
