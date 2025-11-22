import Header from './components/Header'
import PurchaseFrequencySection from './components/PurchaseFrequencySection'
import CustomerListSection from './components/CustomerListSection'
import CustomerDetailSection from './components/CustomerDetailSection'

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 items-center">
      <Header />
      <main className="w-[1200px] p-8 space-y-6">
        <PurchaseFrequencySection />
        <div className="flex gap-6">
          <CustomerListSection />
          <CustomerDetailSection />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
