import {
  type Uuid,
  generateUuid as generateUuidFromDomain,
} from '@vexl-next/domain/dist/utility/Uuid.brand'

/**
 * @deprecated Use {@link generateUuidFromDomain} instead
 */
export default function generateUuid(): Uuid {
  return generateUuidFromDomain()
}
