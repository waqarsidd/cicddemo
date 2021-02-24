export interface ICreateClaimReqPayload {
  network_id: string;
  caller: string;
  reported_by: string;
  referred_by_type: 'contact' | 'provider';
  referred_by: string;
  carrier_id: string;
  // client_contact: string;
  // client_type: string;
  customer_id: string;
  service_type_id: string;
  service_template_id: string;
  loss_date: string;
  loss_type_id: string;
  loss_cat_id: string;
  cat_ref_id: string;
  source_loss_id: string;
  job_size_id: string;
  loss_affected_room_id: string;
  claim_number: string;
  policy_number: string;
  policy_start_date: string;
  policy_end_date: string;
  loss_description: string;
  special_instructions: string;
  is_emergency_service: '1';
  job_type_id: string; // required jobs
  parent_id: string; // 0
  // job_template_id: string;
  service_type: 'FNOL' | 'Claim' | 'Underwritting' | 'Scan';
}
