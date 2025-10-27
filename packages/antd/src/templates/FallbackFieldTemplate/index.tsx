import { FallbackFieldTemplateProps, FormContextType, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { Col, Row } from 'antd';

export default function FallbackFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FallbackFieldTemplateProps<T, S, F>) {
  const { typeSelector, schemaField } = props;
  return (
    <Row gutter={6}>
      <Col span={8}>{typeSelector}</Col>
      <Col span={16}>{schemaField}</Col>
    </Row>
  );
}
