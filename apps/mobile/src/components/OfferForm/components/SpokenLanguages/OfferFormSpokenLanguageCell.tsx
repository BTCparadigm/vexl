import {useTranslation} from '../../../../utils/localization/I18nProvider'
import {type Atom, type WritableAtom, useAtomValue, useSetAtom} from 'jotai'
import SelectableCell from '../../../SelectableCell'
import {type SpokenLanguage} from '@vexl-next/domain/dist/general/offers'

interface Props {
  spokenLanguageAtom: Atom<SpokenLanguage>
  removeSpokenLanguageActionAtom: WritableAtom<
    null,
    [spokenLanguage: SpokenLanguage],
    void
  >
}

function OfferFormSpokenLanguageCell({
  spokenLanguageAtom,
  removeSpokenLanguageActionAtom,
}: Props): JSX.Element {
  const {t} = useTranslation()
  const spokenLanguage = useAtomValue(spokenLanguageAtom)
  const removeSpokenLanguage = useSetAtom(removeSpokenLanguageActionAtom)

  return (
    <SelectableCell
      selected
      onPress={removeSpokenLanguage}
      size={'small'}
      title={t(`offerForm.spokenLanguages.${spokenLanguage}`)}
      type={spokenLanguage}
    />
  )
}

export default OfferFormSpokenLanguageCell
