import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import AboutPage from '@/pages/AboutPage';
import ReviewsPage from '@/pages/ReviewsPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import SlugPage from '@/pages/SlugPage';
import NotFoundPage from '@/pages/NotFoundPage';
import StandaloneLandingPage from '@/standalone-landing/StandaloneLandingPage';
import { USE_LANDING_PAGE_AS_HOME } from '@/siteMode';

function App() {
  return (
    <Routes>
      {/* Standby preview route: always accessible for testing/verification */}
      <Route path="home-page" element={<StandaloneLandingPage isRoot={false} />} />

      {/* Switcher: when USE_LANDING_PAGE_AS_HOME is true, root is the Standalone Landing Page */}
      {USE_LANDING_PAGE_AS_HOME && (
        <Route path="/" element={<StandaloneLandingPage isRoot={true} />} />
      )}

      {/* Standard multi-page site layout */}
      <Route element={<Layout />}>
        {!USE_LANDING_PAGE_AS_HOME && <Route index element={<HomePage />} />}
        <Route path="services" element={<ServicesPage />} />
        <Route path="service-areas" element={<ServiceAreasPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path=":slug" element={<SlugPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
