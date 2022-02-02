export default function Dangerous(props) {

return (
<div
          dangerouslySetInnerHTML={{ __html: props.node.processed }}
          className="mt-6 font-serif text-xl text-white leading-loose"
/>
)
}