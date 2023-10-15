import { NavigationContainer } from '@react-navigation/native'
import BottomNavigationBar from './components/BottomNavigationBar'
import { useState } from 'react'

export default function App() {
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(true)

  return (
    <NavigationContainer>
      <BottomNavigationBar isLoggedIn={isLoggedIn} />
    </NavigationContainer>
  )
}

// export { default } from '../.storybook'
