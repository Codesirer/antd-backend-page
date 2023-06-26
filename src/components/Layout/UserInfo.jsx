import {  Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserInfo = () => {
  const items = [
    {
      key: '1',
      label: '1st menu item'
    },
    {
      key: '4',
      danger: true,
      label: 'Log Out',
    },
  ];

  return (
    <Dropdown menu={items}>
      <a onClick={(e) => e.preventDefault()}>
        <UserOutlined style={{ fontSize: '24px', marginRight: '20px' }} />
      </a>
    </Dropdown>
  )
}

export default UserInfo;
