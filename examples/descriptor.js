const descriptors = {
  normalObject: {
    type: 'object',
    fields: {
      prop1: {
        type: 'object',
        fields: {
          prop1: { type: 'boolean', required: true },
          prop2: { type: 'number', required: true },
          prop3: { type: 'string', required: true, pattern: /^test$/g }
        }
      },
      prop2: { type: 'number', required: true },
      prop3: { type: 'string', required: true, pattern: /^test$/g }
    }
  },
  hashMapObject: {
    type: 'object',
    required: true,
    defaultField: {
      type: 'object',
      fields: {
        prop1: { type: 'boolean', required: true },
        prop2: { type: 'number', required: true },
        prop3: { type: 'string', required: true, pattern: /^test$/g }
      }
    }
  },
  normalArray: {
    type: 'array',
    required: true,
    defaultField: {
      type: 'number'
    }
  },
  objectArray: {
    type: 'array',
    required: true,
    defaultField: {
      type: 'object',
      fields: {
        prop1: { type: 'boolean', required: true },
        prop2: { type: 'number', required: true },
        prop3: { type: 'string', required: true, pattern: /^test$/g }
      }
    }
  }
}

export default descriptors
