import Link from 'next/link'


const Home = () => {
    return (
       <div>
           <p>Hey</p>
           <Link href="/sell">
               <p>Go to sell</p>
           </Link>
       </div>
    )
}

export default Home