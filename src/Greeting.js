import React from 'react';

function Greeting() {
  // 랜덤하게 true 또는 false 값 설정
  const isLoggedIn = Math.random() < 0.5;

  return (
    <div>
      {/* isLoggedIn 값에 따라 다른 UI를 렌더링 */}
      {isLoggedIn ? (
        <h1>Welcome back!</h1>) : (<h1>Please sign up.</h1>)}
    </div>
  );
}

export default Greeting;