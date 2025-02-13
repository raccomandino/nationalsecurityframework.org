import { useContext } from 'react'
import { RefreshContext } from '../contexts/RefreshContext'

const useRefresh = () => {
  const { fast, slow, api } = useContext(RefreshContext)
  return { fastRefresh: fast, slowRefresh: slow, apiRefresh: api }
}

export default useRefresh
