import React from 'react'
import Filter from './Filter'
import Notice from './Notice'
const List = ({listing, SE, sSE, select, setSkill, Skill, pricing, setPricing}) => {

  return (
    <div className='NoticeBoard'>
        <Notice list={listing} display={select}/>
        <Filter selectedExperience={SE} setSelectedExperience={sSE} selectedSkills={Skill} setSelectedSkills={setSkill} selectedPricing={pricing} setSelectedPricing={setPricing} />
    </div>
  )
}

export default List