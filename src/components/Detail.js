import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.posts.find((post) => post.id === Number(id)));
  const loading = useSelector((state) => state.posts.loading);

  const [showDetail, setShowDetail] = useState(false);
  const [showUserId, setShowUserId] = useState(false);

  useEffect(() => {
    // Fetch additional details for a single post if needed
    // Example: dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  const handleShowDetail = () => {
    setShowDetail(true);
    setShowUserId(false);
  };

  const handleShowUserId = () => {
    setShowUserId(true);
    setShowDetail(false);
  };

  return (
    <div>
      <div className='nav'>
        <h5>TravelMedia.in</h5>
        <div className='nav1'>
          <Link to="/">
            <img src='../assets/detail.home.png' alt='img' />
          </Link>
          <img src='../assets/bell.png' alt='img' />
          <img src='../assets/detail.save.png' alt='img' />
          <img src='../assets/person.png' alt='img' />
        </div>
      </div>

      <h1>Post Number #{id}</h1>

      <div className='flex-box-2'>
        <div className='post-container-2'>
          {loading && <p>Loading...</p>}
          {post && (
            <div>
              <h2>{post.title}</h2>
              {showDetail && <p>{post.body}</p>}
              {showUserId && <p>Post Was Posted By : {post.userId}</p>}
              {post && (
                <img
                  className="post-image"
                  src={`https://picsum.photos/200?random=${post.id}`}
                  alt={`Post ${post.id}`}
                />
              )}

              <div>
                <button
                  className={`detail-button ${showDetail ? 'active' : ''}`}
                  onClick={handleShowDetail}
                >
                  Details
                </button>
                <button
                  className={`user-info-button ${showUserId ? 'active' : ''}`}
                  onClick={handleShowUserId}
                >
                  User Info
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;

