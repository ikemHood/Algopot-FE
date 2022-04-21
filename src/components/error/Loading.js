import React from "react";
import { Card, Typography, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';


const Loading = () => {
  return (
    <div className="Loading-cont">
      <Card
        className="spinner-border text-success"
        role="status"
        style={{ width: "50px", height: "50px" }}
      >
        <Typography.Title level={3} className="Loading-text"><LoadingOutlined style={{ fontSize: 24 }} spin />Loading...</Typography.Title>
      </Card>
    </div>
  );
};

export default Loading;
