/*
  # Create case studies table for UX portfolio

  1. New Tables
    - `case_studies`
      - `id` (uuid, primary key) - Unique identifier for each case study
      - `title` (text) - Case study title
      - `subtitle` (text) - Brief tagline or subtitle
      - `description` (text) - Short overview description
      - `challenge` (text) - Problem statement or challenge
      - `solution` (text) - How the problem was solved
      - `outcome` (text) - Results and impact
      - `role` (text) - Designer's role in the project
      - `duration` (text) - Project timeline
      - `tools_used` (text array) - Tools and technologies used
      - `hero_image_url` (text) - Main cover image URL
      - `images` (text array) - Additional project images
      - `category` (text) - Project category (e.g., Mobile, Web, Research)
      - `order_index` (integer) - For manual sorting of case studies
      - `published` (boolean) - Whether the case study is published
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `case_studies` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin users to manage case studies
*/

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text DEFAULT '',
  description text DEFAULT '',
  challenge text DEFAULT '',
  solution text DEFAULT '',
  outcome text DEFAULT '',
  role text DEFAULT '',
  duration text DEFAULT '',
  tools_used text[] DEFAULT '{}',
  hero_image_url text DEFAULT '',
  images text[] DEFAULT '{}',
  category text DEFAULT 'Design',
  order_index integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published case studies"
  ON case_studies
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert case studies"
  ON case_studies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update case studies"
  ON case_studies
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete case studies"
  ON case_studies
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_case_studies_order ON case_studies(order_index);
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(published);
