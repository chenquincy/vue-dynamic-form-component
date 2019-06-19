export default {
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
          object: {
            type: 'object',
            required: true,
            label: 'object-prop-1',
            fields: {
              object: {
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
              boolean: { type: 'boolean', required: true },
              number: { type: 'number', required: true },
              date: { type: 'date', required: true },
              string: { type: 'string', required: true, pattern: /^test$/g },
              enum: { type: 'enum', enum: ['value-1', 'value-2'] }
            }
          },
          boolean: { type: 'boolean', required: true },
          number: { type: 'number', required: true },
          date: { type: 'date', required: true },
          string: [
            { type: 'string', required: true, placeholder: '请输入对应的数值' },
            { pattern: /^test$/g, message: 'prop3必须包含test字符串' }
          ],
          enum: { type: 'enum', enum: [0, 1], options: [{ label: '男', value: 1, disabled: true }, { label: '女', value: 0 }] }
        }
      },
      prop2: { type: 'number', required: true },
      prop3: [
        { type: 'string', required: true, placeholder: '请输入对应的数值' },
        { pattern: /^test$/g, message: 'prop3必须包含test字符串' }
      ]
    }
  },
  hashMapObject: {
    type: 'object',
    required: true,
    defaultField: {
      type: 'object',
      fields: {
        prop1: { type: 'boolean', required: true },
        prop2: { type: 'number', required: true, placeholder: '请输入对应的数值' },
        prop3: [
          { type: 'string', required: true, placeholder: '请输入对应的数值' },
          { pattern: /^test$/g, message: 'prop3必须包含test字符串' }
        ]
      }
    }
  },
  normalArray: {
    type: 'array',
    required: true,
    defaultField: {
      type: 'enum',
      enum: ['option-1', 'option-2', 'option-3'],
      multiple: true
    }
  },
  objectArray: {
    type: 'array',
    required: true,
    defaultField: {
      type: 'object',
      fields: {
        prop1: { type: 'string', required: true },
        prop2: { type: 'number', required: true },
        prop3: { type: 'string', required: true, pattern: /^test$/g }
      }
    }
  }
}
