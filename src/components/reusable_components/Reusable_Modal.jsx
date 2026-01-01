import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import AchivementModalPage from './StudentModalComponents/AchivementModalPage';
import DashboardModalPage from './StudentModalComponents/DashboardModalPage';
import StoryViewModal from './adminDashboardModal/StoryViewModal';

const Reusable_Modal = ({ setIsModalOpen, isModalOpen, data, location, title, nestedLocation }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const renderComponent = () => {
    switch (location) {
      case 'achivement': 
        return <AchivementModalPage data={data} />;
      case 'notification':
        return <DashboardModalPage nestedLocation={nestedLocation} />;
        case 'storyView':
        return <StoryViewModal story={data} />
      default:
        return null;
    }
  };


  const getModalWidth = () => {
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    if (location === 'notification' && nestedLocation === 'badges' ) {
      return isMobile ? '95%' : '80%';
    }
    if(location === 'storyView'){
      return isMobile ? '95%' : (isTablet ? '80%' : '40%');
    }
    return isMobile ? '90%' : 400;
  };
  const getModalHeight = () => {
    const isMobile = windowWidth < 640;

    if (location === 'notification' && nestedLocation === 'badges') {
      return isMobile ? '70vh' : 600;
    }
    if(location ==='achivement'){
      return 300
    }
    if(location ==='storyView'){
      return '80vh'
    }
    return isMobile ? '60vh' : 500;
  };

  return (
    <Modal
      title={title}
      centered
      open={isModalOpen}
      styles={{ body: { height: getModalHeight(), overflowY: 'auto' } }} 
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