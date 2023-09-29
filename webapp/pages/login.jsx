import React from 'react';
import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';
import { NextPage } from 'next';

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {
        session && (
          <div>
            <h1>ようこそ, {session.user && session.user.email}</h1>
            <button onClick={() => signOut()}>ログアウト</button>
          </div>
        )
      }
      {
        !session && (
          <div>
            <p>ログインしていません</p>
            <button onClick={() => signIn()}>ログイン</button>
          </div>
        )
      }
    </>
  );
  
};

export default Login;