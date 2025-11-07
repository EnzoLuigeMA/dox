/*
  # Create Waitlist Table for Dox English EAD

  ## Overview
  This migration creates a waitlist table to capture leads interested in enrolling in Dox English EAD courses.

  ## New Tables
  1. `waitlist`
    - `id` (uuid, primary key) - Unique identifier for each lead
    - `name` (text) - Lead's full name
    - `email` (text, unique) - Lead's email address
    - `phone` (text, optional) - Lead's phone number
    - `english_level` (text, optional) - Current English proficiency level
    - `learning_goals` (text, optional) - What they want to achieve
    - `preferred_schedule` (text, optional) - Preferred class schedule
    - `referral_source` (text, optional) - How they heard about us
    - `created_at` (timestamptz) - Timestamp of registration
    - `notified` (boolean) - Whether the lead has been contacted
    
  ## Security
  - Enable Row Level Security (RLS) on the waitlist table
  - Add policy for public insert (anyone can join the waitlist)
  - Add policy for authenticated admin read access
  
  ## Indexes
  - Index on email for fast lookup and duplicate prevention
  - Index on created_at for chronological queries
*/

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  english_level text,
  learning_goals text,
  preferred_schedule text,
  referral_source text,
  created_at timestamptz DEFAULT now(),
  notified boolean DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public can join)
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read waitlist data (for admin dashboard)
CREATE POLICY "Authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update waitlist (for marking as notified)
CREATE POLICY "Authenticated users can update waitlist"
  ON waitlist
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_notified ON waitlist(notified);