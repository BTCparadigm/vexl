import {getTokens, Stack, Text, XStack} from 'tamagui'
import {useTranslation} from '../utils/localization/I18nProvider'
import {type Atom, useAtomValue} from 'jotai'
import {type OfferType} from '@vexl-next/domain/dist/general/offers'
import Slider from './Slider'
import {iosHapticFeedback} from '../utils/iosHapticFeedback'

export const SLIDER_THRESHOLD = 10

interface Props {
  sliderThreshold: number
  sliderValue: number
  onValueChange: (_: number[]) => void
  offerTypeAtom: Atom<OfferType | undefined>
}

function PremiumOrDiscountSlider({
  sliderThreshold,
  onValueChange,
  sliderValue,
  offerTypeAtom,
}: Props): JSX.Element {
  const tokens = getTokens()
  const {t} = useTranslation()
  const offerType = useAtomValue(offerTypeAtom)

  return (
    <Stack
      p={'$4'}
      br={'$4'}
      bc={
        sliderValue === 0
          ? '$grey'
          : Math.abs(sliderValue) > sliderThreshold / 2
          ? '$redAccent1'
          : '$darkBrown'
      }
    >
      <XStack f={1} jc={'space-between'} mb={'$4'}>
        <Text
          fos={16}
          col={
            sliderValue >= 0
              ? '$greyOnBlack'
              : sliderValue < -sliderThreshold / 2
              ? '$red'
              : '$main'
          }
          numberOfLines={2}
          adjustsFontSizeToFit
          maxWidth={'50%'}
        >
          {offerType === 'BUY'
            ? t('offerForm.premiumOrDiscount.buyCheaply')
            : t('offerForm.premiumOrDiscount.sellFaster')}
        </Text>
        <Text
          col={
            sliderValue <= 0
              ? '$greyOnBlack'
              : sliderValue > sliderThreshold / 2
              ? '$red'
              : '$main'
          }
          numberOfLines={2}
          adjustsFontSizeToFit
          maxWidth={'50%'}
        >
          {offerType === 'BUY'
            ? t('offerForm.premiumOrDiscount.buyFaster')
            : t('offerForm.premiumOrDiscount.earnMore')}
        </Text>
      </XStack>
      <Slider
        customKnobColor={
          Math.abs(sliderValue) <= sliderThreshold / 2 ? '$main' : '$red'
        }
        minimumTrackTintColor={tokens.color.greyOnWhite.val}
        maximumValue={sliderThreshold}
        minimumValue={-sliderThreshold}
        step={1}
        value={sliderValue}
        onValueChange={(value) => {
          if (value[0] !== sliderValue) {
            iosHapticFeedback()
            onValueChange(value)
          }
        }}
      />
    </Stack>
  )
}

export default PremiumOrDiscountSlider
