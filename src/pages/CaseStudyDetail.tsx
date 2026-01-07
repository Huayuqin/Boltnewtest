import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { CaseStudy } from '../types';
import './CaseStudyDetail.css';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCaseStudy(id);
    }
  }, [id]);

  async function fetchCaseStudy(caseStudyId: string) {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', caseStudyId)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;
      setCaseStudy(data);
    } catch (error) {
      console.error('Error fetching case study:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="case-study-detail">
        <div className="container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading case study...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="case-study-detail">
        <div className="container">
          <div className="not-found">
            <h2>Case Study Not Found</h2>
            <p>The case study you're looking for doesn't exist.</p>
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-detail">
      <Link to="/" className="back-button">
        <span>← Back to Work</span>
      </Link>

      <div className="hero-section">
        <div className="container">
          <div className="hero-meta">
            <span className="category-badge">{caseStudy.category}</span>
          </div>
          <h1 className="detail-title">{caseStudy.title}</h1>
          <p className="detail-subtitle">{caseStudy.subtitle}</p>

          <div className="project-info">
            <div className="info-item">
              <span className="info-label">Role</span>
              <span className="info-value">{caseStudy.role}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Duration</span>
              <span className="info-value">{caseStudy.duration}</span>
            </div>
            {caseStudy.tools_used.length > 0 && (
              <div className="info-item">
                <span className="info-label">Tools</span>
                <span className="info-value">{caseStudy.tools_used.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hero-image-section">
        <div className="container">
          <img
            src={caseStudy.hero_image_url || 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600'}
            alt={caseStudy.title}
            className="hero-image"
          />
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          {caseStudy.description && (
            <div className="content-block">
              <h2>Overview</h2>
              <p>{caseStudy.description}</p>
            </div>
          )}

          {caseStudy.challenge && (
            <div className="content-block">
              <h2>The Challenge</h2>
              <p>{caseStudy.challenge}</p>
            </div>
          )}

          {caseStudy.solution && (
            <div className="content-block">
              <h2>The Solution</h2>
              <p>{caseStudy.solution}</p>
            </div>
          )}

          {caseStudy.images.length > 0 && (
            <div className="images-grid">
              {caseStudy.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  className="content-image"
                />
              ))}
            </div>
          )}

          {caseStudy.outcome && (
            <div className="content-block outcome-block">
              <h2>Impact & Outcomes</h2>
              <p>{caseStudy.outcome}</p>
            </div>
          )}
        </div>
      </div>

      <div className="navigation-section">
        <div className="container">
          <Link to="/" className="back-to-work">
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
