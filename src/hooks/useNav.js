import { useState } from 'react'

export const useNav = () => {
  const [currentPage, setCurrentPage] = useState('Projects')

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return {
    currentPage,
    handlePageChange
  }
}
