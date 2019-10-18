import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, radios, object } from '@storybook/addon-knobs';

import '@tradeshift/elements.tabs';
import readme from '../README.md';

storiesOf('ts-tabs', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const dir = radios('dir', ['ltr', 'rtl'], 'ltr');

			const defaultTabs = [
				{ id: 'id1', label: 'One', icon: 'ada' },
				{ id: 'id2', label: 'Two', counter: 12 },
				{ id: 'id3', label: 'Three', closeable: true },
				{ id: 'id4', label: 'Four', selected: true },
				{ id: 'id5', label: 'Five', icon: 'ada', counter: 9, closeable: true, selected: true },
				{ id: 'id6', label: 'Six' }
			];

			const tabs = object('tabs', defaultTabs);

			return html`
				<ts-tabs tabs="${JSON.stringify(tabs)}" dir="${dir}"></ts-tabs>
			`;
		},
		{ note: readme }
	);
