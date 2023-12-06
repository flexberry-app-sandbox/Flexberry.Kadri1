import { Serializer as АнкетыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kadri-анкеты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АнкетыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
