"use client";


import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
        const userData = authClient.useSession();
        console.log(userData);
        const user = userData.data?.user
    return (
        <div>
            <Card className="max-w-98 mx-auto flex flex-col items-center border mt-5">
                            <Avatar className="h-20 w-20 rounded-full">
                        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                      <h1 className="text-xl font-bold">{user?.name}</h1>
                      <p className="text-muted">{user?.email}</p>
                   
                      <UpdateUserModal/>
            </Card>
        </div>
    );
};

export default ProfilePage;