import EventForm from "@/components/shared/EventForm"
import PageTitle from "@/components/shared/PageTitle";

// export type PageType = {
//     type: "Create" | "Edit";
// }

type EventPageProps = {
    title: string;
    type: "Create" | "Edit";
}

const EventPage = ( { title, type } : EventPageProps) => {
    return (
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center">
            <PageTitle title={ title } className="text-center" />

            <div className="my-12">
                <EventForm type={ type } />
            </div>
        </section>
    )
}

export default EventPage;