import Link from "next/link";

interface Breadcrumb {
  title: string;
  href?: string;
}

interface PageTitleProps {
  breadcrumbs: Breadcrumb[];
  title?: string | undefined;
  className?: string;
}

const PageTitle = ({ breadcrumbs, title, className = "" }: PageTitleProps) => {
  return (
    <div
      className={`py-8 ${className} w-full flex flex-col justify-center items-center`}
    >
      {/* Breadcrumbs */}
      <nav className="text-md text-gray-500 mb-4">
        {breadcrumbs.map((crumb, index) => (
          <span key={index} className="inline-flex items-center">
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="text-[#4F5E71] hover:text-[#B1905E]"
              >
                {crumb.title}
              </Link>
            ) : (
              <span className="text-black font-medium">{crumb.title}</span>
            )}
            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </nav>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-black">{title}</h1>
    </div>
  );
};

export default PageTitle;
