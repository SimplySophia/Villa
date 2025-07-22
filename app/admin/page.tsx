import { clerkClient } from "@clerk/nextjs/server";
import { removeRole, setRole } from "./action";

export default async function Admin() {
    const client = await clerkClient();

    const { data: users } = await client.users.getUserList({});

    type User = {
        id: string;
        fullName: string | null;
        emailAddresses: { emailAddress: string }[];
        publicMetadata: { role?: string };
    };

  return (
    <>
       {users.map((user: User) => (
        <div key={user.id}>
            <h2>{user.fullName}</h2>
            <p>Email: {user.emailAddresses[0]?.emailAddress}</p>
            <form action={setRole}>
                <input type="hidden" name="id" value={user.id} />
                <select name="role" defaultValue={user.publicMetadata.role || ""}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="moderator">Moderator</option>
                </select>
                <button type="submit">Set Role</button>
            </form>
            <form action={removeRole}>
                <input type="hidden" name="id" value={user.id} />
                <button type="submit">Remove Role</button>
            </form>
        </div>
    ))}
    </>
  );
}