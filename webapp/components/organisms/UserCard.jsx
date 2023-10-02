import { memo } from "react";
import { UserIconWithName } from "../molecules/UserIconWithName";
export const UserCard = memo((props) => {
  console.log("UserCard");
  const { user } = props;

  return (
    <div className="border rounded-lg p-4">
      <UserIconWithName
        image={user.image}
        name={user.name}
        height={160}
        width={160}
      />
      <dl className="mt-4">
        <div className="flex mb-2">
          <dt className="w-16 font-semibold">Mail</dt>
          <dd className="flex-grow">{user.email}</dd>
        </div>
        <div className="flex mb-2">
          <dt className="w-16 font-semibold">TEL</dt>
          <dd className="flex-grow">{user.phone}</dd>
        </div>
        <div className="flex mb-2">
          <dt className="w-16 font-semibold">Corp</dt>
          <dd className="flex-grow">{user.company.name}</dd>
        </div>
        <div className="flex mb-2">
          <dt className="w-16 font-semibold">WEB</dt>
          <dd className="flex-grow">{user.website}</dd>
        </div>
      </dl>
    </div>
  );
});
