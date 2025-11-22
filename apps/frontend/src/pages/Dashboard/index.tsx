import Header from './components/Header'
import PurchaseFrequencySection from './components/PurchaseFrequencySection'

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 items-center">
      <Header />
      <main className="w-[1200px] p-8">
        <PurchaseFrequencySection />
      </main>
    </div>
  )
}

export default Dashboard
