import React from 'react';
import { SessionProvider, useSession, signIn, signOut } from 'next-auth/react';
import { NextPage } from 'next';
import BaseButton from 'components/atom/button/BaseButton';

const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {
        session && (
          <div>
            <h1>ようこそ, {session.user && session.user.email}</h1>
            <button onClick={() => signOut()}>ろぐあうと</button>
          </div>
        )
      }
      {
        !session && (
          <div>
            <p>ろぐいんしてないよ</p>
            <BaseButton label="ろぐいん" onClick={() => signIn()}/>

          </div>
        )
      }
    </>
  );
  
};

export default Login;