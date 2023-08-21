import {useState} from 'react'

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
export default Unlock
