export interface Task {
  name:string,
  display_name:string,
  lang:string,
  type:string,
  active:boolean,
  email:string,
  is_company:boolean,
  color:number,
  partner_share:boolean,
  email_normalized:string,
  message_bounce:number,
  partner_gid:number,
  invoice_warn:string,
  supplier_rank:number,
  customer_rank:number,
  picking_warn:string,
  purchase_warn:string,
  sale_warn:string,
  is_published:boolean,
  warning_stage:number,
  blocking_stage:number,
  active_limit:boolean,
  partner_name:string,
  first_name:string,
  second_name:string,
  create_uid:number,
  write_uid:number,
  write_date:string,
  create_date:string,
  x_password:string,
  country_id:number
}
export interface Paises {
  id:number,
  name:string,
}
export interface Login {
  id:number,
  name:string,
  email:string,
  x_descauto:string,
  x_placas:string,
  x_passowrd:string,
}
export interface GetUsuario {
  email:string
}
export interface getValetParking {
  user_id:string;
}
export interface SetValetParking{
  res_model_id:number,
  res_model:string,
  res_id:number,
  res_name:string,
  activity_type_id:number,
  summary:string,
  note:string,
  date_deadline:string,
  automated:string,
  user_id:number,
  recommended_activity_type_id:number,
  previous_activity_type_id:number,
  create_uid:number,
  create_date:string,
  write_uid:number,
  write_date:string,
  calendar_event_id:number,
  team_id:number
}
export interface SetServicio{
  res_model_id:number,
  res_model:string,
  res_id:number,
  res_name:string,
  activity_type_id:number,
  summary:string,
  note:string,
  date_deadline:string,
  automated:string,
  user_id:number,
  recommended_activity_type_id:number,
  previous_activity_type_id:number,
  create_uid:number,
  create_date:string,
  write_uid:number,
  write_date:string,
  calendar_event_id:number,
  team_id:number
}
export interface SetPartnerCategory{
  category_id:number,
  partner_id:number
}
export interface GetMailActivityTeam{
  mail_activity_team_id:number;
  res_users_id:number;
}
export interface GetResUsers{
  partner_id:number;
}
export interface GetResPartnerPhone{
  mobile:number;
}