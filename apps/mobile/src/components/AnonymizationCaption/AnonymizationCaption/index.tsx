import styled from '@emotion/native'
import {useTranslation} from '../../../utils/localization/I18nProvider'
import Text from '../../Text'
import {type StyleProp, type ViewStyle} from 'react-native'
import Image from '../../Image'
import eyeSvg from './image/eyeSvg'

const RootContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const Icon = styled(Image)`
  margin-right: 8px;
`

const TextStyled = styled(Text)``

interface Props {
  style?: StyleProp<ViewStyle>
  fontSize?: number
  text?: string
}

function AnonymizationCaption({style, fontSize, text}: Props): JSX.Element {
  const {t} = useTranslation()

  const textToDisplay = text ?? t('loginFlow.anonymityNotice')

  return (
    <RootContainer style={style}>
      <Icon source={eyeSvg} />
      <TextStyled colorStyle="gray" style={{fontSize: fontSize ?? 16}}>
        {textToDisplay}
      </TextStyled>
    </RootContainer>
  )
}

export default AnonymizationCaption