import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel/Carousel";
import Divider from "./components/Divider";
import Categories from "./components/Categories";
import recommended from "./data/recommended.json"
import popular from "./data/popular.json"
import latest from "./data/latest.json"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	console.log("OOOOOOOO", recommended.resources)
	return (
		<main className="flex items-center justify-center w-[100%] flex-col mx-auto relative z-[-10]">
			<Hero />
			<Divider />
			<div className='m-5'>
				<h1 className='text-primary text-center text-4xl'>
					Choose whatever you want{" "}
					<span className='text-white text-5xl'>| Recommended</span>
				</h1>
			</div>
			<Carousel data={recommended}/>
      <Divider />
			<div className='m-5'>
				<h1 className='text-primary text-center text-4xl'>
					Browse what others crave most{" "}
					<span className='text-white text-5xl'>| Popular</span>
				</h1>
			</div>
			<Carousel data={popular}/>
      <Divider />
			<div className='m-5'>
				<h1 className='text-primary text-center text-4xl'>
					Be the first to show off{" "}
					<span className='text-white text-5xl'>| Latest</span>
				</h1>
			</div>
			<Carousel data={latest} />
      <Divider />
			<div className='m-5'>
				<h1 className='text-primary text-center text-4xl'>
					Select from variety of options{" "}
					<span className='text-white text-5xl'>| Categories</span>
				</h1>
			</div>
			
			<Categories />
			
      
		</main>
	);
}
