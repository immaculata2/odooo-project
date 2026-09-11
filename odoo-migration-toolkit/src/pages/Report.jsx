import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Factsheet from '../components/Factsheet';
import { timelineEvents, etimsFacts } from '../data/migrationData';
import './report.css';

const Report = () => {
  return (
    <main className="report-page">
      <Hero
        title="Migration Validation Report"
        subtitle="Comprehensive documentation of the Odoo migration project for Labocast Kenya, covering context, architecture, checklist, and test registry."
        metadata={[
          'Version 1.0',
          'Last Updated: 26/08/2026',
          'Status: In Progress'
        ]}
      />

      <div className="container report-content">
        {/* Executive Summary */}
        <section className="report-section">
          <h2>Executive Summary</h2>
          <p>
            This report documents the migration of Labocast Kenya's Odoo Community v10 system 
            from external hosting provider Octaly to independent infrastructure. The migration 
            is part of a broader initiative by Reuni Dent Africa Ltd to take full ownership 
            and control of their business systems.
          </p>
          <p>
            As of 26/08/2026, the data package has been received from Octaly, the independent 
            server has been deployed and verified as publicly reachable, and the eTIMS 
            regulatory form has been submitted to KRA. However, 11 of 12 migration checklist 
            items remain pending validation, and all 13 staging tests await execution.
          </p>
        </section>

        {/* Project Context */}
        <section className="report-section">
          <h2>Project Context</h2>
          <div className="report-card">
            <h3>Background</h3>
            <p>
              Labocast Kenya, a dental laboratory under the Reuni Dent Africa group, has had 
              their Odoo ERP system hosted and maintained entirely by Octaly, an external 
              service provider. The company now seeks to bring this critical business system 
              in-house for greater control, cost efficiency, and regulatory compliance.
            </p>
            
            <h3>Objectives</h3>
            <ul>
              <li>Recover complete database and filestore from Octaly</li>
              <li>Deploy secure, independent infrastructure</li>
              <li>Ensure zero data loss during migration</li>
              <li>Maintain business continuity throughout transition</li>
              <li>Achieve eTIMS compliance for Kenyan tax regulations</li>
              <li>Establish internal DevOps capability for ongoing maintenance</li>
            </ul>

            <h3>Stakeholders</h3>
            <ul>
              <li><strong>Labocast Kenya</strong> - End user and beneficiary</li>
              <li><strong>Reuni Dent Africa Ltd</strong> - Parent organization</li>
              <li><strong>TALIAD LTD</strong> - Technical consulting partner (internship host)</li>
              <li><strong>Octaly</strong> - Previous hosting provider</li>
              <li><strong>KRA</strong> - Kenya Revenue Authority (eTIMS regulator)</li>
            </ul>
          </div>
        </section>

        {/* Target Architecture */}
        <section className="report-section">
          <h2>Target Architecture</h2>
          <div className="report-card">
            <h3>Infrastructure Components</h3>
            <div className="architecture-grid">
              <div className="arch-item">
                <span className="arch-icon">🖥️</span>
                <div>
                  <strong>Operating System</strong>
                  <p>Ubuntu 22.04 LTS with security hardening</p>
                </div>
              </div>
              <div className="arch-item">
                <span className="arch-icon">🐘</span>
                <div>
                  <strong>Database</strong>
                  <p>PostgreSQL with automated backups</p>
                </div>
              </div>
              <div className="arch-item">
                <span className="arch-icon">⚙️</span>
                <div>
                  <strong>Application</strong>
                  <p>Odoo Community v10 with custom modules</p>
                </div>
              </div>
              <div className="arch-item">
                <span className="arch-icon">🔒</span>
                <div>
                  <strong>Security</strong>
                  <p>SSH keys, UFW firewall, Fail2ban</p>
                </div>
              </div>
              <div className="arch-item">
                <span className="arch-icon">🌐</span>
                <div>
                  <strong>Web Server</strong>
                  <p>Nginx reverse proxy with Let's Encrypt SSL</p>
                </div>
              </div>
              <div className="arch-item">
                <span className="arch-icon">💾</span>
                <div>
                  <strong>Backup</strong>
                  <p>Automated daily backups with offsite storage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <Timeline events={timelineEvents} />

        {/* eTIMS Factsheet */}
        <Factsheet title="eTIMS Regulatory Compliance" facts={etimsFacts} />

        {/* Migration Checklist Reference */}
        <section className="report-section">
          <h2>Migration Checklist (Reference)</h2>
          <div className="report-card">
            <p>The following 12 items must be completed before production go-live:</p>
            <ol className="checklist-reference">
              <li>Audit of the source environment (Odoo/PostgreSQL/Python/Ubuntu versions, modules)</li>
              <li>Data recovery (PostgreSQL dump, filestore, add-ons, configuration)</li>
              <li>Server provisioning (Ubuntu with SSH keys, UFW, Fail2ban)</li>
              <li>Database restoration on independent infrastructure</li>
              <li>Filestore migration and verification</li>
              <li>Add-ons installation and configuration</li>
              <li>Nginx + SSL configuration</li>
              <li>Domain & DNS configuration</li>
              <li>SMTP & email configuration</li>
              <li>Backup system validation</li>
              <li>Performance tuning</li>
              <li>Security audit and penetration testing</li>
            </ol>
          </div>
        </section>

        {/* Staging Test Registry Reference */}
        <section className="report-section">
          <h2>Staging Test Registry (Reference)</h2>
          <div className="report-card">
            <p>The following 13 functional tests must pass before production go-live:</p>
            <ol className="checklist-reference">
              <li>User login - Valid credentials grant access</li>
              <li>User permissions - Role-based access control functions correctly</li>
              <li>Patient records access - Historical data complete and accessible</li>
              <li>Work order creation - New dental lab orders can be created and tracked</li>
              <li>Inventory management - Stock levels update correctly</li>
              <li>Invoice generation - Correct pricing and tax calculations</li>
              <li>eTIMS integration - Tax invoices transmit to KRA successfully</li>
              <li>Financial reporting - Revenue, receivables, inventory reports accurate</li>
              <li>Barcode scanning - Hardware scanners integrate with inventory</li>
              <li>Concurrent user testing - Multiple users without degradation</li>
              <li>Backup & restore procedure - Full backup can be restored</li>
              <li>Disaster recovery drill - RTO meets business requirements</li>
              <li>Mobile responsiveness - Usable on tablets and mobile devices</li>
            </ol>
          </div>
        </section>

        {/* Next Steps */}
        <section className="report-section">
          <h2>Next Steps</h2>
          <div className="report-card highlight">
            <ol>
              <li>Complete remaining 11 migration checklist items</li>
              <li>Execute full staging test registry (13 tests)</li>
              <li>Validate backup and restore procedures</li>
              <li>Obtain eTIMS approval from KRA</li>
              <li>Conduct user acceptance testing with Labocast staff</li>
              <li>Schedule production cutover window</li>
              <li>Execute go-live with rollback plan ready</li>
              <li>Post-migration monitoring and optimization</li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Report;
