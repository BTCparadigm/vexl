import React, {useCallback} from 'react'
import {Stack} from 'tamagui'
import {
  type CurrencyCode,
  type CurrencyInfo,
} from '@vexl-next/domain/dist/general/currency.brand'
import CurrencySelectListItem from './CurrencySelectListItem'
import {type Atom, type WritableAtom} from 'jotai'
import {FlatList} from 'react-native'
import atomKeyExtractor from '../../../utils/atomUtils/atomKeyExtractor'

interface Props {
  currencies: Array<Atom<CurrencyInfo>>
  selectedCurrencyCodeAtom: Atom<CurrencyCode | undefined>
  onItemPress: () => void
  updateCurrencyLimitsAtom: WritableAtom<
    null,
    [
      {
        currency: CurrencyCode
      }
    ],
    boolean
  >
}

function ItemSeparatorComponent(): JSX.Element {
  return <Stack h={2} bc={'$greyAccent1'} />
}

function CurrenciesList({
  currencies,
  selectedCurrencyCodeAtom,
  onItemPress,
  updateCurrencyLimitsAtom,
}: Props): JSX.Element {
  const renderItem = useCallback(
    ({item: currencyAtom}: {item: Atom<CurrencyInfo>}): JSX.Element => (
      <CurrencySelectListItem
        currencyAtom={currencyAtom}
        selectedCurrencyCodeAtom={selectedCurrencyCodeAtom}
        onItemPress={onItemPress}
        updateCurrencyLimitsAtom={updateCurrencyLimitsAtom}
      />
    ),
    [onItemPress, selectedCurrencyCodeAtom, updateCurrencyLimitsAtom]
  )
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={currencies}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      keyExtractor={atomKeyExtractor}
    />
  )
}

export default CurrenciesList
