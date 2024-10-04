import React from 'react';

interface DashboardHeaderProps {
    titleLeft: string;
    titleRight: string;
    subtitle: string;
    icon: React.ReactElement
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({titleLeft,titleRight,subtitle,icon}) => {
    return (
        <div className="titledashboard flex flex-sb">
            <div>
                <h2>{titleLeft}<span>{titleRight}</span></h2>
                <h3>{subtitle}</h3>
            </div>
            <div className="breadcrumb">
                {icon as React.ReactElement} <span>/</span> <span>{titleRight}</span>
            </div>
        </div>
    );
};

export default DashboardHeader;
