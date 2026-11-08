import { Navigate, useParams } from 'react-router-dom';
import { getServiceAreaPage } from '@/data/serviceAreas';
import { getService } from '@/data/services';
import ServiceAreaPage from '@/pages/ServiceAreaPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';

export default function SlugPage() {
  const { slug = '' } = useParams();
  if (getServiceAreaPage(slug)) return <ServiceAreaPage />;
  const service = getService(slug);
  if (service) return <Navigate to={service.path} replace />;
  return <ServiceLocationPage />;
}
