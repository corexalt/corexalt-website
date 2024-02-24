import Card, { CardProps } from "@/components/shared/Card"
import PageTitle from "@/components/shared/PageTitle"
import { CalendarIcon, GroupIcon, UsersIcon } from 'lucide-react'
import { createClient } from "@supabase/supabase-js";
import { supabase } from '@/lib/initSupabase';
import { redirect } from 'next/navigation'


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

const page = async () => {

  async function checkAdmin() {

    const response = await supabase.auth.getSession()
    const sessionStats = response.data
  
    return sessionStats;
  }

  // const adminSession = await checkAdmin()

  // console.log(adminSession.session)

  // if(adminSession.session === null){
  //   redirect('/adminAuth/sign-in');
  // }
  // else{
  //   console.log("login success")
  // }

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
      {/* </> */}
    </section>
  )
}

export default page