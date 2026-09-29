'use client';

import {useLayoutEffect,useRef} from 'react';
import {X} from 'lucide-react';

export default function ResponsiveDetailDialog({children,className='',labelledBy,onClose,title,eyebrow}){
  const dialogRef=useRef(null);
  useLayoutEffect(()=>{const dialog=dialogRef.current;if(!dialog)return;if(!dialog.open)try{dialog.showModal()}catch{dialog.setAttribute('open','')}return()=>{if(dialog.open)dialog.close()}},[]);
  return <dialog ref={dialogRef} className={'lo-detail-dialog '+className} aria-labelledby={labelledBy} onClose={onClose} onCancel={event=>{event.preventDefault();dialogRef.current?.close()}} onClick={event=>{if(event.target===event.currentTarget)event.currentTarget.close()}}><section className="lo-detail-dialog__surface">
    {(title||eyebrow)&&<header className="lo-detail-dialog__head"><div>{eyebrow&&<p>{eyebrow}</p>}{title&&<h2 id={labelledBy}>{title}</h2>}</div><form method="dialog"><button type="submit" aria-label={'Close '+(title||'dialog')}><X size={18}/></button></form></header>}
    <div className="lo-detail-dialog__body">{children}</div>
  </section></dialog>;
}
