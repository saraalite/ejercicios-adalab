import React from "react";
import "./App.css";

const Container = (props) => {
  const MembersList = props.members.map((member) => {
    console.log(member);
    return <p>{member}</p>;
  });
  return (
    <section className="container">
      <h2>{props.title}</h2>
      <article>
        <p>Members:</p>
        {MembersList}
        <span>
          <i className={props.icon}></i>
        </span>
      </article>
    </section>
  );
};

export default Container;
