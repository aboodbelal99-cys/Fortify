import ServicePageLayout from '@/components/ServicePageLayout';
import { services } from '@/data/services';

const service = services.find((s) => s.id === 'hr-automation');

export const metadata = {
  title: service.title,
  description: service.brief,
};

export default function HRAutomationPage() {
  return <ServicePageLayout service={service} />;
}
