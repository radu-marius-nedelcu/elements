import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.tabs';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-tabs', module).add('test', () => {
	const properties = {
		dir: {
			rtl: 'rtl',
			ltr: 'ltr'
		}
	};

	const options = {
		columns: 1,
		persistent_props: {
			tabs: [
				{ id: 'id1', label: 'One', icon: 'ada' },
				{ id: 'id2', label: 'Two', counter: 12 },
				{ id: 'id3', label: 'Three', closeable: true },
				{ id: 'id4', label: 'Four', selected: true },
				{ id: 'id5', label: 'Five', icon: 'ada', counter: 9, closeable: true, selected: true },
				{ id: 'id6', label: 'Six' }
			]
		}
	};

	return createHappoStories('tabs', properties, '', options);
});
