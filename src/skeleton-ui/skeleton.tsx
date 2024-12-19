import React from "react";
import { Skeleton, Space } from "antd";

interface SkeletonLoadingProps {
  number: number;
}
const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ number }) => {
  const skeletonItems = Array.from({ length: number }, (_, index) => (
    <Skeleton.Input key={index} active size="large" />
  ));
  return (
    <Space direction="vertical" size="large">
      {skeletonItems}
    </Space>
  );
};

export default SkeletonLoading;
