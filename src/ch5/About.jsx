import React from 'react';

const About = ({ location }) => {
  let urlSearchParams = new URLSearchParams(location.search.slice(1));
  const detail = !!urlSearchParams.get('detail');

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <div>추가 정보가 어쩌구 저쩌구 ....</div>}
    </div>
  );
};

export default About;
