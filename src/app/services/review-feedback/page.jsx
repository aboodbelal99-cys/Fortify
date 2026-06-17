import ServicePageLayout from '@/components/ServicePageLayout';
import { services } from '@/data/services';

const service = services.find((s) => s.id === 'review-feedback');

export const metadata = {
  title: service.title,
  description: service.brief,
};

export default function ReviewFeedbackPage() {
  return <ServicePageLayout service={service} />;
}
