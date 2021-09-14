const signUp = (props) => {
  console.log("called signup ", props.match.params.userName);
  const login = () => {
    <div>
      <h2>Login User</h2>
      <hr />
      <div>
        <div>
          userName: <input type="text" />
        </div>
        <div>
          Password: <input type="password" />
        </div>
        <button type="button">SignUp</button>
      </div>
    </div>;
  };

  // return(
  //   <div>
  //     <h2>Signup User</h2>
  //     <hr />
  //     <div>
  //       <div>
  //         userName: <input type="text" />
  //       </div>
  //       <div>
  //         Password: <input type="password" />
  //       </div>
  //       <button type="button">Signup</button>
  //     </div>
  //   </div>
  // );
  return <div>111111 Hello world!</div>;
};

export default signUp;
