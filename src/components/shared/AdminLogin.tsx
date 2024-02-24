"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Card,
    CardContent
  } from "@/components/ui/card";
import useZodForm from "@/lib/form";
import { AdminSchema } from "@/shared/types/admin";
import { supabase } from "@/lib/initSupabase";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const AdminRegistration = () => {
    
    const form = useZodForm({
        schema: AdminSchema
      })

    //   async function signInWithEmail() {
    //     const { data, error } = await supabase.auth.signInWithOtp({
    //       email: form.getValues("email"),
    //       options: {
    //         // set this to false if you do not want the user to be automatically signed up
    //         shouldCreateUser: true,
    //         emailRedirectTo: 'http://localhost:3000',
    //         data:{
    //           first_name: form.getValues("firstName"),
    //           last_name: form.getValues("lastName"),
    //           phone_number: form.getValues("phoneNumber"),
    //           role_type: "attendees"
    //         }
    //       },
    //     })

    //   }

      async function adminLogin() {
        // const { data, error } = await supabase.auth.signUp({
        //   email: form.getValues("email"),
        //   password: form.getValues("password"),
        //   options: {
        //     emailRedirectTo: 'http://localhost:3000',
        //     data:{
        //       first_name: form.getValues("firstName"),
        //       last_name: form.getValues("lastName"),
        //       phone_number: form.getValues("phoneNumber"),
        //       role_type: "admin"
        //     }
        //   }
        
        // })

        // alert(data.user)
        // alert(data.session)
        // alert(error?.message)
        // alert(error?.status)
      }

      return (
        <Card className="max-w-[800px] p-8 pt-12 mx-auto shadow-lg shadow-gray-400/20">
          <CardContent>
            <Form {...form}>
              <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="youremail@domain.com" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
        
                <div className="flex flex-col gap-5 md:flex-row justify-center">
                  <Button
                    type="submit"
                    onClick={adminLogin}>Login
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        )
}

export default AdminRegistration;