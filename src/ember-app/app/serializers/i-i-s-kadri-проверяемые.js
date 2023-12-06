import { Serializer as ПроверяемыеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kadri-проверяемые';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПроверяемыеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
