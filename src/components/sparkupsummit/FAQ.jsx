import Accordion from "./Accordion"

export default function FAQ() {
    return (
        <div className="accordion-container">
            <h1>Frequently asked Questions</h1>
            <Accordion
                title="When and where will the summit be held?"
                content="Sparkup Summit will be held from 29th November to 1st December at Silicon University, Bhubaneswar, Odisha."
            />
            <Accordion
                title="Who can attend the Sparkup Summit?"
                content="The Sparkup Summit is open to school and college students from different regions, as well as budding startups, investors, and entrepreneurs."
            />
             <Accordion
                title="How can I register for the summit?"
                content="Registration details and fees will be available on the official Sparkup Summit website."
            />
            <Accordion
                title="What can attendees expect at the summit?"
                content="Attendees can expect inspiring keynote speeches from industry leaders, interactive workshops, panel discussions, networking opportunities, and a vibrant entrepreneurial environment."
            />
             <Accordion
                title="Can I participate in the summit virtually?"
                content="Yes, you can be a part of Sparkup Summit virtually by participating in our online events."
            />
        </div>
    )
}
