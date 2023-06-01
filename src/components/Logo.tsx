import React from 'react'
import { MainContent } from './MainContent'
import {SocialLinks} from './SocialLinks'
import { HomeLink } from './HomeLink'
export const Logo = () => {
  return (
    <div className='relative max-w-[80%] min-w-[50%] grow-[2] min-h-[70vh] md:max-w-[50%] rounded-lg  bg-[url("https://s3-alpha-sig.figma.com/img/4ee0/0006/3107c45a2adce01efe60a8d70e6ea4b2?Expires=1686528000&Signature=fKFWzA9lTvSQzhvVmEF-uTw9uCglvVRZgUNymHPaNERX9~UZQ5cfrjRrSf7pl2DoLnEK-aRY9rqyq1oYrJoEA4TKp~NVP4c~-1DONZUrBu8-z8-3A0qIq~Hn460Ooz7ibOdx8WMRKkogTEqLzF3guGna7WCm36~szrOwqLci07zeY2O6oiA6s1JRLI3ymy6Sb52puEed7z0tK-mjnSOgqHgO8hiPoigkaV3eTdRZRAvsV4nF68WWTb5F7kt8OF2QveG2HCfP4-rtIZK3-REMwP6cMXvEbwWv-P0-h89iX5W~O-rCBoUPrQY2JZ5mxaavZm7oxO-jr1TbortdXcDfjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")]'>
        <MainContent></MainContent>
        <SocialLinks></SocialLinks>
        <HomeLink></HomeLink>
    </div>
    
  )
}
