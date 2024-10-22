import Accordion from "./Accordion"

export default function FAQ() {
    return (
        <div className="accordion-container">
            <h1>Frequently asked Questions</h1>
            <Accordion
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam totam ad molestiae dicta deleniti eos autem nemo dolore modi temporibus voluptas, recusandae impedit beatae vero aut molestias, laudantium id."
            />
            <Accordion
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam totam ad molestiae dicta deleniti eos autem nemo dolore modi temporibus voluptas, recusandae impedit beatae vero aut molestias, laudantium id."
            />
            <Accordion
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam totam ad molestiae dicta deleniti eos autem nemo dolore modi temporibus voluptas, recusandae impedit beatae vero aut molestias, laudantium id."
            />
        </div>
    )
}