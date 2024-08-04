import MainNavbar from '@/components/Navbar';
import Head from 'next/head';
import { Card, CardHeader} from '@nextui-org/card';
import { TypedComponent } from '@/components/ui/type-animation';
import { TOOLS_INFO } from '@/lib/tools';

export default async function Page() {
    return (
      <>
        <Head>
          <title>AI Builder Kit - Build your own AI tools & Group them in one Hub</title>
          <meta name='description' content='An open-source project that helps you build your own AI tools and group them into one central hub. ' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property="og:image" content="/opengraph.png" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <MainNavbar/>
        <main className="w-full flex flex-col items-center mb-40">
          <section className='max-w-screen-lg mx-auto px-4 flex flex-col items-center gap-16 pt-14 pb-20'>
            <div className='w-full flex flex-col items-center gap-6 justify-center'>
              <h1 className="z-20 text-3xl md:text-4xl lg:text-5xl text-center font-bold tracking-tight leading-extratight mt-2 text-gray-700">
                Open-source Builder Kit to
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
              <h1 className='text-2xl font-bold mb-4'>About This AI Builder Kit</h1>
              <h2>Introduction</h2>
              <p>Welcome to the AI Builder Kit - an open-source project that helps you build your own AI tools and group them into one central hub.</p>
              <p>Access the <a href='https://github.com/chanitypham/AI-Builder-Kit' className='text_special'>GitHub Repo</a></p>
              <br/>
              <h2>Use Cases</h2>
              <h3>Some suggested use cases can be:</h3>
              <p>👉 Create a central repository of <strong>content writing AI tools</strong> for all your social media sites</p>
              <p>👉 Make a hub of <strong>AI tools for podcast</strong> and streamline your team&apos;s workflows.</p>
              <p>👉 Build a <strong>SEO Writing AI tools</strong> hub and monetize your expertise.</p>
              <p>👉 Develop a hub of <strong>AI tools for business consulting</strong> and monetize it.
              </p>

              <h3>Check out some of these sites for reference:</h3>
              <p>🔗 <a href="https://mindpal.space/workflow" target="_blank" className='text_special_no_bold'>MindPal Tools Hub for more AI Tools Ideas</a></p>
              <p>🔗 <a href="https://edu.freeaitools.tech/" target="_blank" className='text_special_no_bold'>AI Hub of Education Tools</a></p>
              <p>🔗 <a href="https://seo.freeaitools.tech/" target="_blank" className='text_special_no_bold'>AI Hub of SEO Writing Tools</a></p>
              <p>🔗 <a href="https://podcast.freeaitools.tech/" target="_blank" className='text_special_no_bold'>AI Hub of Podcasting Tools</a></p>
              <br/>

              <h2>Features</h2>
              <p>✅ <strong>Straightforward Process</strong>: Easily build your own AI tools on <a href="https://mindpal.space/" target="_blank">MindPal</a>. Then group them into a single hub with this buildkit.</p>
              <p>✅ <strong>Fully Customizable Hub</strong>: The hub offers extensive customization options (e.g., change themes, add API / Database, etc); ensure to meets the needs of you, your team, or your clients.</p>
              <p>✅ <strong>Show Your Work</strong>: Showcase and monetize your well-crafted AI Tools at ease.</p>

            </section>
          </div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </main>
      </>
    );
}
