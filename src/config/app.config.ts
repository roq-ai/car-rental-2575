interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Vehicle Owner', 'Reservation Manager', 'Performance Analyst'],
  tenantName: 'Organization',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage User profiles',
    'Manage vehicle information',
    'Invite and remove Vehicle Owners, Reservation Managers, and Performance Analysts',
    'View all user and vehicle data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/00ef577e-2071-4965-b394-b8e8b3cbb10f',
};
