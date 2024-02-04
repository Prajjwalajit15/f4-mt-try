import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='nav'>
        <h5>TravelMedia.in</h5>
        <div className='nav1'>
          <img src='../assets/home.png' alt='img' />
          <img src='../assets/bell.png' alt='img' />
          <img src='../assets/save.png' alt='img' />
          <img src='../assets/person.png' alt='img' />
        </div>
      </div>

      <h1 className="fixed-title">Social Media For Travellers</h1>

      <input
        className="fixed-input"
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex-box'>
      {loading && <p>Loading...</p>}

      {filteredPosts.map((post) => (
        <div key={post.id} className="post-container"> 
          <img
            className="post-image"
            src={`https://picsum.photos/200?random=${post.id}`}
            alt={`Post ${post.id}`}
          />
          <h2>{post.title}</h2>
          <p>{post.body.slice(0, 100)}...</p>
          <Link to={`/item/${post.id}`}>Read More...</Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;


