
import './styless/home.css'
import Navbar from './components/Navbar'
import Link from 'next/link'


export default function Home() {
  return (
   <>
    <Navbar/>
    <div className="sec1">
      <h1>The Intersectionality</h1>
      <h1>-of-</h1>
      <h1>Race and Tech</h1>
    </div>
    <div className='sec2'>
      <h1>Does Tech and Race Intersect???</h1>
      <h3 >Technology and race significantly intersect in numerous concerning ways. Racism manifests throughout technology, from discriminatory
        Google Image search results that perpetuate harmful stereotypes about "unprofessional hairstyles"
        to biased predictive policing algorithms that reinforce existing racial disparities in law enforcement.
        These issues arise both from profit-driven business
        models that prioritize engagement over fairness, and from the way technology often
        mirrors and amplifies existing societal racism. The problems extend to basic hardware design,
        as demonstrated by the example of soap dispensers that don't recognize darker skin tones, and to
        social media platforms where content-curating algorithms can repeatedly expose users to harmful
        representational biases. Addressing these intersections requires interventions
         at multiple levels, from diversifying tech workforces to potentially "sanitizing" datasets to better
         reflect the world we want to see rather than perpetuating existing biases.</h3>
        <button><Link href='/sources'>Sources</Link></button>
    </div>
   </>
  );
}

























