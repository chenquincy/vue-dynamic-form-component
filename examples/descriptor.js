const descriptors = {
  number: { type: 'number', required: true },
  normalObject: {
    type: 'object',
    label: 'normal-object',
    fields: {
      prop1: {
        type: 'object',
        required: true,
        label: 'object-prop-1',
        fields: {
          boolean: { type: 'boolean', required: true },
          number: { type: 'number', required: true },
          date: { type: 'date', required: true },
          string: { type: 'string', required: true, pattern: /^test$/g },
          enum: { type: 'enum', enum: ['value-1', 'value-2'] }
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
      type: 'enum',
      enum: ['option-1', 'option-2', 'option-3']
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
