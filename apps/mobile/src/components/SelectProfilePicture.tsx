import {TouchableWithoutFeedback, View} from 'react-native'
import {Image, Stack} from 'tamagui'
import SvgImage from './Image'
import MiniCameraSvg from './LoginFlow/components/PhotoScreen/images/miniCameraSvg'
import selectIconSvg from './LoginFlow/components/PhotoScreen/images/selectIconSvg'
import {useAtomValue, useSetAtom} from 'jotai'
import {useMolecule} from 'jotai-molecules'
import {changeProfilePictureMolecule} from './ChangeProfilePictureScope'

function SelectProfilePicture(): JSX.Element {
  const {selectedImageUriAtom, selectImageActionAtom} = useMolecule(
    changeProfilePictureMolecule
  )
  const selectImage = useSetAtom(selectImageActionAtom)
  const selectedImageUri = useAtomValue(selectedImageUriAtom)

  return (
    <TouchableWithoutFeedback onPress={selectImage}>
      {selectedImageUri._tag === 'Some' ? (
        <View>
          <Stack>
            <Image
              height={128}
              width={128}
              br="$10"
              src={{
                uri: selectedImageUri.value,
              }}
            />
            <Stack pos="absolute" t="$-4" r="$-4" width={32} h={32} zi="$1">
              <SvgImage source={MiniCameraSvg} />
            </Stack>
          </Stack>
        </View>
      ) : (
        <Stack w={128} h={128}>
          <SvgImage source={selectIconSvg} />
        </Stack>
      )}
    </TouchableWithoutFeedback>
  )
}

export default SelectProfilePicture