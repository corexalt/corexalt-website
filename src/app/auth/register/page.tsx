// import AuthForm from "@/components/shared/AuthForm"
import AuthForm from "@/components/shared/auth-form";

export default function page() {
  return (
    <div className="bg-primary-50 bg-dotted-pattern bg-cover bg-center">
      <AuthForm />
    </div>
    // <div className="row">
    //   <div className="col-6">
    //     <h1 className="header">Supabase Auth + Storage</h1>
    //     <p>
    //       Experience our Auth and Storage through a simple profile management example. Create a user
    //       profile and upload an avatar image. Fast, simple, secure.
    //     </p>
    //   </div>
    //   <div className="col-6 auth-widget">
    //     {/* <AuthForm /> */}
    //   </div>
    // </div>
  )
}