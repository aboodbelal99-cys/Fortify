import ServicePageLayout from '@/components/ServicePageLayout';
import { services } from '@/data/services';

const service = services.find((s) => s.id === 'call-to-whatsapp');

export const metadata = {
  title: service.title,
  description: service.brief,
};

export default function CallToWhatsAppPage() {
  return <ServicePageLayout service={service} />;
}
