import React from 'react'
import Intern_detail from './Intern_detail'
import internData from './Props/intern.json'
function Intern() {
  
  return (
    <>
    <div>Intern</div>
    {Object.entries(internData).map(([key,companyArray]) =>{
      return companyArray.map((company) =>{
        return <Intern_detail key={company.Name} company={company}/>
      })
    })}
    
    </>

  )
}

export default Intern