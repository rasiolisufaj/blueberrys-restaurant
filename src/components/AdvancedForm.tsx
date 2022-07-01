import React, {CSSProperties, RefObject} from 'react'
import {Col, Form, Input, Row, Select,} from 'antd'
// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import {FormItemProps, Rule} from 'antd/lib/form'
import {ColSize} from 'antd/lib/col'
import {QuestionCircleOutlined} from '@ant-design/icons'
// import { __, T } from 'config/i18n'
import {FormInstance} from 'antd/es/form'
// import { Properties, SupplyChainStep } from 'api/types'

const {Option} = Select

export type InputType =
  | 'checkbox'
  | 'text'
  | 'password'
  | 'number'
  | 'textarea'
  | 'select'
  | 'autocomplete'
  | 'date'
  | 'daterange'
  | 'datetime'
  | 'multiple-file'
  | 'group'
  | 'form'
  | 'button'
  | 'radio'
  | 'switch'

interface ColProps {
  span?: number
  order?: number
  offset?: number
  push?: number
  pull?: number
  xs?: number | ColSize
  sm?: number | ColSize
  md?: number | ColSize
  lg?: number | ColSize
  xl?: number | ColSize
  xxl?: number | ColSize
  prefixCls?: string
  flex?: number
}

export interface Schema extends Partial<FormItemProps> {
  name: string
  type?: InputType
  decimal?: number
  defaultValue?: any
  label?: string
  placeholder?: string
  dateRangePlaceholders?: [string, string]
  col?: ColProps | number
  rules?: Rule[]
  options?: { label: string; value: any; tooltip?: string }[]
  fields?: any[]
  onClick?: () => void
  buttonType?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed'
  render?: () => JSX.Element
  hide?: boolean
  disabled?: boolean
  notInput?: boolean
  urlSearch?: string
  descriptionKey?: string
  secondaryDescriptionKey?: string
  multipleAutocomplete?: boolean
  showSearch?: boolean
  inputAddonBefore?: string
  mode?: 'multiple' | 'tags' | undefined
  maxTagCount?: number
  onInputBlur?: () => void
  withButton?: boolean
  buttonLabel?: string
  onButtonClick?: () => void
}

export interface ButtonProps {
  text: string
  col?: number
  offset?: number
  style?: React.CSSProperties
  disabled?: boolean
  onPress?: () => void
}

interface Props {
  schema: Schema[]
  values?: any
  onValuesChange?: (changedValues: any, values: any) => void
  submitButton?: ButtonProps
  className?: string
  style?: CSSProperties
  title?: string
  formRef?: RefObject<FormInstance>
}


export default function AdvancedForm({
                                       schema,
                                       values,
                                       onValuesChange,
                                       submitButton,
                                       className,
                                       style,
                                       title,
                                       formRef
                                     }: Props) {

  const onFinishFailed = () => {
    console.log('Failed:', {})
  }

  let [form] = Form.useForm()
  if (formRef?.current) {
    form = formRef?.current
  }
  form.setFieldsValue(values)

  console.log("Schema for building the form: ", schema);

  return (
    <Form
      ref={formRef}
      form={form}
      layout="vertical"
      onFinish={submitButton?.onPress}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
      className={className}
      style={style}
    >

      {title && <h2>{title}</h2>}

      <Row gutter={24}>
        {schema
          .map((schema, index) => {
            const span = typeof schema.col === 'number' ? schema.col : 24
            const colProps: ColProps = schema.col && typeof schema.col === 'object' ? schema.col : {}
            return (
              <Col key={index} span={span} {...colProps}>
                  <Form.Item key={index} {...schema}>
                    <Input
                      placeholder={schema.placeholder || schema.label}
                      value={schema.initialValue}
                      disabled={schema.disabled}
                      onBlur={schema.onInputBlur}
                      addonBefore={schema.inputAddonBefore}
                    />
                  </Form.Item>
              </Col>
            )
          })}
      </Row>
    </Form>
  )
}
