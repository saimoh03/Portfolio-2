import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { projectsData } from '../data/projects';
import { Check, Copy, File, Globe, MoveUpRight } from 'lucide-react';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);
  const [copied, setCopied] = useState(false);

  if (!project) {
    return (
      <div className="text-center py-12 space-y-4">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link to="/" className="text-blue-600 hover:underline">&larr; Return Home</Link>
      </div>
    );
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <article className="max-w-3xl mx-auto space-y-8 animate-fadeIn mt-15">
      <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h2>
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition active:scale-95 w-max"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 mr-1" /> Link Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 mr-1" /> Copy Share Link
            </>
          )}
        </button>
      </div>

      <figure className="space-y-2">
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
          <img
            src={project.articleImage}
            alt={project.title}
            className="w-full h-auto max-h-[450px] object-cover"
          />
        </div>
        <figcaption className="text-xs text-center text-slate-500 italic">
          {project.imageCaption}
        </figcaption>
      </figure>

      <div className="grid sm:grid-cols-2 gap-4">
        <a
          href={project.liveSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white border border-slate-200 hover:border-blue-500 rounded-xl shadow-sm text-center font-medium text-blue-600 hover:bg-blue-50/50 transition flex items-center justify-center gap-2"
        >
          <Globe /> View Live Web App <span className="text-xs"><MoveUpRight className='h-3.5 w-3.5' /></span>
        </a>
        <a
          href={project.githubReadmeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-sm text-center font-medium transition flex items-center justify-center gap-2"
        >
          <File /> View GitHub Repository README.md <span className="text-xs"><MoveUpRight className='h-3.5 w-3.5' /></span>
        </a>
      </div>

      <div className="prose prose-slate max-w-none pt-4">
        <h3 className="text-xl font-bold mb-3 text-slate-200">Project Overview & Deliverables</h3>
        <p className="text-slate-300 leading-relaxed text-base">{project.longDescription}</p>
      </div>
    </article>
  );
}