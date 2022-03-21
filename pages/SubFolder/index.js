import React from 'react';

export const getStaticProps = async() => {
    const data = await fetch("https://catfact.ninja/fact")
    const res = await data.json();

    return {
        props: {
            res: res
        }
    }
}

function SubFolder({res}) {
    console.log('res', res)
    return ( <div>SubFolder</div> );
}

export default SubFolder;