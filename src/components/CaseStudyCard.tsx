import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';
import './CaseStudyCard.css';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link to={`/case-study/${caseStudy.id}`} className="case-study-card">
      <div className="card-image-wrapper">
        <img
          src={caseStudy.hero_image_url || 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200'}
          alt={caseStudy.title}
          className="card-image"
        />
        <div className="card-overlay">
          <span className="view-project">View Project →</span>
        </div>
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span className="card-category">{caseStudy.category}</span>
          <span className="card-duration">{caseStudy.duration}</span>
        </div>
        <h3 className="card-title">{caseStudy.title}</h3>
        <p className="card-subtitle">{caseStudy.subtitle}</p>
        <p className="card-role">Role: {caseStudy.role}</p>
      </div>
    </Link>
  );
}
