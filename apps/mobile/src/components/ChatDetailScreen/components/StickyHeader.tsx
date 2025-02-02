import {getTokens, Stack, Text, XStack, YStack} from 'tamagui'
import {useMolecule} from 'jotai-molecules'
import {chatMolecule} from '../atoms'
import {useAtom, useAtomValue} from 'jotai'
import {useTranslation} from '../../../utils/localization/I18nProvider'
import {useMemo} from 'react'
import {formatCurrencyAmount} from '../../../utils/localization/currency'
import SvgImage from '../../Image'
import closeSvg from '../../images/closeSvg'
import {TouchableWithoutFeedback} from 'react-native'

function Bullet(): JSX.Element {
  return <Stack bg={'$greyOnWhite'} w={'$1'} h={'$1'} br={'$1'} mx="$2" />
}

function StickyHeader(): JSX.Element | null {
  const {t} = useTranslation()
  const {offerForChatAtom, otherSideDataAtom, showInfoBarAtom} =
    useMolecule(chatMolecule)
  const offer = useAtomValue(offerForChatAtom)
  const otherSideData = useAtomValue(otherSideDataAtom)
  const [showInfoBar, setShowInfoBar] = useAtom(showInfoBarAtom)

  const offerAmount = useMemo(() => {
    if (!offer) return null

    return formatCurrencyAmount(
      offer.offerInfo.publicPart.currency,
      offer.offerInfo.publicPart.amountTopLimit
    )
  }, [offer])

  const paymentMethodsText = useMemo(() => {
    if (!offer) return null

    const result: string[] = []
    if (offer.offerInfo.publicPart.paymentMethod.includes('CASH')) {
      result.push(t('offerForm.paymentMethod.cash'))
    }
    if (offer.offerInfo.publicPart.paymentMethod.includes('BANK')) {
      result.push(t('offerForm.paymentMethod.bank'))
    }
    if (offer.offerInfo.publicPart.paymentMethod.includes('REVOLUT')) {
      result.push(t('offerForm.paymentMethod.revolut'))
    }
    return result.join(', ')
  }, [offer, t])

  if (!offer || !showInfoBar) return null
  return (
    <XStack
      justifyContent="space-between"
      py={'$2'}
      px={'$4'}
      mt={'$4'}
      borderColor="$grey"
      borderTopWidth={1}
      borderBottomWidth={1}
    >
      <YStack f={1}>
        <Text color="$white" fontFamily="$body500" fos={16} numberOfLines={1}>
          <Text color={'$main'}>
            {offer.ownershipInfo?.adminId
              ? t('common.me')
              : otherSideData.userName}
            :{' '}
          </Text>
          {offer.offerInfo.publicPart.offerDescription}
        </Text>
        <XStack alignItems={'center'}>
          <Text fontFamily="$body500" fos={14} color={'$greyOnWhite'}>
            {t('offer.upTo')}: {offerAmount}
          </Text>
          <Bullet />
          <Text fontFamily="$body500" fos={14} color={'$greyOnWhite'}>
            {paymentMethodsText}
          </Text>
          {offer.offerInfo.publicPart.paymentMethod.includes('CASH') && (
            <>
              <Bullet />
              <Text fontFamily="$body500" fos={14} color={'$greyOnWhite'}>
                {offer.offerInfo.publicPart.location
                  .map((one) => one.city)
                  .join(', ')}
              </Text>
            </>
          )}
        </XStack>
      </YStack>
      <Stack>
        <TouchableWithoutFeedback
          onPress={() => {
            setShowInfoBar(false)
          }}
        >
          <SvgImage
            stroke={getTokens().color.greyOnWhite.val}
            source={closeSvg}
          />
        </TouchableWithoutFeedback>
      </Stack>
    </XStack>
  )
}

export default StickyHeader
