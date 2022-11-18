import React from 'react';
import Topbar from '../../components/commons/Topbar/Topbar';
import SeachFliters from '../../components/partials/SeachFilter/SeachFliters';
import SearchResult from '../../components/partials/SearchResult/SearchResult';

import './ResultPage.scss'


export default function ResultPage(props) {
    return (
        <div className='container-ResultPage'>
          <Topbar styleNav={false}/>
          <article>
            <SeachFliters /> 
          </article>
          <SearchResult />
        </div>
    );
}

