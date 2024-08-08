import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { DjradioWrapper } from './style'
import TopDjradio from './dj-top'
import ProgramRecommend from './dj-recommend'
import ProgressRanking from './dj-ranking'
// import RadioItem from './04-radio-item'
import { useAppDispatch } from '@/hooks/store'
import { getRadioRecommend, getRadioCategories } from '@/store/modules/djradio'
// , getRadios

interface IProps {
  children?: ReactNode
}

const Djradio: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRadioCategories())
    dispatch(getRadioRecommend())
    // dispatch(getRadios())
  }, [])

  return (
    <DjradioWrapper className="Djradio-box wrap-v2">
      <TopDjradio />
      <div className="middle">
        <ProgramRecommend />
        <ProgressRanking />
      </div>
      {/* <RadioItem /> */}
    </DjradioWrapper>
  )
}

export default memo(Djradio)
