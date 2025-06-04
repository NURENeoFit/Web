import { authConfig } from "../../../configs/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Profile() {
    const session = await getServerSession(authConfig);

    if (!session) {
        redirect("/api/auth/signin"); // безопасно редиректим
    }
    return (
        <div>
            <h1>Profile of {session?.user?.name} </h1>
        </div>
    );
}
