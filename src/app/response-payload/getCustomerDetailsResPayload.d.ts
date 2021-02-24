import { IGenericResPayload } from "./genericResPayload";

export interface IGetCustomerDetailsResPayload extends IGenericResPayload {
  data?: CustomerDetailData;
}

interface CustomerDetailData {
  company_type: string;
  contact_info: ContactInfo;
  email: string;
  id: string;
  name: string;
  phone_no: string;
  primary: Primary;
}

interface ContactInfo {
  account_id: string;
  business_phone: string;
  created_at: string;
  fax_number: string;
  home_phone: string;
  id: string;
  mobile_phone: string;
  updated_at: string;
}

interface Primary {
  account_id: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zip: string;
}
