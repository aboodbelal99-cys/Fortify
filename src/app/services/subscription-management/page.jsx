import ServicePageLayout from '@/components/ServicePageLayout';
import { services } from '@/data/services';

const service = services.find((s) => s.id === 'subscription-management');

export const metadata = {
  title: service.title,
  description: service.brief,
};

export default function SubscriptionManagementPage() {
  return <ServicePageLayout service={service} />;
}
