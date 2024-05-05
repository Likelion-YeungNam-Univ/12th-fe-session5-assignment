import React from "react";

function Welcome() {
  const user = {
    firstName: "이",
    lastName: "재훈",
    age: 23,
    major: "컴퓨터공학과",
  };

  const formatName = (user) => {
    // return `${user.lastName}${user.firstName}`
    return user.firstName + user.lastName;
  };

  return (
    <div>
      <h1>안녕하세요, {formatName(user)}님!</h1>
      <p>나이: {user.age}</p>
      <p>전공: {user.major}</p>
      <h3>Thank you for visiting.</h3>
    </div>
  );
}

export default Welcome;