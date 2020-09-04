import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getUserProfileAsync } from '../modules/github';
import GithubUsernameForm from '../components/GithubUsernameForm';
import GithubProfileInfo from '../components/GithubProfileInfo';

function GithubProfileLoader() {
  const { data: profile, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile
  );
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileAsync.request(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {profile && (
        <GithubProfileInfo
          bio={profile.bio}
          blog={profile.blog}
          name={profile.name}
          thumbnail={profile.avatar_url}
        />
      )}
    </>
  );
}

export default GithubProfileLoader;
