import Text from '@/components/base/Text'

const Header = () => {
  return (
    <header className="flex bg-white border-b border-gray-200 justify-center w-full">
      <div className="flex-col w-[1200px] px-8 py-6">
        <Text as="h1" type="TITLE" weight="bold" className="text-3xl">
          쇼핑몰 구매 데이터 대시보드
        </Text>
        <Text type="CAPTION" color="text-gray-500" className="mt-1">
          2024년 7월 구매 데이터 분석
        </Text>
      </div>
    </header>
  )
}

export default Header
