import { UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

const items = [
  {
    key: '1',
    label: 'User Info',
  },
  {
    key: '4',
    danger: true,
    label: (
      <a target="_self" href='/login' onClick={() => {
        localStorage.removeItem('token')
      }}>
        Log out
      </a>
    ),
  },
];
const UserInfo1 = () => {


  return (
    <>
      <Dropdown menu={{items}}>
        <a onClick={(e) => e.preventDefault()}>
          <UserOutlined />
        </a>
      </Dropdown>
      <QuestionCircleOutlined style={{ fontSize: '24px', marginRight: '30px' }} />
    </>

  )
}
export default UserInfo1;
