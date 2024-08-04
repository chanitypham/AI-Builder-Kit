import MainNavbar from '@/components/Navbar';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TOOLS_INFO } from '@/lib/tools';

interface ToolProps {
  params: { slug: string };
}

function getToolBySlug(slug: string) {
  return TOOLS_INFO.find(tool => tool.slug === slug);
}

function getAllTools() {
  return TOOLS_INFO;
}

export default async function ToolPage({ params }: ToolProps) {
  const tool = getToolBySlug(params.slug);
  const tools = getAllTools();

  if (!tool) {
    notFound();
  }

  const otherTools = tools.filter(t => t.slug !== params.slug);

  return (
    <>
      <MainNavbar />
      <div className="min-h-screen flex flex-col items-center p-4 mb-40 bg-pastelBlue">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
          <Link href="/" className="text-darkgrey hover:text-lightgrey flex items-center gap-2 no-underline button-grey">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Return to Home page
          </Link>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2 mt-4 text-gray-700">{tool.title}</h2>
              <p className="text-lg text-gray-600 mb-2">{tool.description}</p>
            </div>
          </div>

          {tool.workflowID ? (
            <iframe
              src={`https://workflow.mindpal.space/${tool.workflowID}`}
              className="w-full h-80 md:h-[600px] border-2 border-grey rounded-lg"
            ></iframe>
          ) : (
            <p className="text-gray-600">No workflow available for this tool.</p>
          )}
        </div>
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            About This Tool
          </h2>
          <p>{tool.copywriting}</p>
        </div>
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Other Tools</h2>
          <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherTools.map((otherTool) => (
              <li key={otherTool.slug} className="w-full">
                <Link href={`/tools/${otherTool.slug}`}>
                  <div className="card p-6 bg-white rounded-lg shadow-md">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-3xl">{otherTool.icon}</span>
                      <h3 className="text-xl font-semibold capitalize text-gray-800">
                        {otherTool.title}
                      </h3>
                      <h4 className="text-m font-medium text-gray-500">{otherTool.category}</h4>
                      <p className="line-clamp-2 text-sm text-gray-800">
                        {otherTool.description || ''}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </>
  );
}
