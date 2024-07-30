import MainNavbar from '@/components/Navbar';
import { siteConfig } from '@/lib/config';
import Head from 'next/head';
import { Card, CardHeader} from '@nextui-org/card';
import { TypedComponent } from '@/components/ui/type-animation';
import { TOOLS_INFO } from '@/lib/tools';

export default async function Page() {
    return (
      <>
        <Head>
          <title>{siteConfig.tagline} | {siteConfig.name}</title>
          <meta name='description' content={siteConfig.desc} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property="og:image" content="/opengraph.png" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <MainNavbar/>
        <main className="w-full flex flex-col items-center mb-40">
          <section className='max-w-screen-lg mx-auto px-4 flex flex-col items-center gap-16 pt-14 pb-20'>
            <div className='w-full flex flex-col items-center gap-6 justify-center'>
              <h1 className="z-20 text-3xl md:text-4xl lg:text-5xl text-center font-bold tracking-tight leading-extratight mt-2 text-gray-700">
                Open-source Buildkit to
              </h1>
              <TypedComponent />
            </div>
          </section>
          <div className='mx-8 md:mx-16 lg:mx-28 xl:mx-40 2xl:mx-60'>
            <ul className='w-full grid grid-cols-1 md:grid-cols-3 gap-6'>
              {TOOLS_INFO.map((tool, idx) => (
                <li key={idx} className='w-full'>
                  <Card
                    as="a" 
                    href={`/tools/${tool.slug}`}
                    className="card"
                  >
                    <CardHeader className="p-6 flex flex-col items-start gap-2">
                      <span className="text-3xl">{tool.icon}</span>
                      <h3 className="text-xl font-semibold capitalize text-gray-800">
                        {tool.title}
                      </h3>
                      <h4 className='text-m font-medium text-gray-500'>{tool.category}</h4>
                      <p className='line-clamp-2 text-sm text-default-500 text-gray-800'>{tool.description || ''}</p>
                    </CardHeader>
                  </Card>
                </li>
              ))}
            </ul>
            <section className='my-16 p-6 bg-white rounded-lg shadow-lg mt-8'>
              <h2 className='text-2xl font-bold mb-4'>About this Buildkit</h2>
              <ul className='space-y-4'>
                <li>
                  <h3 className='text-lg font-semibold'>Do I have to add my API key to use these workflows?</h3>
                  <p>No. These workflows are completely free for you to use without your API key.</p>
                </li>
                <li>
                  <h3 className='text-lg font-semibold'>How can I create more workflows like this?</h3>
                  <p>These workflows are made possible by <a href='https://mindpal.space/' className='text_special'>MindPal</a>, a good tool that helps you create smart AI workflows tailored to your need.</p>
                </li>
                <li>
                  <h3 className='text-lg font-semibold'>Will there be more workflows added?</h3>
                  <p>Yes. As I continue to explore the exciting world of AI and generative AI, I&apos;ll be adding even more workflows designed to enhance your educational journey.</p>
                </li>
                <li>
                  <h3 className='text-lg font-semibold'>Can I customize these workflows?</h3>
                  <p> Yes. Currently when viewing one tool, you can have the option to edit it in <a href='https://mindpal.space/' className='text_special'>MindPal</a>. You can go ahead and customize further or create new workflows of your preference there.</p>
                </li>
              </ul>
            </section>
  
          </div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </main>
      </>
    );
}
