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

      async function adminSignUp() {

        const response = await supabase.auth.signUp({
          email: form.getValues("email"),
          password: form.getValues("password"),
          options: {
            emailRedirectTo: 'http://localhost:3000',
            data:{
              first_name: form.getValues("firstName"),
              last_name: form.getValues("lastName"),
              phone_number: form.getValues("phoneNumber"),
              role_type: "admin"
            }
          }
        
        })

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


                <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="0123456789" {...field} className="input-field" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
        
                <div className="flex flex-col gap-5 md:flex-row justify-center">
                  <Button
                    type="submit"
                    onClick={adminSignUp}>Register
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        )
}

export default AdminRegistration;