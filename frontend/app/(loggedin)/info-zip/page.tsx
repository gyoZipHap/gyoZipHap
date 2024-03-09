
'use client';

import SearchBar from './_components/searchBar/SearchBar';
import CategoryGroup from './_components/category/CategoryGroup';
import PostList from './_components/post/PostList';
import NewPostButton from './_components/post/NewPostButton';
import { useState } from 'react';

export default function InfoZip() {
  const [filtered, setFiltered] = useState('전체');
  return (
    <div className=''>
      <div className='fixed top-[73px] overflow-hidden bg-white'>
        <SearchBar />
        <CategoryGroup setFiltered={setFiltered} filtered={filtered} />
      </div>
      <div className='flex w-full flex-row-reverse overflow-hidden pt-[110px]'>
        <PostList filtered={filtered}/>
        <NewPostButton />
      </div>
    </div>
  );
  }
