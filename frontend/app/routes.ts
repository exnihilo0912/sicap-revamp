import {
  type RouteConfig,
  index,
  layout,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout('./layouts/BaseLayout.tsx',
    [
      index('routes/home.tsx'),
      route('dashboard', 'routes/dashboard/home.tsx'),
      route('billing', 'routes/billing/home.tsx'),
      route('usage', 'routes/usage/home.tsx'),
      route('meter-reading', 'routes/meter-reading/home.tsx'),
      ...prefix(
        'services',
        [
          ...prefix('contact', [
            route('membership', 'routes/services/contact/membership.tsx'),
            route('tech-assist', 'routes/services/contact/tech-assist.tsx'),
            route('request-history', 'routes/services/contact/request-history.tsx'),
            route('cancel-membership', 'routes/services/contact/cancel-membership.tsx'),
          ]),
          ...prefix('payment',
            [
              route('auto-widthdrawal', 'routes/services/payment/auto-widthdrawal.tsx'),
              route('update', 'routes/services/payment/update.tsx'),
              route('schedule', 'routes/services/payment/schedule.tsx'),
              route('bank-account', 'routes/services/payment/bank-account.tsx'),
            ],
          ),
          ...prefix('account', [
            route('update', 'routes/services/account/update.tsx'),
            route('e-receipt', 'routes/services/account/e-receipt.tsx'),
          ]),
        ],
      ),
    ],
  ),
] satisfies RouteConfig;
