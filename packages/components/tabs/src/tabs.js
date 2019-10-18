import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './tabs.css';
import { customEventNames } from './utils';

import '@tradeshift/elements.icon';
import '@tradeshift/elements.typography';

customElementDefineHelper(
	'ts-tabs',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				// tab properties: {label, icon, selected, closeable, counter}
				tabs: { type: Array, reflect: true },
				dir: { type: String, reflect: true }
			};
		}

		get direction() {
			return this.dir ? this.dir : this.bodyDir;
		}

		tabClickHandler(tab) {
			this.dispatchCustomEvent(customEventNames.TAB_CLICK, { tab });
		}

		iconTemplate(tab) {
			if (!tab.icon) {
				return;
			}
			return html`
				<ts-icon icon="${tab.icon}" size="medium"></ts-icon>
			`;
		}

		badgeTemplate(tab) {
			if (!tab.counter) {
				return;
			}
			return html`
				<em class="badge">${tab.counter}</em>
			`;
		}

		closeButtonTemplate(tab) {
			if (!tab.closeable || !tab.selected) {
				return;
			}
			return html`
				<ts-icon class="close-button" icon="close" size="large"></ts-icon>
			`;
		}

		tabTemplate(tab) {
			/* eslint-disable lit/no-template-bind */
			return html`
				<button ?selected="${tab.selected}" @click="${() => this.tabClickHandler(tab)}">
					${this.iconTemplate(tab)}
					<ts-typography text="${tab.label}" variant="semi-bold"></ts-typography>
					${this.badgeTemplate(tab)} ${this.closeButtonTemplate(tab)}
				</button>
			`;
			/* eslint-enable */
		}

		render() {
			if (!this.tabs) {
				return;
			}
			return html`
				<div class="tabs-wrapper" dir="${this.direction}">
					${this.tabs.map(
						tab =>
							html`
								${this.tabTemplate(tab)}
							`
					)}
				</div>
			`;
		}
	}
);
