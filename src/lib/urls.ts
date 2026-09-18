import { businessConfig } from '@/config/business';

export interface WhatsAppMessagePayload {
  districtOrNeighborhood?: string;
  vehicleType?: string;
  issueDescription?: string;
  destination?: string;
  locationUrl?: string;
}

/**
 * WhatsApp için güvenli ve URL-encoded mesaj bağlantısı üretir.
 */
export function buildWhatsAppUrl(payload: WhatsAppMessagePayload): {
  url: string | null;
  messageText: string;
  isReady: boolean;
} {
  const parts: string[] = ['Merhaba, oto çekici hizmeti hakkında bilgi almak istiyorum.'];

  if (payload.districtOrNeighborhood) {
    parts.push(`Konum: ${payload.districtOrNeighborhood.trim()}`);
  }
  if (payload.vehicleType) {
    parts.push(`Araç: ${payload.vehicleType.trim()}`);
  }
  if (payload.issueDescription) {
    parts.push(`Araç durumu: ${payload.issueDescription.trim()}`);
  }
  if (payload.destination) {
    parts.push(`Taşınacak yer: ${payload.destination.trim()}`);
  }
  if (payload.locationUrl) {
    parts.push(`Konum Linki: ${payload.locationUrl.trim()}`);
  }

  const messageText = parts.join('\n');
  const encodedText = encodeURIComponent(messageText);

  if (!businessConfig.whatsappNumber) {
    return {
      url: null,
      messageText,
      isReady: false
    };
  }

  const cleanNumber = businessConfig.whatsappNumber.replace(/[^0-9]/g, '');
  return {
    url: `https://wa.me/${cleanNumber}?text=${encodedText}`,
    messageText,
    isReady: true
  };
}

/**
 * Telefon arama bağlantısı formatlar. Numara yoksa null döner (boş tel: üretilmez).
 */
export function getPhoneHref(): string | null {
  if (!businessConfig.phoneE164) {
    return null;
  }
  return `tel:${businessConfig.phoneE164}`;
}
