export interface IGetAccountsResPayload {
  data: {
    current_page: number;
    data: Array<{
      id?: string;
      name: string;
      primary_phone: string;
      mailing_address_id: string;
      mailing_address?: {
        id: string;
        country: string;
        state: string;
        city: string;
        address: string;
        zip: string;
        latitude: null;
        longitude: null;
        account_id: string;
        location_type:{
          id: string;
          name: string
        }
        deleted_at: null;
        created_at: string;
        updated_at: string;
      };
    }>;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
      url: string;
      label: string;
      active: boolean;
    }>;
    next_page_url: string;
    path: string;
    per_page: boolean;
    prev_page_url: string;
    to: number;
    total: number;
  };
  success: boolean;
}
