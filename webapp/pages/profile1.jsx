import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Profile1 = () => {
  const { data: session } = useSession({ required: true });
  const router = useRouter();


  return (
    <>
      {session ? (
        <div>
          <h1>ぷろふぃーる</h1>
          <div>{session.user?.name}</div>
          {session.user?.image && (
            <div className='object-cover'>
              <Image src={session.user?.image} alt="" width={96} height={96} />
            </div>
          )}
          <button onClick={() => signOut()}>ろぐあうと</button>
        </div>
      ) : (
        <div>
          <p>ろぐいんしていないよ</p>
          <button onClick={() => router.push('/login')}>ろぐいん</button>
        </div>
      )}
    </>
  );
};

export default Profile1;