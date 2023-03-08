import * as TE from 'fp-ts/TaskEither'
import {type CreateUserRequest} from '@vexl-next/rest-api/dist/services/contact/contracts'
import {useTranslation} from '../../../utils/localization/I18nProvider'
import {pipe} from 'fp-ts/function'
import {type UserSessionCredentials} from '@vexl-next/rest-api/dist/UserSessionCredentials.brand'
import {contact} from '@vexl-next/rest-api'
import {apiEnv, platform} from '../../../api'

export function useCreateUserAtContactMs(): (
  request: CreateUserRequest,
  session: UserSessionCredentials
) => TE.TaskEither<string, void> {
  const {t} = useTranslation()

  return (request: CreateUserRequest, credentials: UserSessionCredentials) => {
    const contactApi = contact.privateApi({
      platform,
      url: apiEnv.contactMs,
      getUserSessionCredentials: () => credentials,
    })

    return pipe(
      contactApi.createUser(request),
      TE.mapLeft((l) => {
        switch (l._tag) {
          case 'UnexpectedApiResponseError':
            return t('common.unexpectedServerResponse')
          case 'UnknownError':
          case 'BadStatusCodeError':
            return t('common.unknownError')
        }
        return t('common.unknownError')
      })
    )
  }
}