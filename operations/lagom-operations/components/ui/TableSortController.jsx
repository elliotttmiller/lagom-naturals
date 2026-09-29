'use client';

import {useEffect} from 'react';

const numeric=/^-?\$?[\d,]+(?:\.\d+)?%?$/;
const comparable=text=>{const value=String(text||'').trim();if(!value)return '';if(numeric.test(value))return Number(value.replace(/[$,%]/g,''));const date=Date.parse(value);return Number.isNaN(date)?value.toLocaleLowerCase():date};
const headers=table=>table.tagName==='TABLE'?[...table.querySelectorAll('thead th')]:[...table.querySelectorAll(':scope > .lo-recent-table__head > span, :scope > .lo-mini-table-head > span')];
const rows=table=>table.tagName==='TABLE'?[...table.tBodies[0]?.rows||[]]:table.classList.contains('lo-recent-table')?[...table.querySelectorAll(':scope > .lo-recent-table__row')]:[...table.querySelectorAll(':scope > div:not(.lo-mini-table-head)')];
const cell=(row,index)=>row.cells?row.cells[index]:row.children[index];

function sortButton(label){
  const button=document.createElement('button');button.type='button';button.className='lo-table-sort-button';button.setAttribute('aria-label','Sort by '+label);button.setAttribute('aria-sort','none');
  const text=document.createElement('span');text.className='lo-table-sort-button__label';text.textContent=label.replace(/[⌄↕]/g,'').trim();
  const chevron=document.createElement('span');chevron.className='lo-table-sort-indicator';chevron.setAttribute('aria-hidden','true');chevron.innerHTML='<i></i><i></i>';
  button.append(text,chevron);return button;
}

function enhance(table,cleanups){
  table.classList.add('lo-shared-table');
  headers(table).forEach((header,index)=>{
    if(!header.textContent?.trim()||header.querySelector('.lo-table-sort-button'))return;
    const button=sortButton(header.textContent);header.replaceChildren(button);
    const onSort=()=>{
      const direction=table.dataset.sortColumn===String(index)&&table.dataset.sortDirection==='ascending'?'descending':'ascending';
      const ordered=rows(table).map((row,position)=>({row,position,value:comparable(cell(row,index)?.textContent)})).sort((a,b)=>{
        const compared=typeof a.value==='number'&&typeof b.value==='number'?a.value-b.value:String(a.value).localeCompare(String(b.value),undefined,{numeric:true,sensitivity:'base'});return (direction==='ascending'?compared:-compared)||a.position-b.position;
      });
      const destination=table.tagName==='TABLE'?table.tBodies[0]:table;ordered.forEach(({row})=>destination.appendChild(row));table.dataset.sortColumn=String(index);table.dataset.sortDirection=direction;
      headers(table).forEach(cell=>{const control=cell.querySelector('.lo-table-sort-button');if(control){const active=control===button;control.setAttribute('aria-sort',active?direction:'none');control.classList.toggle('is-active',active)}});
    };
    button.addEventListener('click',onSort);cleanups.push(()=>button.removeEventListener('click',onSort));
  });
}

export default function TableSortController(){
  useEffect(()=>{
    const cleanups=[];const scan=()=>document.querySelectorAll('table.lo-data-table, table.lo-admin-table, .lo-detail-dialog table, .lo-modal table, .ops-modal table, .lo-recent-table, .lo-mini-table').forEach(table=>enhance(table,cleanups));
    scan();const observer=new MutationObserver(records=>{if(records.some(record=>[...record.addedNodes].some(node=>node.nodeType===1&&!node.closest?.('.lo-table-sort-button'))))scan()});observer.observe(document.querySelector('.lo-content')||document.body,{childList:true,subtree:true});
    return()=>{observer.disconnect();cleanups.forEach(cleanup=>cleanup())};
  },[]);
  return null;
}
