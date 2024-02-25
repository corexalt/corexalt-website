"use client"

import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import Image from "next/image"
import { Textarea } from "../ui/textarea"
import { format } from "date-fns";
import { CalendarIcon, Link, MapPin } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { EventSchema } from "@/shared/types";
import useZodForm from "@/lib/form"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription
} from "@/components/ui/card"
import { supabase } from "@/lib/initSupabase"
import { useRouter } from 'next/navigation'

type EventFormProps = {
  type: "Create" | "Edit";
}


const EventForm = ({ type } : EventFormProps) => {
    const form = useZodForm({
      schema: EventSchema,
      defaultValues: {
        title: "",
    
      }
    })

    const router = useRouter()

    const handleSubmission = async(e:any) => {
      e.preventDefault();

      if(type === 'Create'){
        try {
          const { error } = await supabase
          .from('event')
          .insert({ 
            name:form.getValues('title'),
            description:form.getValues('description'),
            hosts:form.getValues('host'),
            // startDateTime:form.getValues('startDate'),
            // endDateTime:form.getValues('endDate')
           })        
  
           router.push('/admin/events')
        } catch (error) {
          
        }

      }
      else if(type === 'Edit'){

      }

  }

    return (
      <Card className="max-w-[800px] p-8 pt-12 mx-auto shadow-lg shadow-gray-400/20">
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmission} className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input placeholder="Event title" {...field} className="input-field" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
      
              <div className="flex flex-col gap-5 md:flex-row">
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl className="h-72">
                          <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                {/* <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl className="h-72">
                          <FileUploader 
                            onFieldChange={field.onChange}
                            imageUrl={field.value}
                            setFiles={setFiles}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
              </div>
      
              <div className="flex flex-col gap-5 md:flex-row">
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 gap-4">
                            <MapPin />
      
                            <Input placeholder="Event location or Online" {...field} className="input-field" />
                          </div>
      
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
      
              <div className="flex flex-col gap-5 md:flex-row justify-center px-4 py-2 w-full">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a start date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        The start date of the event.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick an end date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date()
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        The end date of the event
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
      
              <div className="flex flex-col gap-5 md:flex-row">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 gap-4">
                            <Link />
    
                            <Input placeholder="URL" {...field} className="input-field" />
                          </div>
      
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
      
              <div className="flex flex-col gap-5 md:flex-row justify-center">
                <Button 
                  type="submit"
                  size="sm"
                  disabled={form.formState.isSubmitting}
                  className="button w-1/2"
                >
                  {form.formState.isSubmitting ? (
                    'Submitting...'
                  ): `${type} Event `}</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      )
}

export default EventForm