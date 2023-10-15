import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar'
import {
  ICON_HOME,
  ICON_HOME_ACTIVE,
  ICON_LOGIN,
  ICON_LOGIN_ACTIVE,
} from '../constants/assets'
import AvatarScreen from './Pages/AvatarScreen'
import MenuScreen from './Pages/MenuScreen'
import HomeScreen from './Pages/HomeScreen'
import RewardScreen from './Pages/RewardScreen'
import QuickAccessScreen from './Pages/QuickAccessScreen'
import BottomNavigationBarItem from './BottomNavigationBarItem'

type Props = {
  isLoggedIn: boolean
}

const BottomNavigationBar = ({ isLoggedIn }: Props) => {
  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: {
    routeName: string
    selectedTab: string
    navigate: (selectedTab: string) => void
  }) => (
    <BottomNavigationBarItem
      routeName={routeName}
      selectedTab={selectedTab}
      navigate={navigate}
    />
  )

  return (
    <CurvedBottomBar.Navigator
      screenOptions={{ headerShown: false }}
      type="DOWN"
      shadowStyle={styles.shadow}
      height={72}
      circleWidth={60}
      bgColor="white"
      initialRouteName={isLoggedIn ? 'Home' : 'Login'}
      renderCircle={({ selectedTab, navigate }) => (
        <TouchableOpacity
          className={`w-[60px] h-[60px] rounded-full items-center justify-center bottom-7 ${
            selectedTab === 'Home' || selectedTab === 'Login'
              ? 'bg-primary'
              : 'bg-white'
          }`}
          onPress={() => navigate(isLoggedIn ? 'Home' : 'Login')}
        >
          {isLoggedIn ? (
            <Image
              className="w-[25px] h-[25px]"
              source={selectedTab === 'Home' ? ICON_HOME_ACTIVE : ICON_HOME}
            />
          ) : (
            <>
              <Image
                className="w-[19.5px] h-[21px] mr-1"
                source={
                  selectedTab === 'Login' ? ICON_LOGIN_ACTIVE : ICON_LOGIN
                }
              />
              <View className="h-1.5" />
              <Text
                className={`text-[10px] font-extrabold ${
                  selectedTab === 'Login' ? 'text-white' : 'text-primary'
                }`}
              >
                Login
              </Text>
            </>
          )}
        </TouchableOpacity>
      )}
      tabBar={renderTabBar}
    >
      <CurvedBottomBar.Screen
        name="Avatar"
        position="LEFT"
        component={() => <AvatarScreen />}
      />
      <CurvedBottomBar.Screen
        name="Menu"
        position="LEFT"
        component={() => <MenuScreen />}
      />
      <CurvedBottomBar.Screen
        name="Home"
        position="CIRCLE"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBar.Screen
        name="Login"
        position="CIRCLE"
        component={() => <HomeScreen />}
      />
      <CurvedBottomBar.Screen
        name="Rewards"
        component={() => <RewardScreen />}
        position="RIGHT"
      />
      <CurvedBottomBar.Screen
        name="Quick Access"
        component={() => <QuickAccessScreen />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  )
}

export default BottomNavigationBar

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})
