import {pipe} from 'fp-ts/function'
import {PrivateKeyHolder} from '@vexl-next/cryptography/dist/KeyHolder'
import * as TE from 'fp-ts/TaskEither'
import {getPrivateApi} from '../api'
import {parseCredentialsJson} from '../utils/auth'
import {
  parseJson,
  safeParse,
  stringifyToPrettyJson,
} from '@vexl-next/resources-utils/dist/utils/parsing'
import * as E from 'fp-ts/Either'

export default function deletePulled({
  inboxKeyPairJson,
  userCredentialsJson,
}: {
  inboxKeyPairJson: string
  userCredentialsJson: string
}) {
  return pipe(
    TE.Do,
    TE.bindW('credentials', () =>
      TE.fromEither(parseCredentialsJson(userCredentialsJson))
    ),
    TE.bindW('inboxKeyPair', () =>
      pipe(
        inboxKeyPairJson,
        parseJson,
        E.chainW(safeParse(PrivateKeyHolder)),
        TE.fromEither
      )
    ),
    TE.bindW('api', ({credentials}) => TE.right(getPrivateApi(credentials))),
    TE.chainW(({api, inboxKeyPair}) =>
      api.chat.deletePulledMessages({keyPair: inboxKeyPair})
    ),
    TE.chainEitherKW(stringifyToPrettyJson)
  )
}