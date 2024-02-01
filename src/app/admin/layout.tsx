import AdminSidebar from "@/components/shared/AdminSidebar"

const Layout = ({ children } : { children: React.ReactNode }) => {
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