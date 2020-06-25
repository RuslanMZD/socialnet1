import React from 'react';
import s from './Paginator.module.css';
import * as axios from 'axios';
import { tsConstructorType } from '@babel/types';
import {NavLink} from "react-router-dom";
import { usersAPI } from '../../api/api';

import {useState, useEffect} from "react";
import cn from 'classnames';


const Paginator = (props)=>{
    let pagesCount= Math.ceil(props.totalUsersCount/ props.pageSize);
   
    let pages = [];
 
    for(let i=1;i<=pagesCount;i++){
         pages.push(i);};
         

let portionCount=Math.ceil(pagesCount/props.portionSize);
let [portionNumber, setPortionNumber] = useState(1);
let leftPortionPageNumber=(portionNumber-1)*props.portionSize +1;
let rightPortionPageNumber = portionNumber * props.portionSize;



return(
<div className={s.paginator}>
    {portionNumber >1 && 
    <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}

    {pages.filter(p=>p>= leftPortionPageNumber && p<=rightPortionPageNumber).map((p)=>{
        return <span className={cn({[s.selectedPage]:props.currentPage===p},s.pageNumber)}  // cn для назначения двух классов, : - это если выполняется условие
        key={p}
        onClick={(e)=>{props.onPageChanged(p); 
        }}>{p}</span>

    }
    )
    
    }

    {portionCount > portionNumber && 
    <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NExT</button>}

{/* {pages.map(p=> <span onClick={(e)=>{props.onPageChanged(p)}} className={props.currentPage===p && s.selectedPage  }> {p}</span>)}   -  эТО до ПАГИНАТОРА все страницы разом */}





</div>
)}


export default Paginator;