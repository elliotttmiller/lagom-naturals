'use client';

import {useEffect} from 'react';

export default function CRMRedirect(){
  useEffect(()=>{
    const base=process.env.NEXT_PUBLIC_APP_BASE_PATH||'';
    window.location.replace(base+'/#/crm-accounts');
  },[]);
  return <div className="lo-loading-page"><div className="lo-loading-mark"/><strong>Opening CRM</strong></div>;
}
