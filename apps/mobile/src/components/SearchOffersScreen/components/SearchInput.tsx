import Input from '../../Input'
import {Stack} from 'tamagui'
import React, {useCallback} from 'react'
import {useAtom, useSetAtom} from 'jotai'
import {searchTextAtom} from '../atoms/searchTextAtom'
import submitSearchActionAtom from '../atoms/submitSearchActionAtom'

function SearchInput(): JSX.Element {
  const [searchText, setSearchText] = useAtom(searchTextAtom)
  const submit = useSetAtom(submitSearchActionAtom)

  const onSubmit = useCallback(() => {
    submit()
  }, [submit])

  return (
    <Stack flex={1}>
      <Input
        autoFocus
        onSubmitEditing={onSubmit}
        returnKeyType={'search'}
        variant={'greyOnBlack'}
        value={searchText}
        onChangeText={setSearchText}
      />
    </Stack>
  )
}

export default SearchInput
