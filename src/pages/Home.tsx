import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { CaseStudy } from '../types';
import CaseStudyCard from '../components/CaseStudyCard';
import './Home.css';

export default function Home() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  async function fetchCaseStudies() {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .order('order_index', { ascending: true });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Crafting Digital Experiences
              <br />
              That Matter
            </h1>
            <p className="hero-description">
              UX Designer specializing in creating intuitive, user-centered digital products
              that solve real problems and delight users.
            </p>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="container">
          <div className="section-header">
            <h2>Selected Work</h2>
            <p className="section-description">
              A collection of projects showcasing my approach to design thinking,
              research, and problem-solving.
            </p>
          </div>

          {loading ? (
            <div className="loading">
              <div className="loading-spinner"></div>
              <p>Loading case studies...</p>
            </div>
          ) : caseStudies.length === 0 ? (
            <div className="empty-state">
              <p>No case studies available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="case-studies-grid">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
