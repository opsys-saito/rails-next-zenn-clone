import type { NextPage } from 'next'
import SimpleButton from '@/components/SimpleButton'

const HelloWorld: NextPage = () => {
  const handleClick = () => {
    console.log('Clicked from hello_world')
  }

  return (
    <>
      <h1>title</h1>
      <p>content</p>
      <SimpleButton text={'From HelloWorld'} onClick={handleClick} />
    </>
  )
}

export default HelloWorld
