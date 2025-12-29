import { Button, Modal } from 'antd';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import AchivementModalPage from './StudentModalComponents/AchivementModalPage';
import DashboardModalPage from './StudentModalComponents/DashboardModalPage';

const Reusable_Modal = ({ setIsModalOpen, isModalOpen, data, location, title, nestedLocation }) => {
  
  const renderComponent = () => {
    switch (location) {
      case 'achivement': 
        return <AchivementModalPage data={data} />;
      case 'notification':
        return <DashboardModalPage nestedLocation={nestedLocation} />;
      default:
        return null;
    }
  };


  const getModalWidth = () => {
    if (location === 'notification' && nestedLocation === 'badges') {
      return '80%';
    }
    return 400;
  };
  const getModalHeight = () => {
    if (location === 'notification' && nestedLocation === 'badges') {
      return 600;
    }
    if(location ==='achivement'){
      return 300
    }
    return 500;
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      styles={{ body: { height: getModalHeight() } }} 
      width={getModalWidth()}  
      onOk={(e) => {
        e.stopPropagation();
        setIsModalOpen(false);
      }}
      onCancel={(e) => {
        e.stopPropagation();
        setIsModalOpen(false);
      }}
      footer={null}
    >
      {renderComponent()}
    </Modal>
  );
};

export default Reusable_Modal;