/* import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Image,
  Paragraph,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(false)
  const onClickChange = () => {
    setLock(prevLock => !prevLock)
  }
  return (
    <MainContainer>
      {isLock ? (
        <SubContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Paragraph>Your Device is Unlocked</Paragraph>
          <Button type="button" onClick={onClickChange}>
            Lock
          </Button>
        </SubContainer>
      ) : (
        <SubContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Paragraph>Your Device is Locked</Paragraph>
          <Button type="button" onClick={onClickChange}>
            Unlock
          </Button>
        </SubContainer>
      )}
    </MainContainer>
  )
}
export default Unlock  */


import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </UnlockLockContainer>
  )
}

export default Unlock

