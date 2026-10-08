import { UserProfile } from './types';

export const MOCK_USER: UserProfile = {
  id: 'usr_88291',
  fullName: 'Tunde Bakare',
  email: 'tunde.bakare@brandacompany.com',
  phone: '+234 803 555 0192',
  companyName: 'Apex Creative Studio',
  defaultMarket: 'ng',
  savedAddresses: [
    {
      address: '14B Admiralty Way, Lekki Phase 1',
      city: 'Lagos',
      state: 'Lagos State',
      country: 'Nigeria',
    },
    {
      address: '750 3rd Avenue, Suite 1200',
      city: 'New York',
      state: 'NY',
      country: 'USA',
    },
  ],
};
