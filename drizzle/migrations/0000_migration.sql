CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  customer_name text NOT NULL,
  company_name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  product_required text NOT NULL,
  material_specification text,
  size_dimension text,
  quantity text,
  technical_requirements text,
  additional_remarks text,
  drawing_path text,
  drawing_filename text,
  status text NOT NULL DEFAULT 'new'
);

GRANT ALL ON public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  company_name text,
  email text NOT NULL,
  mobile text,
  subject text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;