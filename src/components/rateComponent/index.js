import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import React from 'react';
import 'antd/dist/antd.css';

export default function RateComponent() {

    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
      };

    return (
        <div>
           
    
    <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
  
        </div>
    )
}

