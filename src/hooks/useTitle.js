import React, { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(()=>{
        document.title=`${title}/Movie`
      })
  return null
}

export default useTitle