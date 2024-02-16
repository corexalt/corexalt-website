const Layout = ({ children } : { children: React.ReactNode }) => {
    return (
        <main className="flex lg:flex-row w-full min-h-screen">
            <section className="p-8 w-full ml-12">
                { children }
            </section>
        </main>
    )
}

export default Layout