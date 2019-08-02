export default {
  string: { type: 'string', required: true },
  url: { type: 'url', message: 'The url must be an url' },
  object: {
    type: 'object',
    label: 'object label',
    fields: {
      string: { type: 'string', required: true, hidden: false },
      date: { type: 'date', required: true },
      url: { type: 'url', message: 'The url must be an url', placeholder: 'please input the url' }
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
        url: { type: 'url', message: 'The url must be an url', placeholder: 'please input the url' }
      }
    }
  }
}
