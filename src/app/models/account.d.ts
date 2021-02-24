export interface IAccount {
  id?: string;
  name: string;
  primary_phone: string;
  mailing_address_id?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  zip?: string;
  latitude?: null;
  longitude?: null;
  account_id?: string;
  deleted_at?: null;
  created_at?: string;
  updated_at?: string;
}
