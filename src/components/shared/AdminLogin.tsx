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
import { useState } from 'react';
import { useRouter } from 'next/navigation'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const AdminRegistration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter()

    const form = useZodForm({
        schema: AdminSchema
      })

    const handleLogin = async(e:any) => {
        e.preventDefault();

        try {
          const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password,
          });
    
          if (error) {

            throw error;
          }
          else{
            setError(null);

            router.push('/admin')
          }
         
        } catch (error:any) {
          setError(error.message || 'An error occurred during login.');
        }

    }

      return (
        <Card className="max-w-[800px] p-8 pt-12 mx-auto shadow-lg shadow-gray-400/20">
          <CardContent>
            <Form {...form}>
              <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 md:flex-row">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="youremail@domain.com" {...field} type= "email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                          <Input placeholder="" {...field} className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
        
                <div className="flex flex-col gap-5 md:flex-row justify-center">
                  <Button
                    type="submit">Login
                  </Button>
                </div>
                {error}
              </form>
            </Form>
          </CardContent>
        </Card>
        )
}

export default AdminRegistration;