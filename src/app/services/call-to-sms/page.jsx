import ServicePageLayout from '@/components/ServicePageLayout';
import { services } from '@/data/services';

const service = services.find((s) => s.id === 'call-to-sms');

export const metadata = {
  title: service.title,
  description: service.brief,
};

export default function CallToSmsPage() {
  return <ServicePageLayout service={service} />;
}
