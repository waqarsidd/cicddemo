export interface IGetServicesResPayload {
  id: string;
  voyant_id: string;
  carrier_id: string;
  customer_id: string;
  address_id: string;
  status: string;
  carrier: {
    id: string;
    name: string;
  };
  customer: {
    id: string;
    name: string;
  };
  address: {
    id: string;
    country: string;
    state: string;
    city: string;
    zip: string;
    latitude: string;
    longitude: string;
  };
}
