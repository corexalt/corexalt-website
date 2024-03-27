"use client"

import AdminSidebar from "@/components/shared/AdminSidebar"
import { supabase } from "@/lib/initSupabase";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter  } from "next/navigation";

const Layout = ({ children } : { children: React.ReactNode }) => {

    const rout = useRouter()

    const [session, setSession] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
        const userSession = await supabase.auth.getSession();
        setSession(userSession);
        setLoading(false);
        };

        getSession();
    }, []);

    if (loading) {
        return <div>Loading....</div>; // Render a loading indicator while the session is being fetched
    }

    else{
        if(session.data.session===null){
            rout.push('adminAuth/sign-in')
        }
    }

    return (
        <div className="flex lg:flex-row w-full min-h-screen">
            <AdminSidebar />
            <main className="p-8 w-full ml-12">
                { children }
            </main>
        </div>
    )
}

export default Layout