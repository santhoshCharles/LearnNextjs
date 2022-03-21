import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Image from 'next/image';

function NotFound() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.push('/');
        }, 3000)
        const handleRouteChange = (url, { shallow }) => {
            console.log(
              `App is changing to ${url} ${
                shallow ? 'with' : 'without'
              } shallow routing`
            )
          }
          const handleRouteChangeError = (err, url) => {
            if (err.cancelled) {
              console.log(`Route to ${url} was cancelled!`)
            }
          }
          router.events.on('routeChangeError', handleRouteChangeError)
      
          router.events.on('routeChangeStart', handleRouteChange)
      
          // If the component is unmounted, unsubscribe
          // from the event with the `off` method:
          return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('routeChangeError', handleRouteChangeError)

          }
    }, [])
    return ( <div>
        <h1>Not found</h1>
        <Image src="/favicon.ico" height={200} width={100}/>
        <Link href={"/"} >Go to Home Page</Link>
    </div> );
}

export default NotFound;