"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";

const contactFormSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters"
    }).max(150, {
        message: "Message must not be longer than 150 characters"
    })
})

export function ContactForm() {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log(values);
    }

    return (
        <section className="flex-center bg-[#0D215C] pt-2 lg:pt-4 pb-18 lg:pb-20">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 flex flex-col gap-5">
                <div className="wrapper flex flex-col gap-5">
                    <h2 className="text-white text-center h2-medium">Contact Us</h2>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-white">Name</FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="Enter your name" {...field} 
                                    />
                                </FormControl>
                                {/* <FormDescription>
                                    This is your public display name.
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email (email@domain.com)" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-white">Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Enter your message"
                                className="resize-none"
                                {...field}
                                />
                            </FormControl>
                            {/* <FormDescription>
                                You can <span>@mention</span> other users and organizations.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button className="bg-[#F2FF5F] text-[#394149]" type="submit">Send</Button>
            </form>
            </Form>
        </section>
    )
}