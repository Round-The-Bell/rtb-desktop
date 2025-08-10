import { useState, useEffect } from 'react';

// Domain Types
interface Project {
  id: string;
  title: string;
  description: string;
  category: 'residential' | 'commercial' | 'renovation' | 'new-construction';
  imageUrl: string;
  completionDate: string;
  location: string;
  features: string[];
  beforeImage?: string;
  afterImage?: string;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

// Projects data - replace imageUrl with your actual image URLs
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Modern Family Home',
    description: 'Complete exterior painting with premium weather-resistant coating. Transformed this family home with a contemporary color scheme.',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    completionDate: 'March 2024',
    location: 'Raleigh, NC',
    features: ['Exterior Painting', 'Trim Work', 'Deck Staining']
  },
  {
    id: '2',
    title: 'Office Complex Renovation',
    description: 'Full interior and exterior painting for a 3-story office building. Included specialty coatings for high-traffic areas.',
    category: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    completionDate: 'January 2024',
    location: 'Durham, NC',
    features: ['Interior Painting', 'Exterior Coating', 'Epoxy Flooring']
  },
  {
    id: '3',
    title: 'Historic Home Restoration',
    description: 'Careful restoration of a 1920s colonial home, preserving original architectural details while updating the color scheme.',
    category: 'renovation',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
    completionDate: 'February 2024',
    location: 'Chapel Hill, NC',
    features: ['Color Matching', 'Wood Restoration', 'Lead Paint Removal']
  },
  {
    id: '4',
    title: 'New Construction Townhomes',
    description: 'Interior and exterior painting for 12-unit townhome development. Coordinated multiple color schemes for variety.',
    category: 'new-construction',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    completionDate: 'December 2023',
    location: 'Cary, NC',
    features: ['New Construction', 'Multiple Units', 'Custom Colors']
  },
  {
    id: '5',
    title: 'Retail Store Makeover',
    description: 'Complete interior transformation with branded colors and specialty finishes to enhance customer experience.',
    category: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80',
    completionDate: 'November 2023',
    location: 'Raleigh, NC',
    features: ['Brand Colors', 'Accent Walls', 'Fast Turnaround']
  },
  {
    id: '6',
    title: 'Luxury Estate Painting',
    description: 'High-end residential project featuring custom color consultation and premium paint application throughout.',
    category: 'residential',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    completionDate: 'October 2023',
    location: 'Apex, NC',
    features: ['Custom Colors', 'Faux Finishes', 'Cabinet Painting']
  }
];

// Custom Card Component
function Card({ children, className = '', onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// Before/After Image Viewer Component
function BeforeAfterViewer({ beforeImage, afterImage }: { beforeImage?: string; afterImage?: string }) {
  const [showAfter, setShowAfter] = useState(false);

  if (!beforeImage || !afterImage) return null;

  return (
    <div className="relative w-full h-96 mb-6 overflow-hidden rounded-lg">
      <img
        src={beforeImage}
        alt="Before"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        src={afterImage}
        alt="After"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 rounded-full p-2">
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="text-white px-4 py-2 text-sm font-medium"
        >
          {showAfter ? 'Show Before' : 'Show After'}
        </button>
      </div>
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
        {showAfter ? 'After' : 'Before'}
      </div>
    </div>
  );
}

// Project Modal Component
function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {project.beforeImage && project.afterImage ? (
          <BeforeAfterViewer beforeImage={project.beforeImage} afterImage={project.afterImage} />
        ) : (
          <div className="relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="text-sm text-gray-500">📍 {project.location}</span>
            <span className="text-sm text-gray-500">📅 {project.completionDate}</span>
            <span className="text-sm text-gray-500 capitalize">🏷️ {project.category.replace('-', ' ')}</span>
          </div>

          <p className="text-gray-700 mb-6">{project.description}</p>

          <div>
            <h4 className="font-semibold mb-3">Project Features:</h4>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Projects Component
function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [projects] = useState<Project[]>(projectsData);
  const [isLoading, setIsLoading] = useState(false);

  // Get unique categories from projects
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const createFilterButtons = () => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setIsLoading(true);
              setFilter(category);
              setTimeout(() => setIsLoading(false), 300);
            }}
            className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${filter === category
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {category.replace('-', ' ')}
            {filter === category && getFilteredProjects().length > 0 && (
              <span className="ml-2 bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs">
                {getFilteredProjects().length}
              </span>
            )}
          </button>
        ))}
      </div>
    );
  };

  function getFilteredProjects() {
    if (filter === 'all') return projects;
    return projects.filter(project => project.category === filter);
  }

  const createProjectCards = () => {
    const filteredProjects = getFilteredProjects();

    if (filteredProjects.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </div>
      );
    }

    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="transform transition-all duration-300 hover:-translate-y-2"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedProject(project)}
          >
            <Card className="h-full cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm capitalize">
                  {project.category.replace('-', ' ')}
                </span>
                {project.beforeImage && project.afterImage && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                    Before/After
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>📍 {project.location}</span>
                <span>📅 {project.completionDate}</span>
              </div>

              <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                View Details
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  };

  const createSectionHeader = () => {
    return (
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Recent Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of residential and commercial painting projects
        </p>
        <div className="mt-6 text-sm text-gray-500">
          Showing {getFilteredProjects().length} of {projects.length} projects
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {createSectionHeader()}
          {createFilterButtons()}
          {createProjectCards()}
        </div>
      </section>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;