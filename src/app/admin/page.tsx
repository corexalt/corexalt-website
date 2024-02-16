import Card, { CardProps } from "@/components/shared/Card"
import PageTitle from "@/components/shared/PageTitle"
import { CalendarIcon, GroupIcon, UsersIcon } from 'lucide-react'
import { createClient } from "@supabase/supabase-js";
import { supabase } from '@/lib/initSupabase';


const cardData: Array<CardProps> = [
    {
        title: "Attendees",
        icon: UsersIcon,
        amount: 1000
    },
    {
        title: "Events",
        icon: CalendarIcon,
        amount: 1000
    },
    {
        title: "Mentors",
        icon: GroupIcon,
        amount: 1000
    }
];

const page = () => {

  return (
    <section className="flex flex-col gap-5 w-full">
      {/* <> */}
        <PageTitle title="Dashboard" />
      <div className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {cardData.map((d, i) => (
          <Card
            key={i}
            title={d.title}
            amount={d.amount}
            icon={d.icon}
          />
        ))}
      </div>
      <div>
        <h1> {getCountries()} </h1>
      </div>
      {/* </> */}
    </section>
  )
}

export async function getCountries() {
  
  const { data: countries } = await supabase.from("countries").select('*')
  .order('name', {ascending:true});

  return <pre>{JSON.stringify(countries, null, 2)}</pre>
}

export default page