// Migration Checklist Data
export const checklistItems = [
  {
    id: 'audit',
    title: 'Audit of the source environment',
    description: 'Odoo / PostgreSQL / Python / Ubuntu versions, installed modules',
    status: 'pending'
  },
  {
    id: 'data-recovery',
    title: 'Data recovery',
    description: 'PostgreSQL dump, filestore, add-ons, configuration files',
    status: 'done'
  },
  {
    id: 'server-provisioning',
    title: 'Server provisioning',
    description: 'Ubuntu server setup with security hardening (SSH keys, UFW, Fail2ban)',
    status: 'done'
  },
  {
    id: 'database-restore',
    title: 'Database restoration',
    description: 'PostgreSQL database restored on independent infrastructure',
    status: 'pending'
  },
  {
    id: 'filestore-migration',
    title: 'Filestore migration',
    description: 'All attachment files transferred and verified',
    status: 'pending'
  },
  {
    id: 'addons-installation',
    title: 'Add-ons installation',
    description: 'Custom and third-party modules installed and configured',
    status: 'pending'
  },
  {
    id: 'nginx-ssl',
    title: 'Nginx + SSL configuration',
    description: 'Reverse proxy setup with Let\'s Encrypt certificate',
    status: 'done'
  },
  {
    id: 'domain-dns',
    title: 'Domain & DNS configuration',
    description: 'DNS records pointing to new server IP',
    status: 'done'
  },
  {
    id: 'smtp-email',
    title: 'SMTP & email configuration',
    description: 'Outbound email system configured and tested',
    status: 'pending'
  },
  {
    id: 'backup-system',
    title: 'Backup system validation',
    description: 'Automated backups configured and restore tested',
    status: 'pending'
  },
  {
    id: 'performance-tuning',
    title: 'Performance tuning',
    description: 'PostgreSQL and Odoo optimized for production load',
    status: 'pending'
  },
  {
    id: 'security-audit',
    title: 'Security audit',
    description: 'Penetration testing and vulnerability assessment completed',
    status: 'pending'
  }
];

// Staging Test Registry
export const stagingTests = [
  {
    id: 'login',
    name: 'User login',
    expectation: 'Valid credentials grant access to the system',
    status: 'pending'
  },
  {
    id: 'user-permissions',
    name: 'User permissions',
    expectation: 'Role-based access control functions correctly',
    status: 'pending'
  },
  {
    id: 'patient-records',
    name: 'Patient records access',
    expectation: 'Historical patient data is complete and accessible',
    status: 'pending'
  },
  {
    id: 'work-orders',
    name: 'Work order creation',
    expectation: 'New dental lab work orders can be created and tracked',
    status: 'pending'
  },
  {
    id: 'inventory',
    name: 'Inventory management',
    expectation: 'Stock levels update correctly on material usage',
    status: 'pending'
  },
  {
    id: 'invoicing',
    name: 'Invoice generation',
    expectation: 'Invoices generate with correct pricing and tax calculations',
    status: 'pending'
  },
  {
    id: 'etimes-integration',
    name: 'eTIMS integration',
    expectation: 'Tax invoices transmit successfully to KRA eTIMS system',
    status: 'pending'
  },
  {
    id: 'reporting',
    name: 'Financial reporting',
    expectation: 'Revenue, receivables, and inventory reports generate accurately',
    status: 'pending'
  },
  {
    id: 'barcode-scanning',
    name: 'Barcode scanning',
    expectation: 'Hardware scanners integrate with inventory module',
    status: 'pending'
  },
  {
    id: 'multi-user',
    name: 'Concurrent user testing',
    expectation: 'System handles multiple simultaneous users without degradation',
    status: 'pending'
  },
  {
    id: 'backup-restore',
    name: 'Backup & restore procedure',
    expectation: 'Full system backup can be restored to a clean environment',
    status: 'pending'
  },
  {
    id: 'disaster-recovery',
    name: 'Disaster recovery drill',
    expectation: 'Recovery time objective (RTO) meets business requirements',
    status: 'pending'
  },
  {
    id: 'mobile-access',
    name: 'Mobile responsiveness',
    expectation: 'System is usable on tablets and mobile devices',
    status: 'pending'
  }
];

// Project Timeline
export const timelineEvents = [
  {
    date: '30/07/2026',
    title: 'Data package received',
    description: 'Octaly transmitted database dump and filestore archive',
    status: 'completed'
  },
  {
    date: '05/08/2026',
    title: 'Independent server deployed',
    description: 'Ubuntu 22.04 LTS server provisioned with security hardening',
    status: 'completed'
  },
  {
    date: '12/08/2026',
    title: 'Domain & SSL configured',
    description: 'DNS records updated and Let\'s Encrypt certificate installed',
    status: 'completed'
  },
  {
    date: '18/08/2026',
    title: 'Infrastructure verification',
    description: 'Public accessibility confirmed via browser verification log',
    status: 'completed'
  },
  {
    date: '22/08/2026',
    title: 'eTIMS form submitted',
    description: 'Regulatory compliance documentation filed with KRA',
    status: 'completed'
  },
  {
    date: '26/08/2026',
    title: 'Current status',
    description: '11 of 12 migration checklist items pending; 13 staging tests awaiting execution',
    status: 'current'
  },
  {
    date: 'TBD',
    title: 'Staging environment validation',
    description: 'Full functional test registry execution',
    status: 'pending'
  },
  {
    date: 'TBD',
    title: 'Production go-live',
    description: 'Final cutover from Octaly hosting to independent infrastructure',
    status: 'pending'
  }
];

// eTIMS Factsheet Data
export const etimsFacts = [
  {
    label: 'Regulatory Body',
    value: 'Kenya Revenue Authority (KRA)'
  },
  {
    label: 'Requirement',
    value: 'Electronic Tax Invoice Management System (eTIMS)'
  },
  {
    label: 'Applicability',
    value: 'All VAT-registered businesses in Kenya'
  },
  {
    label: 'Integration Method',
    value: 'REST API or CSV upload via Odoo module'
  },
  {
    label: 'Status',
    value: 'Form submitted 22/08/2026 - awaiting approval'
  },
  {
    label: 'Timeline',
    value: 'Must be operational before production go-live'
  }
];
