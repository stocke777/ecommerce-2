import React from 'react'
import Image from 'next/image'
type Props = {}

const Gallery = (props: Props) => {
  return (
    
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <Image height={400} width={280} className="h-[300px] rounded-lg" src="/images/1.jpg" alt=""/>
        </div>
        <div>
            <Image height={600} width={280} className="h-[500px] rounded-lg" src="/images/2.jpg" alt=""/>
        </div>
        <div>
            <Image height={400} width={280} className="h-[300px] rounded-lg" src="/images/3.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image height={600} width={280} className="h-[400px] rounded-lg" src="/images/4.jpg" alt=""/>
        </div>
        <div>
            <Image height={400} width={280} className="h-[300px] rounded-lg" src="/images/5.jpg" alt=""/>
        </div>
        <div>
            <Image height={600} width={280} className="h-[400px] rounded-lg" src="/images/6.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image height={400} width={280} className="h-[300px] rounded-lg" src="/images/7.jpg" alt=""/>
        </div>
        <div>
            <Image height={400} width={280} className="h-[500px] rounded-lg" src="/images/8.jpg" alt=""/>
        </div>
        <div>
            <Image height={400} width={280} className="h-[300px] rounded-lg" src="/images/9.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image height={400} width={280} className="h-[400px] rounded-lg" src="/images/10.jpg" alt=""/>
        </div>
        <div>
            <Image height={400} width={280} className="h-[300px] rounded-lg" src="/images/11.jpg" alt=""/>
        </div>
        <div>
            <Image height={400} width={280} className="h-[400px] rounded-lg" src="/images/12.jpg" alt=""/>
        </div>
    </div>
</div>

  )
}

export default Gallery