import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTest, setTestAsync, selectTest } from '@/store/test.slice'
import { Button, Space } from 'antd'
function Home() {
  const dispatch = useDispatch()
  const name = useSelector(selectTest)
  const setTestValue = () => {
    dispatch(setTest(new Date().getTime().toString()))
  }
  const setAsyncTestValue = () => {
    dispatch(setTestAsync(new Date().getTime().toString()) as any)
  }

  return (
    <div>
      <Space>
        <Button type='primary' onClick={setTestValue}>
          设置redux
        </Button>
        <Button type='primary' onClick={setAsyncTestValue}>
          异步延迟一秒设置redux
        </Button>
      </Space>
      {name}
      <Outlet />
    </div>
  )
}

export default Home
