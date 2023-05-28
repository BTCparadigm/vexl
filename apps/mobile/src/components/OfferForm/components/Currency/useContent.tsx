import {type Currency} from '@vexl-next/domain/dist/general/offers'
import {useTranslation} from '../../../../utils/localization/I18nProvider'
import {type TabProps} from '../../../Tabs'
import {useMemo} from 'react'

export default function useContent(): Array<TabProps<Currency>> {
  const {t} = useTranslation()

  return useMemo(
    () => [
      {
        title: t('common.czk'),
        type: 'CZK',
      },
      {
        title: t('common.eur'),
        type: 'EUR',
      },
      {
        title: t('common.usd'),
        type: 'USD',
      },
    ],
    [t]
  )
}
