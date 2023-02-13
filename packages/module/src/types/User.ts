export interface User {
    entitlements: {
      [key: string]: {
        is_entitled: boolean;
        is_trial: boolean;
      };
    };
    identity: {
      account_number: string;
      org_id: string;
      internal?: {
        org_id: string;
        account_id: string;
      };
      type: string;
      user?: {
        username: string;
        email: string;
        first_name: string;
        last_name: string;
        is_active: boolean;
        is_internal: boolean;
        is_org_admin: boolean;
        locale: string;
      };
    };
  };