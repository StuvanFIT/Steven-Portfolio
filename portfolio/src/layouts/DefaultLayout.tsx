import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-mono">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default DefaultLayout
