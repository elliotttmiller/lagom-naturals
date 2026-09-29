'use client';

import {RevenueCasesChart} from '../ui/OperationsCharts';
import {Button,MetricCard,PageTitle,Panel,SearchBox,SelectField,StatusChip,money} from '../ui/OperationsUI';

const colors=[
  ['Canvas','#FBFAF7'],['Surface','#FFFFFF'],['Border','#E5E7EB'],['Text Primary','#0F172A'],
  ['Text Secondary','#64748B'],['Primary','#16A34A'],['Success','#22C55E'],['Warning','#F59E0B'],['Danger','#EF4444']
];

export default function UILibraryPage({monthly=[]}){
  return <div className="lo-page lo-ui-library">
    <PageTitle title="UI Library" eyebrow="LAGOM OPERATIONS DESIGN SYSTEM"/>
    <div className="lo-library-tabs"><button className="is-active">Foundation</button><button>Components</button><button>Patterns</button><button>Data Display</button><button>Feedback</button><button>Resources</button></div>

    <div className="lo-library-foundation">
      <Panel title="Colors">
        <p className="lo-panel-description">Core color palette used throughout Lagom Operations.</p>
        <div className="lo-color-grid">{colors.map(([name,value])=><div key={name}><i style={{background:value}}/><strong>{name}</strong><span>{value}</span></div>)}</div>
      </Panel>
      <Panel title="Typography">
        <p className="lo-panel-description">Type scale and usage examples.</p>
        <div className="lo-type-samples">
          <div><span>Display</span><strong className="is-display">UI Library</strong><small>48 / Semibold</small></div>
          <div><span>Page Title</span><strong className="is-page">Design System</strong><small>32 / Semibold</small></div>
          <div><span>Section Title</span><strong className="is-section">Component Example</strong><small>20 / Semibold</small></div>
          <div><span>Body</span><strong className="is-body">This is body text used for general content across the application.</strong><small>14 / Regular</small></div>
          <div><span>Small Text</span><strong className="is-small">This is small text for supporting content and metadata.</strong><small>12 / Regular</small></div>
          <div><span>Tabular Numerals</span><strong className="is-numeral">$583.92　1,234　56.7%</strong><small>14 / Medium (Tabular)</small></div>
        </div>
      </Panel>
    </div>

    <div className="lo-library-middle">
      <Panel title="Buttons"><p className="lo-panel-description">Button styles for primary actions, secondary actions, and more.</p><div className="lo-demo-row"><Button variant="success">Primary</Button><Button>Secondary</Button><Button variant="ghost">Ghost</Button><Button variant="danger">Destructive</Button><Button>⚙</Button></div></Panel>
      <Panel title="Fields"><p className="lo-panel-description">Form field components and states.</p><div className="lo-field-demo"><SearchBox value="" placeholder="Search…"/><input placeholder="Input text"/><SelectField value="Select option"><option>Select option</option></SelectField><Button>□　Feb 1, 2025 – Feb 28, 2025⌄</Button><StatusChip>Product: 24K Lemonade　×</StatusChip></div></Panel>
      <Panel title="Status Chips"><p className="lo-panel-description">Status indicators for records and workflows.</p><div className="lo-chip-demo"><StatusChip>Paid</StatusChip><StatusChip>Open</StatusChip><StatusChip>Overdue</StatusChip><StatusChip>Draft</StatusChip><StatusChip>Recorded</StatusChip></div></Panel>
    </div>

    <div className="lo-library-data">
      <Panel title="Table Language"><p className="lo-panel-description">Table styles including default, hover, selected, and sticky header.</p><table className="lo-data-table lo-data-table--compact"><thead><tr><th>Invoice #</th><th>Account</th><th>Cases</th><th>Revenue</th><th>Status</th></tr></thead><tbody>
        <tr><td><strong>1088</strong></td><td>Wayzata Smoke Shop & Vape</td><td>3</td><td>$191.76</td><td><StatusChip>Paid</StatusChip></td></tr>
        <tr><td><strong>1087</strong></td><td>Lake Life Dispensary</td><td>2</td><td>$127.92</td><td><StatusChip>Open</StatusChip></td></tr>
        <tr><td><strong>1086</strong></td><td>North Loop Market</td><td>2</td><td>$127.92</td><td><StatusChip>Overdue</StatusChip></td></tr>
        <tr><td><strong>1085</strong></td><td>Pine & Lake</td><td>1</td><td>$72.32</td><td><StatusChip>Draft</StatusChip></td></tr>
      </tbody></table></Panel>

      <Panel title="Metric Blocks"><p className="lo-panel-description">KPI card examples used across the product.</p><div className="lo-library-metrics">
        <MetricCard label="Revenue" value={money(583.92)} trend="+12%" spark={[10,20,16,32,40,36,55,61]}/>
        <MetricCard label="Cases" value="8" trend="+14%" spark={[1,2,2,3,4,4,5,7]}/>
        <MetricCard label="Gross Profit" value="$7.92" trend="+9%" spark={[0,1,1,2,2,4,5,6]}/>
        <MetricCard label="Margin" value="1.4%" trend="+0.2%" spark={[0,1,1,2,3,3,4,4]}/>
      </div></Panel>
      <Panel title="Chart Styles"><RevenueCasesChart rows={monthly} height={190}/></Panel>
    </div>

    <Panel title="Feedback Components">
      <div className="lo-feedback-grid">
        <div><span>Toast Notification</span><div className="lo-toast is-success"><i>✓</i><strong>Invoice updated<small>Invoice 1086 has been marked as paid.</small></strong><b>×</b></div></div>
        <div><span>Inline Alert</span><div className="lo-toast is-warning"><i>!</i><strong>Action required<small>2 accounts need follow-up.</small></strong><b>×</b></div></div>
        <div><span>Empty State</span><div className="lo-library-empty"><i>□</i><strong>No invoices found</strong><span>Try adjusting your filters or date range.</span><Button>Clear filters</Button></div></div>
        <div><span>Loading Skeleton</span><div className="lo-skeleton"><i/><span/><span/><b/><b/></div></div>
      </div>
    </Panel>
  </div>;
}
