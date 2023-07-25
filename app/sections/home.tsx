import Image from 'next/image'
import { ReactNode } from 'react';

function ContactLink(props: { href: string, textColor: string, children: ReactNode }) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-${props.textColor} bg-slate-100 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-slate-700 dark:text-white dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500`}>
            {props.children}
        </a>
    )
}

export default function Home() {
    return (
        <section id="home" className="pt-14 sm:pt-14 lg:pt-[60px] pb-20">
            <div className="flex flex-col items-center justify-center min-h-[90vh] aos-init aos-animate" data-aos="fade">
                <div className='flex bg-slate-300 dark:bg-slate-800 min-h-[250px] h-[250px] w-[250px] 2xl:w-[250px] 2xl:h-[250px] rounded-full overflow-hidden'>
                    <Image
                        alt="hero image"
                        src="/profile_photo_n7zbbz.png"
                        width={240}
                        height={240}
                        style={{ objectFit: 'none', objectPosition: '25% 25%' }}
                        priority
                    />
                </div>
                <h3 className="mt-6 mb-1 text-4xl text-center font-semibold dark:text-white">Germán Hernández</h3>
                <p className="mb-4 text-[#7B7B7B]">Quality Assurance Engineer</p>
                <div className="flex space-x-3">
                    <ContactLink href='https://github.com/' textColor='[#24292f]'>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 96 96" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                            </svg>
                        </span>
                    </ContactLink>
                    <ContactLink href='https://www.linkedin.com/' textColor='[#0072b1]'>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                        </span>
                    </ContactLink>
                </div>
                <a href="/images/cv.pdf" download="" className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6">
                    Download CV
                </a>
            </div>
        </section>
    );
}