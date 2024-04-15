import React from 'react'
import TopTab from '../../components/TopTab'
import BottomTab from '../../components/BottomTab'
import WelcomeFarmPage from '../farm-register/WelcomeFarmPage'

const RegisterFarmFlow = () => {
  return (
    <div>
        <TopTab />
        <WelcomeFarmPage />
        <BottomTab setActiveTab='Farm' />
    </div>
  )
}

export default RegisterFarmFlow