import Vue, { VueConstructor } from 'vue'

export type ComponentSize = 'large' | 'medium' | 'small' | 'mini'

export interface ValidateCallback {
  /**
   * The callback to tell the validation result
   *
   * @param isValid Whether the form is valid
   */
  (isValid: boolean): void
}

declare class DynamicForm extends Vue {
  /* binding value */
  value: object
  /* default language of component */
  lang: string
  /* language packages of component */
  languages: object
  /* descriptors of form, refer to https://github.com/yiminghe/async-validator */
  descriptors: object
  /* size of component */
  size: ComponentSize
  /* background color of component, default #FFFFFF */
  backgroundColor: string
  /* font size of component, default 14 */
  fontSize: number
  /* darken sub-form's background-color with offset while get positive integer, default 8 */
  bgColorOffset: number
  /**
   * Validate the whole form
   *
   * @param callback A callback to tell the validation result
   */
  validate (callback: ValidateCallback): void
  validate (): Promise<boolean>

  /** reset all the fields and remove validation result */
  resetFields (): void

  /** clear validation message for certain fields */
  clearValidate (): void
}

export {
  DynamicForm
}

declare const _default: {
  install(Vue: VueConstructor): void
};

export default _default