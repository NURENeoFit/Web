import { authConfig } from "../../../configs/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

async function getUserData(email: string) {
    const res = await fetch(`http://localhost:3001/users?email=${email}`, {
        cache: "no-store",
    });
    const users = await res.json();
    return users[0];
}

export default async function Profile() {
    const session = await getServerSession(authConfig);

    if (!session) {
        redirect("/register");
    }

    const userData = await getUserData(session.user.email);

    if (!userData) {
        redirect("/register");
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-600">First Name</p>
                        <p className="font-semibold">{userData.firstname}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Last Name</p>
                        <p className="font-semibold">{userData.lastname}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Email</p>
                        <p className="font-semibold">{userData.email}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Birthday</p>
                        <p className="font-semibold">{userData.birthday}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
