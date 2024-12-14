'use client'

import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Dashboard from "./Dashboard/page";
import Studios from "./Studios/page";
import Laoding from './components/Laoding';
import { useRouter,useSearchParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
const searchParams = useSearchParams();

 const tab = searchParams.get('tab');

  const [activeTab, setActiveTab] = useState('Dashboard');

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const onShow = (activeTab: string) => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Studios':
        return <Studios />;
      default:
        return <div><Laoding     bg={'#91cb3e'}
    color ={'#322a57'}
    width={'16'}
height={'16'}/></div>;
    }
  };

  return (
    <div>
      <NavBar setActive={setActiveTab} activeTab={activeTab} />
    
        {activeTab && onShow(activeTab)}

    </div>
  );
}
