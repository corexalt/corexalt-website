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

      async function adminLogin() {
        const response = await supabase.auth.signInWithPassword({
          email: form.getValues("email"),
          password: form.getValues("password"),
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